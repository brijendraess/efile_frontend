import * as React from 'react';
import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import logo from '../../assets/logo.webp'

import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import type { Session } from '@toolpad/core';

import { NAVIGATION } from './SidebarContent'
import { Outlet } from 'react-router-dom';
import CustomBreadCrumbs from '../BreadCrumbs/CustomBreadCrumbs';
import { BodyWrapper } from '../../GlobalStyle';

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});


interface iProps {
}

export default function Layout(props: iProps) {
    const [session, setSession] = useState<Session | null>(null);

    const authentication = useMemo(() => {
        return {
            signIn: async () => {
                setSession({
                    user: {
                        name: 'Bharat Kashyap',
                        email: 'bharatkashyap@outlook.com',
                        image: 'https://avatars.githubusercontent.com/u/19550456',
                    },
                });
                return { success: true };
            },
            signOut: async () => {
                setSession(null);
                return { success: true };
            },
            session,
            loading: typeof window === 'undefined',
        };
    }, [session]);

    return (
        <ReactRouterAppProvider
            navigation={NAVIGATION}
            authentication={authentication}
            theme={theme}
            session={session}
            branding={{
                logo: <img src={logo} alt="MUI logo" />,
                title: 'E-File',
            }}
        >
            <DashboardLayout
                defaultSidebarCollapsed={true}
                sx={{
                    // Sidebar container
                    "& .MuiDrawer-paper": {
                        "& .MuiListItem-root": {
                            padding: '0 10px',
                        },

                        // List item buttons
                        "& .MuiListItemButton-root": {
                            borderRadius: 3,
                        },

                        // Icons
                        "& .MuiListItemIcon-root": {
                            minWidth: "32px !important",
                            "& svg": {
                                fontSize: "20px",
                            },
                        },

                        // Text
                        "& .MuiListItemText-primary": {
                            fontSize: "9px",
                            fontWeight: 100,
                            fontFamily: 'Poppins'
                        },
                        "& .MuiTypography-caption": {
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.5px",
                        }
                    }
                }}
            >
                <BodyWrapper>
                    <CustomBreadCrumbs />
                    <Outlet />
                </BodyWrapper>
            </DashboardLayout>
        </ReactRouterAppProvider>
    );
}
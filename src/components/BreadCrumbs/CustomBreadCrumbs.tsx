import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import CustomButton from '../Buttons/CustomButton';
import { KeyboardBackspaceIcon } from '../Icons/AllIcons';


export default function CustomBreadCrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const navigate = useNavigate()
    const handleGoBackButton = () => {
        navigate(-1)
    }
    return (
        <div className='flex w-full justify-between flex-row items-center '>
            <Breadcrumbs aria-label="breadcrumb" className=''>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    E-File
                </Link>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return last ? (
                        <Typography color="text.primary" key={to}>
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </Typography>
                    ) : (
                        <Link
                            to={to}
                            key={to}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </Link>
                    );
                })}
            </Breadcrumbs>
            <CustomButton
                onClick={handleGoBackButton}
                disabled={false}
                background='#3F72af'
                Icon={KeyboardBackspaceIcon}
                fontSize={'medium'}
                title='Go Back'

            />
        </div>
    );
}

// #A112D4e
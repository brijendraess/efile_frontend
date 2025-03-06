// components/FullScreenDialog.tsx
import { Dialog, IconButton, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { CloseIcon } from '../Icons/AllIcons';
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const Transition = (props: TransitionProps & { children: React.ReactElement }) => (
    <Slide direction="up" {...props} />
);

interface FullScreenDialogProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const FullScreenDialog = ({
    open,
    onClose,
    title,
    children
}: FullScreenDialogProps) => {
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flex: 1 }}>
                        {title}
                    </Typography>
                    <IconButton edge="end" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    height: '100vh',
                    zIndex: "10000",
                    minWidth: "300px",
                    overflowY: "scroll",
                    padding: 3
                }}
            >
                {children}
            </Box>
        </Dialog>
    );
};

export default FullScreenDialog;
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import folderIcon from '../../../assets/file.png';

interface FileComponentProps {
    name: string;
    size: string;
    onOpenDialog: () => void;
}

const FileComponent = ({ name, size, onOpenDialog }: FileComponentProps) => {
    return (
        <Paper sx={{ width: 150, border: '1px solid grey', padding: 1 }}>
            <Card sx={{ width: 150, border: '1px solid grey' }}>
                <CardActionArea onClick={onOpenDialog}>
                    <CardMedia
                        component="img"
                        height="75"
                        image={folderIcon}
                        alt="file icon"
                        sx={{
                            width: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                    <CardContent sx={{ padding: 1 }}>
                        <Typography sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontSize: "9px",
                            overflowWrap: "anywhere"
                        }}>
                            {name}
                        </Typography>
                        <Typography sx={{ fontSize: "9px" }}>
                            {size}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    );
};

export default FileComponent;
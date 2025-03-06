import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import folderIcon from '../../../assets/folderIcom.png'

interface folderComponentProps {
    name: string
    isSelected: boolean
    onClick: () => void
}



const FolderComponent = ({ name, isSelected, onClick }: folderComponentProps) => {
    return (
        <Paper sx={{
            maxWidth: 175, border: isSelected ? '2px solid #1976d2' : 'none',
            boxShadow: isSelected ? 3 : 1,
        }}>
            <Card sx={{ maxWidth: 175, }}>
                <CardActionArea onClick={onClick}>
                    <CardMedia
                        component="img"
                        height="75"
                        image={folderIcon}
                        alt="green iguana"
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                    <CardContent sx={{
                        padding: 0
                    }} >
                        <Typography sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontSize: '9px'
                        }}>
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    )
}

export default FolderComponent
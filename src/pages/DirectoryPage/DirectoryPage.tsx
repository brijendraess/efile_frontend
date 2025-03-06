import { Divider, Grid2, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import FolderComponent from './DirectoryComponent/FolderComponent';
import FileComponent from './DirectoryComponent/FileComponent';
import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { FileItem } from '../../types';

interface DirectoryPageProps { }

const folderStructure = [
    {
        id: 1,
        name: 'Documents',
        files: [
            { id: 1, name: 'DHCIND/PCJ/DOC/1', size: '20kb' },
            { id: 2, name: 'DHCIND/PCJ/DOC/2', size: '30kb' },
        ]
    },
    {
        id: 2,
        name: 'Images',
        files: [
            { id: 3, name: 'DHCIND/PCJ/IMG/1', size: '244kb' },
            { id: 4, name: 'DHCIND/PCJ/IMG/2', size: '312kb' },
        ]
    },
];

const DirectoryPage = ({ }: DirectoryPageProps) => {
    const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
    const [currentFiles, setCurrentFiles] = useState<FileItem[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

    const handleFolderClick = (folderId: number) => {
        setSelectedFolder(folderId);
        const folder = folderStructure.find(f => f.id === folderId);
        setCurrentFiles(folder?.files || []);
    };

    const handleFileClick = (file: FileItem) => {
        setSelectedFile(file);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedFile(null);
    };

    const todayDate = new Date()
    const formattedDate = todayDate.toLocaleDateString()
    return (
        <>
            <Paper sx={{ padding: 2, mb: 1 }}>
                <Typography variant="h6">File Archive</Typography>
                <Divider />
                <Grid2 container spacing={1} mt={1} mb={1}>
                    {folderStructure.map((folder) => (
                        <Grid2 key={folder.id} size={2}>
                            <FolderComponent
                                name={folder.name}
                                isSelected={selectedFolder === folder.id}
                                onClick={() => handleFolderClick(folder.id)}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Paper>

            <Paper sx={{ padding: 2, mb: 1 }}>
                <Typography variant="h6">
                    {selectedFolder ?
                        `${folderStructure.find(f => f.id === selectedFolder)?.name} Files` :
                        'All Files'}
                </Typography>
                <Divider />
                <Grid2 container spacing={3} mt={1} mb={1}>
                    {currentFiles.length > 0 ? (
                        currentFiles.map((file) => (
                            <Grid2 key={file.id} size={2}>
                                <FileComponent
                                    name={file.name}
                                    size={file.size}
                                    onOpenDialog={() => handleFileClick(file)}
                                />
                            </Grid2>
                        ))
                    ) : (
                        <Typography sx={{ p: 2 }}>No files in this folder</Typography>
                    )}
                </Grid2>
            </Paper>

            <FullScreenDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                title={selectedFile?.name || 'File Details'}
            >
                {selectedFile && (
                    <div>
                        <h3>File Details</h3>
                        <p>Digital Reference Number: {selectedFile.name}</p>
                        <p>Receipt From: GOVERNOR (NAKURU COUNTY)</p>
                        <p>Receipt Mode: Post</p>
                        <p>Document Type: Letter</p>
                        <p>Receipt Date: {formattedDate}</p>
                    </div>
                )}
            </FullScreenDialog>
        </>
    );
};

export default DirectoryPage;
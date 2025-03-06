import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface DataGridProps {
    rows: readonly any[];
    columns: GridColDef[];
    height: number;
    width: number
}

export default function DataGridComponent({ rows, columns, height, width }: DataGridProps) {
    return (
        <Box sx={{
            height: height,
            width: `${width}%`,
            '& .MuiDataGrid-root': {
                border: 'none',
                fontSize: '9px'
            },
            '& .MuiDataGrid-cell': {
                color: 'text.primary',
            }
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
                sx={{
                    backgroundColor: 'background.paper',  // Ensure proper background
                    '& .MuiCheckbox-root': {  // Ensure checkbox visibility
                        color: 'text.secondary',

                    }
                }}
            />
        </Box>
    );
}
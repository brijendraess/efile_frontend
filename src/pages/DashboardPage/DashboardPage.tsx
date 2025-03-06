import React from 'react';
import { Grid2, Paper, useTheme } from '@mui/material';
import DashboardCard from './DashboardComponents/DashboardCard';
import DataGridComponent from '../../components/DataGrid/DataGridComponent';
import { GridColDef } from '@mui/x-data-grid';
import ChartsComponent from './DashboardComponents/ChartsComponent';



const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const DashboardPage = () => {
    const [value, setValue] = React.useState('one');
    const theme = useTheme();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className='flex flex-col gap-4 mt-2 '>
            <Paper style={{
                padding: '16px',
                border: `1px solid ${theme.palette.divider}`,
                minHeight: '200px',
                height: 'auto'
            }}>
                <DashboardCard />
                <ChartsComponent />
            </Paper>
            <Paper style={{
                padding: '16px',
                border: `1px solid ${theme.palette.divider}`,
                minHeight: '200px'
            }}>
                <Grid2 container spacing={2}>
                    <Grid2 size={6}>
                        <DataGridComponent rows={rows} columns={columns} height={400} width={100} />
                    </Grid2>
                    <Grid2 size={6}>
                        <DataGridComponent rows={rows} columns={columns} height={400} width={100} />
                    </Grid2>
                </Grid2>
            </Paper>
        </div >
    );
};

export default DashboardPage;
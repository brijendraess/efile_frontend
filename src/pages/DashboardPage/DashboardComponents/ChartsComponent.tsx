import * as React from 'react';
import FilesBarChart from '../../../components/Charts/FilesBarChart';
import { Grid2 } from '@mui/material';
import FilesPieChart from '../../../components/Charts/FilesPieChart';

export default function ChartsComponent() {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={6}>
                <FilesBarChart />
            </Grid2>
            <Grid2 size={6}>
                <FilesPieChart />
            </Grid2>
        </Grid2>
    );
}
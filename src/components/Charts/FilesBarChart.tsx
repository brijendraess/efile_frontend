import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function FilesBarChart() {
    return (
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['Created Files', 'Recieved Files', 'Pending Files', 'Outgoing Files', 'Created Letters', 'Recieved Letters', 'Pending Letters', 'Outgoing Letters'] }]}
            series={[{ data: [2423, 2210, 764, 1879, 1478, 1373, 1891, 2171] }]}
            width={450}
            height={300}
            sx={{
                fontSize: '9px !important'
            }}
        />
    );
}
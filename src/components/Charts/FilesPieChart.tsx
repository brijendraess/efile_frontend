import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function FilesPieChart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={450}
      height={300}
      sx={{
        fontSize: '9px !important'
      }}
    />
  );
}

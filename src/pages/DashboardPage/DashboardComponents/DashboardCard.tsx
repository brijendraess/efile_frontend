import { Paper } from '@mui/material';
import { FC } from 'react';
import cardbg from '../../../assets/cardbg.png'

interface InfoCount {
    id: number;
    title: string;
    count: number;
    date?: string;
}

const today: string = new Date().toISOString().split("T")[0];


const info: InfoCount[] = [
    {
        id: 1,
        title: 'Created Files',
        count: 2,
        date: today,
    },
    {
        id: 2,
        title: 'Recieved Files',
        count: 12,
        date: today,
    },
    {
        id: 3,
        title: 'Pending Files',
        count: 122,
        date: today,
    },
    {
        id: 4,
        title: 'Outgoing Files',
        count: 23,
        date: today,
    },
    {
        id: 5,
        title: 'Created Letters',
        count: 29,
        date: today,
    },
    {
        id: 6,
        title: 'Recieved Letters',
        count: 92,
        date: today,
    },
    {
        id: 7,
        title: 'Pending Letters',
        count: 32,
        date: today,
    },
    {
        id: 8,
        title: 'Outgoing Letters',
        count: 11,
        date: today,
    },

];

const getColorClass = (index: number): string => {
    const position = index + 1;
    if (position % 6 === 0) return 'bg-[#4c49ea]';
    if (position % 5 === 0) return 'bg-[#cd3e94]';
    if (position % 4 === 0) return 'bg-[#952aff]';
    if (position % 3 === 0) return 'bg-[#e44002]';
    if (position % 2 === 0) return 'bg-[#3ecd5e]';
    return 'bg-[#f9b234]';
};

const InfoCountCard: FC<{ item: InfoCount; index: number }> = ({ item, index }) => (
    <div className="w-full p-2 sm:w-1/2 lg:w-1/4 gap-2">
        <Paper
            elevation={2}
            className="group relative block overflow-hidden bg-gray-700 p-4 transition-all duration-500 hover:text-white h-28"
        >
            {/* Background Image */}
            <img
                src={cardbg}
                className="absolute right-[0px] top-[5px] h-10 w-10 object-cover z-10"
                alt="background"
            />

            {/* Colored Circle */}
            <div
                className={`absolute -right-[60px] -top-[60px] h-32 w-32 rounded-full transition-transform duration-500 ease-in-out ${getColorClass(
                    index
                )} group-hover:scale-[10] z-1`}
            />

            <div className="relative z-10 min-h-[50px] mb-2">
                <h3 className="font-bold text-[9px]">
                    {item.title}
                </h3>
            </div>
            <div className="relative z-10 flex justify-between items-center">
                {item.count && (
                    <div className="relative z-10 text-xxs">
                        <span className="font-bold font-mono text-amber-400 transition-colors duration-500 group-hover:text-white">
                            {item.count}
                        </span>
                    </div>
                )}
                {item.date && (
                    <div className="relative z-10" >
                        <span className="font-mono text-amber-400 transition-colors duration-500 group-hover:text-white text-xxs " >
                            {item.date}
                        </span>
                    </div>
                )}
            </div>
        </Paper>
    </div>
);

export default function DashboardCard() {
    return (
        <div className="mx-auto max-w-[1142px] px-4">
            <div className="-mx-4 flex flex-wrap py-[50px]">
                {info.map((item, index) => (
                    <InfoCountCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}
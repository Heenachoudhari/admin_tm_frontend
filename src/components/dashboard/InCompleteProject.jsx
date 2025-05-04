'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { RiProgress6Line } from 'react-icons/ri';
import { FaEllipsisH } from 'react-icons/fa';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function InprogressProject() {
    const data = {
        datasets: [
            {
                data: [20, 80],
                backgroundColor: ['#10B981', '#E5E7EB'],
                borderWidth: 0,
                cutout: '70%',
            },
        ],
    };

    const options = {
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        cutout: '70%',
    };

    return (
        <div className="bg-white relative rounded-xl shadow-[0px_3px_4px_rgba(0,0,0,0.4)] p-4 flex justify-between px-14 items-center w-full max-w-xl h-44">
            {/* Left Section */}
            <div className="absolute top-2 right-4 text-[#7B7B7B]"><FaEllipsisH size={35} /></div>
            <div className="bg-green-100 p-3 mt-4 rounded-lg">
                <RiProgress6Line size={70} className='text-[#09CB61]' />
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className="text-md font-bold text-black -mt-9 mb-4">Inprogress Projects</p>
                <h3 className="text-4xl font-bold text-[#09CB61]">02</h3>
            </div>


            {/* Right - Doughnut Chart */}
            <div className="relative w-32 h-32">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-700">
                    20%
                </div>
            </div>
        </div>
    );
}

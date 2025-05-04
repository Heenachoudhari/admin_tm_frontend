'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
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
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center w-full max-w-md">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 11H7V7a5 5 0 0 1 6 6Z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Inprogress Projects</p>
                    <h3 className="text-2xl font-bold text-green-600">02</h3>
                </div>
            </div>

            {/* Right - Doughnut Chart */}
            <div className="relative w-16 h-16">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700">
                    20%
                </div>
            </div>
        </div>
    );
}

'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function CloseProject() {
    const data = {
        datasets: [
            {
                data: [50, 50],
                backgroundColor: ['#1E40FF', '#F2F2F2'],
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
            {/* Left */}
            <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM10 14l-2-2 1.41-1.41L10 11.17l4.59-4.59L16 8l-6 6z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Complete Projects</p>
                    <h3 className="text-2xl font-bold text-blue-600">05</h3>
                </div>
            </div>

            {/* Right - Chart */}
            <div className="relative w-16 h-16">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700">
                    50%
                </div>
            </div>
        </div>
    );
}

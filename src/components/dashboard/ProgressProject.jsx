'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProgressProject() {
    const data = {
        datasets: [
            {
                data: [100, 0],
                backgroundColor: ['#FACC15', '#E5E7EB'],
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
                <div className="bg-yellow-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm2 2v3h3V5H5zm5 0v3h3V5h-3zm5 0v3h3V5h-3zM5 10v3h3v-3H5zm5 0v3h3v-3h-3zm5 0v3h3v-3h-3zM5 15v3h3v-3H5zm5 0v3h3v-3h-3zm5 0v3h3v-3h-3z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Total Projects</p>
                    <h3 className="text-2xl font-bold text-yellow-500">10</h3>
                </div>
            </div>

            {/* Right - Doughnut Chart */}
            <div className="relative w-16 h-16">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700">
                    100%
                </div>
            </div>
        </div>
    );
}

import React from 'react';

const projectData = [
    {
        role: 'Team Leader',
        nameColor: 'text-blue-600',
        borderColor: 'border-l-4 border-orange-500',
        image: '/dashboard/profile1.png',
        description: 'Design charges for the dashboard page',
    },
    {
        role: 'Junior Developer',
        nameColor: 'text-blue-600',
        borderColor: 'border-l-4 border-blue-600',
        image: '/dashboard/profile2.png',
        description: 'Need to the login page for the Air India Website project',
    },
    {
        role: 'Senior Developer',
        nameColor: 'text-blue-600',
        borderColor: 'border-l-4 border-green-600',
        image: '/dashboard/profile3.png',
        description: 'Implement chat features for the Air India Project',
    },
];

export default function OngoingProject() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-[0px_3px_4px_rgba(0,0,0,0.4)] max-w-xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Ongoing Projects</h2>
                <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                </div>
            </div>

            {projectData.map((project, index) => (
                <div
                    key={index}
                    className={`flex items-start bg-white p-4 rounded-lg shadow-sm mb-4 ${project.borderColor}`}
                >
                    <img
                        src={project.image}
                        alt={project.role}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                        <p>
                            <span className={`font-semibold ${project.nameColor}`}>
                                {project.role}
                            </span>{' '}
                            : assigned the&nbsp;
                            <span className="text-gray-700 font-medium">“{project.description}”</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

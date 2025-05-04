import React from 'react'

export default function AddTask() {
    return (
        <div className="h-auto p-8">
            <div className="mx-auto max-w-2xl bg-white rounded-lg shadow-md p-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Task</h1>

                {/* Task Details Section */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Task Details :</h2>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor='task assign' className="block text-sm font-medium text-gray-600 mb-1">Task Title :</label>
                            <input type="text" className="w-full p-2 border rounded-md" />
                        </div>

                        <div>
                            <label htmlFor='description' className="block text-sm font-medium text-gray-600 mb-1">Description :</label>
                            <textarea className="w-full p-2 border rounded-md h-24" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor='due date' className="block text-sm font-medium text-gray-600 mb-1">Due Date :</label>
                                <input
                                    type="date"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="DD/MM/YYYY"
                                />
                            </div>
                            <div>
                                <label htmlFor='due time' className="block text-sm font-medium text-gray-600 mb-1">Due Time :</label>
                                <input
                                    type="time"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="HH:MM"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assignment Table */}
                <div className="mb-8">
                    <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                        <tbody>
                            <tr className="bg-gray-50">
                                <th className="border border-gray-300 p-3 text-left">Assigned to</th>
                                <th className="border border-gray-300 p-3 text-left">Assign Date</th>
                                <th className="border border-gray-300 p-3 text-left">Department</th>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">Name</td>
                                <td className="border border-gray-300 p-3">DD-MM-YY</td>
                                <td className="border border-gray-300 p-3">IT-Department</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <th className="border border-gray-300 p-3 text-left">Priority</th>
                                <th className="border border-gray-300 p-3 text-left">Status</th>
                                <th className="border border-gray-300 p-3 text-left">Tog Member</th>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">High</td>
                                <td className="border border-gray-300 p-3">Open</td>
                                <td className="border border-gray-300 p-3">Tog Member</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Attachment Section */}
                <div className="mb-8">
                    <label htmlFor="attachement" className="block text-sm font-medium text-gray-600 mb-2">Attachment</label>
                    <label htmlFor='choose file' className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 mr-2">
                        Choose File
                        <input type="file" className="hidden" />
                    </label>
                    <span className="text-gray-500">No File chosen</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Save
                    </button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                        Cancel
                    </button>
                    <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
                        Save & Add Another
                    </button>
                </div>

                {/* Recurring Tasks */}
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">Recurring Tasks</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Yes</button>
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
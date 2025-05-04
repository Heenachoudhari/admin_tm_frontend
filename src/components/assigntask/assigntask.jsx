import React from 'react'

export default function AssignTask() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-2xl bg-white rounded-lg shadow-md p-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Task Assign Details</h1>

                {/* Main Details Section */}
                <div className="space-y-4 mb-8">
                    <div>
                        <label htmlFor="Bucket Name" className="block text-sm font-medium text-gray-600">Bucket Name</label>
                        <p className="mt-1 text-gray-900">Team Name</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor='assigned to ' className="block text-sm font-medium text-gray-600">Assigned to</label>
                            <p className="mt-1 text-gray-900">Name</p>
                        </div>
                        <div>
                            <label htmlFor="assign date" className="block text-sm font-medium text-gray-600">Assign Date</label>
                            <p className="mt-1 text-gray-900">DD-MM-YY</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor='deadline' className="block text-sm font-medium text-gray-600">Deadline</label>
                            <p className="mt-1 text-gray-900">DD-MM-YY</p>
                        </div>
                        <div>
                            <label htmlFor='due time' className="block text-sm font-medium text-gray-600">Due Time</label>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-gray-900">HH:MM</span>
                                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">High</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status Section */}
                <div className="mb-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor='printry' className="block text-sm font-medium text-gray-600">Printry</label>
                            <span className="mt-1 px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">High</span>
                        </div>
                        <div>
                            <label htmlFor='assigned by' className="block text-sm font-medium text-gray-600">Assigned by</label>
                            <p className="mt-1 text-gray-900">Status</p>
                            <p className="text-gray-900">Toggle Member</p>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <label htmlFor='name' className="block text-sm font-medium text-gray-600">Name</label>
                        <p className="mt-1 text-gray-900">Open</p>
                    </div>
                </div>

                {/* Attachment Section */}
                <div className="mb-8">
                    <label htmlFor='attachement' className="block text-sm font-medium text-gray-600 mb-2">Attachment</label>
                    <label htmlFor="file" className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 mr-2">
                        Choose File
                        <input type="file" className="hidden" />
                    </label>
                    <span className="text-gray-500">No File chosen</span>
                </div>

                {/* Requirements Section */}
                <div className="mb-8">
                    <label htmlFor='attachement' className="block text-sm font-medium text-gray-600 mb-2">
                        Attachment is required for closing task?
                    </label>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Yes</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Recurring</button>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600">Task Description</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-600">Remark</span>
                        </div>
                    </div>
                </div>

                {/* Close Task Button */}
                <button className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Close Task
                </button>
            </div>
        </div>
    )
}
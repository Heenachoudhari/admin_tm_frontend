import React from 'react'

export default function LeaveRequest() {
    return (
        <div className="h-auto p-15">
            <div className="mx-auto max-w-2xl bg-white rounded-lg shadow-md">
                {/* Header Section */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex flex-col justify-start mb-4">
                        <h1 className="text-2xl font-bold text-gray-800 underline">Leave Request</h1>
                        <p className="text-gray-600 py-6 font-bold">Submitted On : 01/05/2025</p>
                    </div>

                    {/* Employee Information */}
                    <div className="">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Emp Information : </h2>
                        <div></div>
                    </div>
                </div>

                {/* Leave Period Table */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-700 mb-4 underline">Leave Period</h3>
                    <table className="w-full border border-black mb-6 rounded-2xl">
                        <thead>
                            <tr style={{ backgroundColor: '#018ABE' }} className="text-black">
                                <th className="border border-black px-4 py-2 text-center">From</th>
                                <th className="border border-black px-4 py-2 text-center">To</th>
                                <th className="border border-black px-4 py-2 text-center">Type of Leave</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-black text-center">
                                <td className="border border-black px-4 py-2">05/05/2025</td>
                                <td className="border border-black px-4 py-2">08/05/2025</td>
                                <td className="border border-black px-4 py-2">Sick Leave</td>
                            </tr>
                        </tbody>
                    </table>


                    {/* Action Buttons */}
                    <div className="flex justify-center items-center space-x-4 mt-8">
                        <button className="px-8 py-2 bg-[#08AF1C] text-black rounded-md hover:bg-green-600 transition-colors">
                            Approve
                        </button>
                        <button className="px-8 py-2 bg-[#EF0D0D] text-black rounded-md hover:bg-red-600 transition-colors">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
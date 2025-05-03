'use client';

import React, { useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import NavBar from "@/components/layout/navbar";

function Page() {
    const [selected, setSelected] = useState("This Year");

    return (
        <div className="min-h-screen md:flex bg-white">
            {/* Desktop Sidebar Section (visible on md+) */}
            <div className="md:w-1/6">
                <Sidebar/>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-5/6 md:flex-1 h-screen bg-white">
                {/* Desktop Navbar (hidden on mobile)
                <NavBar/> */}

                {/* Page Content
                <main className="hidden md:block px-6 py-6">
                    <OverviewHeader selected={selected} setSelected={setSelected} />

                    <div className="grid grid-cols-3 gap-6 mt-6">

                        <TaskCompletedChart selected={selected} />


                        <ProgressChart selected={selected} />



                        <AttendanceChart selected={selected} />



                        <PerformanceSummary selected={selected} />



                        <ProjectStatusChart selected={selected} />


                        <PerformanceChart timeframe={selected} />

                    </div>
                </main> */}



                {/* Mobile View */}
                <main className="block md:hidden"></main>
            </div>
        </div>
    );
}

export default Page;

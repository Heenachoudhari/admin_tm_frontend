import React from 'react';
import Image from 'next/image';

export default function Welcomebanner() {
    return (
        <div className="flex items-center justify-between bg-[#018ABE] text-white px-6 py-4 rounded-xl shadow-md">
            {/* Text Content */}
            <div>
                <h2 className="text-xl font-bold">Welcome Back, Prashant Patil !</h2>
                <p className="text-sm mt-1">
                    "You have more than 8 projects. Begin managing them!"
                </p>
            </div>

            {/* Image using Next.js <Image /> */}
            <div className="relative h-28 w-28 hidden sm:block">
                <Image
                    src="/dashboard/welcome.png" // Image in the /public folder
                    alt="Welcome Banner Illustration"
                    fill
                    sizes="112px"
                    className="object-contain"
                />
            </div>
        </div>
    );
}

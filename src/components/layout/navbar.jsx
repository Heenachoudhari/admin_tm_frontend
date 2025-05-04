"use client";
import { useState } from "react";
import { FaVideo, FaBell, FaCog, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMeeting, setShowMeeting] = useState(false);
  const router = useRouter();


  const notifications = [
    
  ];

  return (
    <div className="flex items-center justify-between bg-cyan-300 px-4 py-2 h-20 shadow-md relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 h-full overflow-hidden">
        <div className="scale-125 ml-4">
          <Image
            src="/signup/tasklogo.png"
            alt="Logo"
            width={100}
            height={60}
            className="object-contain"
          />
        </div>
      </div>

      {/* Center: Search */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 w-1/2">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by Team Member Name"
          className="w-full outline-none bg-transparent"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-12 text-black mr-4 text-xl relative">
        {/* Video Icon */}
        <div className="relative">
          <FaVideo
            className="cursor-pointer"
            onClick={() => setShowMeeting((prev) => !prev)}
          />
          {showMeeting && (
            <div className="absolute right-0 top-10 w-72 bg-white text-black rounded-lg shadow-lg z-20 p-4 text-center">
              <div className="font-semibold text-lg">Create Meeting</div>
              <hr className="my-2 border-gray-400" />
              <p className="text-sm">No Meeting has been Scheduled for today</p>
              {/* Triangle pointer */}
              <div className="absolute top-[-10px] right-4 w-0 h-0 border-l-8 border-r-8 border-b-[10px] border-transparent border-b-white" />
            </div>
          )}
        </div>

        {/* Bell Icon */}
        <div className="relative">
          <FaBell
            className="cursor-pointer"
            onClick={() => setShowNotifications((prev) => !prev)}
          />
          {showNotifications && (
            <div className="absolute right-0 top-10 w-64 bg-white rounded-lg shadow-lg z-20">
              <div className="p-4 font-semibold border-b">Notifications</div>
              <div className="p-4 text-gray-600 text-sm max-h-60 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div>No new notifications</div>
                ) : (
                  notifications.map((note, idx) => (
                    <div key={idx} className="mb-2">
                      {note}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <FaCog
  className="cursor-pointer"
  onClick={() => router.push("/settings")}
/>

      </div>
    </div>
  );
}

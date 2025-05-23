"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { FiChevronDown } from "react-icons/fi";

export default function Timeline() {
    const [items, setItems] = useState([]);
    const [date, setDate] = useState("");
    const router = useRouter();
    const [selectedManagers, setSelectedManagers] = useState([
       
    ]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [todayHours, setTodayHours] = useState([]);
    const [totalTime, setTotalTime] = useState("00:00");
    
    const underlineRef = useRef(null);
    const rowRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            underlineRef.current,
            { width: "0%" },
            { width: "100%", duration: 1, ease: "power2.out" }
        );
    
        const defaultTimes = Array.from({ length: 8 }, (_, i) => {
            const start = new Date(0, 0, 0, 9 + i, 0);
            const end = new Date(0, 0, 0, 10 + i, 0);
            return {
                timeRange: `${formatTime(start)} - ${formatTime(end)}`,
                task: "",
                type: "default",
                duration: "01:00",
                bucket: "work",
            };
        });
    
        // Store the duration values in the format needed for calculations
        const defaultDurations = defaultTimes.map(() => "0100");
        setItems(defaultTimes);
        setTodayHours(defaultDurations);
        
        // Calculate total time properly when component loads
        setTimeout(() => {
            setTotalTime(calculateTotalTime(defaultDurations));
        }, 0);
    }, []);
    
    // Calculate total time from an array of time strings in format "HHMM"
    const calculateTotalTime = (timeArray) => {
        let totalMinutes = 0;
    
        for (const time of timeArray) {
            if (time && time.length === 4) {
                const h = parseInt(time.slice(0, 2), 10);
                const m = parseInt(time.slice(2, 4), 10);
                if (!isNaN(h) && !isNaN(m) && h < 24 && m < 60) {
                    totalMinutes += h * 60 + m;
                }
            }
        }
    
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    };

    const formatTime = (date) =>
        date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

    const formatDuration = (duration) => {
        let numericValue = duration.replace(/\D/g, "").slice(0, 4); // Get numeric part and limit to 4 digits
        if (numericValue.length === 4) {
            return `${numericValue.slice(0, 2)}:${numericValue.slice(2, 4)}`;  // Format as hh:mm
        }
        return "00:00"; // Default fallback
    };
        
    const getNextTimeRange = () => {
        if (items.length === 0) return "09:00 AM - 10:00 AM";
        const lastTime = items[items.length - 1].timeRange.split(" - ")[1];
        const [time, period] = lastTime.split(" ");
        let [hour, minute] = time.split(":").map(Number);
        if (period === "PM" && hour !== 12) hour += 12;
        if (period === "AM" && hour === 12) hour = 0;
        const start = new Date(0, 0, 0, hour, minute);
        const end = new Date(start.getTime() + 60 * 60000);
        return `${formatTime(start)} - ${formatTime(end)}`;
    };

    const addTimelineItem = (type) => {
        const newItem = {
            task: `${type} task`,
            timeRange: getNextTimeRange(),
            duration: "01:00",
            type,
            bucket: type,
        };
        
        // Update items state with the new item
        setItems((prev) => [...prev, newItem]);
        
        // Update todayHours state with the new duration in numeric format
        const newDuration = "0100"; // Represents 01:00 in numeric format
        setTodayHours((prev) => {
            const updatedHours = [...prev, newDuration];
            // Update total time after adding new item
            setTimeout(() => {
                setTotalTime(calculateTotalTime(updatedHours));
            }, 0);
            return updatedHours;
        });

        // Animation effect for the new row
        setTimeout(() => {
            const newIndex = items.length;
            const lastRow = rowRefs.current[newIndex];
            if (lastRow) {
                gsap.fromTo(
                    lastRow,
                    { opacity: 0, y: 10 },
                    { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
                );
            }
        }, 0);
    };

    const updateItem = (index, field, value) => {
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    };

    const handleDurationChange = (index, value) => {
        // Format the duration for display
        let formattedDuration = formatDuration(value);
        
        // Update the item's duration display
        updateItem(index, "duration", formattedDuration);
        
        // Update the numeric duration values array
        const numericValue = value.replace(/\D/g, "").slice(0, 4).padStart(4, '0'); // Ensuring only numeric values and proper format
        
        setTodayHours(prev => {
            const updated = [...prev];
            updated[index] = numericValue;
            
            // Recalculate total time after changing a duration
            setTimeout(() => {
                setTotalTime(calculateTotalTime(updated));
            }, 0);
            
            return updated;
        });
    };

    const deleteItem = (index) => {
        setItems(prev => {
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
        });
        
        setTodayHours(prev => {
            const updated = [...prev];
            updated.splice(index, 1);
            
            // Recalculate total time after removing an item
            setTimeout(() => {
                setTotalTime(calculateTotalTime(updated));
            }, 0);
            
            return updated;
        });
    };

    const handleSubmit = () => {
        console.log({ date, selectedManagers, items, totalTime });
        toast.success("Timeline submitted successfully!");
        setDate("");
        setSelectedManagers([]);
        setItems([]);
        setTodayHours([]);
        setTotalTime("00:00");
    };

    const handleEditTimesheet = () => {
        router.push("/edittimesheet");
    };

    const handleAddTask = () => {
        router.push("/task");
    };
    
    const totalMinutes = parseInt(totalTime.split(":")[0]) * 60 + parseInt(totalTime.split(":")[1]);
    const isLessThanEightHours = totalMinutes < 480;


    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setShowDropdown(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl">
            <Toaster />
            <h2 className="text-2xl font-bold mb-1 relative inline-block text-gray-800">
                <span
                    ref={underlineRef}
                    className="absolute left-0 bottom-0 h-[2px] bg-yellow-500 w-full"
                ></span>
                Add Time
            </h2>
            <span className="text-2xl font-bold text-gray-800">sheet</span>

            <div className="flex justify-end gap-8 mb-4">
            <div className="flex justify-end gap-8 mb-4">
                <button onClick={handleEditTimesheet} className="bg-[#018ABE] cursor-pointer  hover:bg-[#0177a6] text-white font-semibold px-4 py-2 rounded-md">
                    Edit Timesheet
                </button>
                <button onClick={handleAddTask} className="bg-[#018ABE] cursor-pointer  hover:bg-[#0177a6] text-white font-semibold px-4 py-2 rounded-md">
                    Add Task
                </button>
            </div>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
                <div className="flex flex-col w-[200px]">
                    <label className="mb-1 font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="rounded-md p-1.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-[0px_2px_0px_rgba(0,0,0,0.2)]"
                    />
                </div>

                <div className="flex flex-col mr-50 w-[260px] relative">
  <label className="mb-1 font-medium text-gray-700">Select Manager</label>
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    className="border border-gray-300 rounded-md px-4 py-2 shadow-[0px_2px_0px_rgba(0,0,0,0.2)] flex items-center justify-between"
  >
    <span className="text-sm text-gray-800">
      {selectedManagers.length === 0
        ? "Select Manager"
        : selectedManagers.join(", ")}
    </span>
    <FiChevronDown className="text-gray-600 text-lg" />
  </button>

  {showDropdown && (
  <div
    className="absolute top-full mt-1 bg-white border border-gray-200 shadow-[0px_2px_0px_rgba(0,0,0,0.2)] rounded-md w-full z-10"
    onMouseLeave={() => setShowDropdown(false)}
  >
    {["Awab Fakih"].map((managerName) => (
      <label
        key={managerName}
        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        <input
          className="w-5 h-5 text-blue-600"
          type="checkbox"
          checked={selectedManagers.includes(managerName)}
          onChange={() =>
            setSelectedManagers((prev) =>
              prev.includes(managerName)
                ? prev.filter((m) => m !== managerName)
                : [...prev, managerName]
            )
          }
        />
        {managerName}
      </label>
    ))}
  </div>
)}

</div>


                <div className="flex gap-4">
                    <button
                        onClick={() => addTimelineItem("meeting")}
                        className="bg-[#018ABE] text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                        Add Meeting
                    </button>
                    <button
                        onClick={() => addTimelineItem("miscellaneous")}
                        className="bg-[#018ABE] text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                        Add Miscellaneous
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <label className="text-sm font-medium text-gray-800 whitespace-nowrap">
                    Enter Project Name
                </label>
                <input
                    type="text"
                    placeholder="Project name"
                    className="border border-gray-400 shadow-[0px_2px_0px_rgba(0,0,0,0.2)]  rounded-md px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="rounded-md overflow-x-auto mb-4 ">
  <table className="w-full table-auto border-separate border-spacing-0">
    <thead>
      <tr className="bg-[#018ABE] text-white text-center">
        <th className="px-4 py-2 w-[14%] whitespace-nowrap rounded-tl-md">Bucket</th>
        <th className="px-4 py-2 border-l border-white w-[40%] whitespace-nowrap">Task</th>
        <th className="px-4 py-2 border-l border-white w-[20%] whitespace-nowrap">Time</th>
        <th className="px-4 py-2 border-l border-white w-[10%] whitespace-nowrap">Duration</th>
        <th className="px-4 py-2 border-l border-white w-[5%] whitespace-nowrap rounded-tr-md">Action</th>
      </tr>
    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr
                                key={index}
                                ref={(el) => (rowRefs.current[index] = el)}
                                className="hover:bg-gray-100 "
                            >
                                <td className="px-4 py-2 border-4 border-white relative">
                                    <span></span>
                                    <textarea
                                        className="w-full h-10  text-center border border-gray-500 shadow-[0px_2px_0px_rgba(0,0,0,0.2)] rounded p-1 resize-none overflow-hidden"
                                        readOnly
                                        value={item.bucket}
                                    />
                                </td>
                                <td className="px-4 py-2 border-4 border-white relative">
                                    <span className="custom-border-left"></span>
                                    <textarea
                                        className="w-full h-10 pl-4 border border-gray-500 shadow-[0px_2px_0px_rgba(0,0,0,0.2)] rounded p-1 resize-none overflow-hidden"
                                        value={item.task}
                                        onChange={(e) => updateItem(index, "task", e.target.value)}
                                    />
                                </td>
                                <td className="px-4 py-2 border-4  border-white relative">
                                    <span className="custom-border-left"></span>
                                    <textarea
                                        className="w-full h-10  text-center border border-gray-500 shadow-[0px_2px_0px_rgba(0,0,0,0.2)] rounded p-1 resize-none overflow-hidden"
                                        readOnly
                                        value={item.timeRange}
                                    />
                                </td>
                                <td className="px-4 py-2 border-4 border-white relative">
                                    <span className="custom-border-left"></span>
                                    <input
                                        type="text"
                                        value={item.duration}
                                        onChange={(e) => handleDurationChange(index, e.target.value)}
                                        className="border shadow-[0px_2px_0px_rgba(0,0,0,0.2)] border-black rounded px-2 py-1 w-20 text-center"
                                    />
                                </td>
                                <td className="px-4 py-2 text-black text-center relative">
                                    <span className="custom-border-left"></span>
                                    <button onClick={() => deleteItem(index)} aria-label="Delete item">
                                        <AiFillDelete className="text-lg hover:text-red-700 transition-all" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100 font-semibold">
                        <td className="text-right relative right-0 px-16 py-2" colSpan={3}>
  Total Hours
</td>

                            <td className="px-4 py-2 text-center border-l-2 border-r-2 border-white">

<span className={`px-2 py-1 rounded ${isLessThanEightHours ? "bg-[#fc6a5d] text-black" : "bg-[#61c973] text-black"}`}>
    {totalTime}
</span>
</td>
<td className="px-4 py-2"></td>
</tr>
</tbody>
</table>
</div>
            <div className="flex justify-center items-center gap-4 mb-6">
                <button
                    onClick={handleSubmit}
                    className="bg-[#018ABE] text-white px-6 py-2 rounded-lg cursor-pointer"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
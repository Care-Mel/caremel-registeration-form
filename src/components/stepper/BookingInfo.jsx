// import React from "react";
// import plus from "./../../assets/image/faPlus.png";
import { CircleAlert } from 'lucide-react';

const BookingInfo = () => {
  return (
    <div className="mt-10 overflow-y-auto h-[50vh]">
      <div className="bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="text-[#1a472a] text-xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-[#2d5a40] text-lg mb-2">Name</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-[#2d5a40] text-lg mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
      </div>

      <div className="p-6 rounded-3xl shadow-sm border border-gray-300 mt-5" >
      <h2 className="text-[#1a472a] text-xl font-semibold mb-6 mt-8">Address Information</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="block text-[#2d5a40] text-lg">Township</label>
            </div>
            <input
              type="text"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Eg - Kamayut"
            />
              <div className="flex gap-2 items-center text-[#2d5a40] text-sm">
              <CircleAlert size={15} className='text-primary' />
               <p> This is use when giving service information to caregiver.</p>
              </div>
          </div>
          <div>
            <label className="block text-[#2d5a40] text-lg mb-2">Detail Address</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Eg - No 11(B), Myakanthar (2) street"
            />
          </div>
          <div>
            <label className="block text-[#2d5a40] text-lg mb-2">Nearest Bus Stop</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Eg - Buter Yone Lann"
            />
          </div>
          <div>
            <label className="block text-[#2d5a40] text-lg mb-2">Bus Arrive</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Eg - 41, 65"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;

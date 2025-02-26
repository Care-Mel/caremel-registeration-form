// import React from "react";
import { useState } from "react";
import plus from "./../../assets/image/faPlus.png";

const careServices = [
  { id: "infant", label: "Infant Care" },
  { id: "child", label: "Child Care (3yrs - 12yrs)" },
  { id: "elderly", label: "Elderly Care" },
  { id: "chronic", label: "Chronic Disease Care" },
  { id: "hospital", label: "Hospital Companion Care" },
];

const CareRule = () => {
  const [selectedServices, setSelectedServices] = useState(null);
  // console.log(selectedServices);
  return (
    <div className="mt-10 overflow-y-auto h-[50vh]">
      <div className="bg-[#f0f9f0] p-6 rounded-3xl">
        <h2 className="text-[#1a472a] text-xl font-semibold mb-6">Choose Care Service</h2>
        <div className="space-y-3">
          {careServices.map((service) => (
            <label
              key={service.id}
              className={`flex items-center justify-between p-4 rounded-2xl bg-white cursor-pointer transition-colors duration-300 border-2 hover:border-[#2d5a40] ${
                selectedServices === service.id ? "border-[#2d5a40]" : "border-gray-200"
              }`}
              onClick={() => setSelectedServices(service.id)}
            >
              <span className="text-[16px]">{service.label}</span>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedServices === service.id ? "border-[#2d5a40]" : "border-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    selectedServices === service.id ? "bg-[#2d5a40]" : "bg-gray-200"
                  }`}
                ></div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareRule;

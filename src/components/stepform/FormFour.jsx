import { useRef, useState } from "react";
import { Calendar, Clock, CircleAlert } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const CaregiverPower = ({ onSubmitBack, formData, updateFormData }) => {
  const submitForm = () => {
    console.log(formData);

    const data = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      township: formData.township,
      address: formData.detailAddress,
      busStop: formData.nearestBusStop,
      service: formData.selectedServices,
      patientInformation: [
        {
          patientName: formData.patientName,
          patientAge: formData.patientAge,
          patientGender: formData.gender,
          religion: formData.religion,
        },
      ],
      patientStatus: [
        {
          haveInfectiousDisease: formData.hasInfection,
          infectiousDiseaseName: formData.infectiousDiseaseName,
        },
      ],
    };
  };
  // console.log(addref.current.value);

  return (
    <div className="mt-10">
      <div className="p-3 rounded-3xl shadow-sm border border-gray-300 mt-5 mb-10">
        <div className="space-y-6">
          <div className="bg-[#f0f9f0] p-4 rounded-xl">
            <h3 className="text-[#2d5a40] font-medium mb-3">Service Starting Date</h3>
            <div className="space-y-3">
              <div>
                <label className="text-[#2d5a40] text-sm block mb-1">Choose starting date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2d5a40] bg-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden"
                    value={formData?.startDate || ""}
                    onChange={(e) => updateFormData({ startDate: e.target.value })}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label className="text-[#2d5a40] text-sm block mb-1">Choose starting time</label>
                <div className="relative">
                  <input
                    type="time"
                    className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2d5a40] bg-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden"
                    value={formData?.startTime || ""}
                    onChange={(e) => updateFormData({ startTime: e.target.value })}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f0f9f0] p-4 rounded-xl">
            <h3 className="text-[#2d5a40] font-medium mb-3">Service Ending Date</h3>
            <div className="space-y-3">
              <div>
                <label className="text-[#2d5a40] text-sm block mb-1">Choose ending date</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2d5a40] bg-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden"
                    value={formData?.endDate || ""}
                    onChange={(e) => updateFormData({ endDate: e.target.value })}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label className="text-[#2d5a40] text-sm block mb-1">Choose ending time</label>
                <div className="relative">
                  <input
                    type="time"
                    className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2d5a40] bg-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden"
                    value={formData?.endTime || ""}
                    onChange={(e) => updateFormData({ endTime: e.target.value })}
                  />
                  <span className="absolute  right-3 top-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="text-lg font-semibold text-primary">Caregiver Allowance</h2>
        <div className="mt-4">
          <p className="text-primary mb-3">
            Will meals be provided for caregiver during their shift?
          </p>
          <div className="flex rounded-lg overflow-hidden border-2 border-primary">
            <button
              onClick={() => updateFormData({ mealsProvided: true })}
              className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                formData?.mealsProvided
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => updateFormData({ mealsProvided: false })}
              className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                !formData?.mealsProvided
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              No
            </button>
          </div>
          <div className="flex gap-2 items-center text-primary text-sm mt-2">
            <CircleAlert size={15} className="text-primary" />
            <p>This is use when giving service information to caregiver.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="text-lg font-semibold text-primary">Additional Note</h2>
        <div className="mt-4">
          <textarea
            value={formData?.additionalNotes || ""}
            onChange={(e) => updateFormData({ additionalNotes: e.target.value })}
            className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40] min-h-[100px]"
            placeholder="E.g Please make medication time be exact 8 hours apart."
          />
          <div className="flex gap-2 items-center text-primary text-sm mt-2">
            <CircleAlert size={15} className="text-primary" />
            <p>This is use when giving service information to caregiver.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 my-10">
        <button
          onClick={() => onSubmitBack()}
          className="bg-white font-sofia font-bold border-2 border-primary w-full text-primary px-4 py-[16px] font-bold text-[14px] rounded-full transition-all duration-300 ease-in-out active:bg-secondary"
        >
          Back
        </button>
        <button
          onClick={() => submitForm()}
          className="font-sofia w-full bg-primary text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CaregiverPower;

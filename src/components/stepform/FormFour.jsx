import { CircleAlert } from "lucide-react";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/en-gb";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

const CaregiverPower = ({ onSubmitBack, formData, updateFormData }) => {
  // console.log(formData.startDate);
  const navigate = useNavigate();
  const submitForm = async () => {
    // console.log(formData);

    const data = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      township: formData.township,
      address: formData.detailAddress,
      busStop: formData.nearestBusStop,
      service: formData.selectedServices,
      careGiverMealSupport: formData.mealsProvided,
      startingDate: dayjs(formData.startDate).format("YYYY-MM-DD"),
      startingTime: formData.startTime,
      endingDate: dayjs(formData.endDate).format("YYYY-MM-DD"),
      endingTime: formData.endTime,
      additionalNote: formData.additionalNotes,
      patientInformation: [
        {
          patientName: formData.patientName,
          patientAge: formData.patientAge * 1,
          patientGender: formData.gender,
          religious: formData.religion,
        },
      ],
      patientStatus: [
        {
          haveInfectiousDisease: formData.hasInfection,
          infectiousDiseaseName: formData.infectiousDiseaseName,
          chronicDiseaseName: formData.paientDiseaseName,
          hardHearing: formData.isDeaf,
          mobilityLevel: formData.mobilityLevel,
        },
      ],
    };

    // console.log(data);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}api/v1/customer-form`, data);
      // console.log(res);
      if (res.status === 201) {
        navigate("/success");
      }
    } catch (error) {
      if (error) {
        toast.error("Your form submission failed. Please try again.");
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(addref.current.value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <div className="mt-10">
        <div className="p-6 rounded-3xl shadow-sm border border-gray-300 mt-5 mb-10">
          <div className="space-y-6">
            <div className="bg-[#f0f9f0] rounded-xl">
              <h3 className="header">Service Starting Date</h3>
              <div className="space-y-3">
                <div className="w-full">
                  <label className="label block">Choose starting date</label>
                  <Box
                    components={["DatePicker"]}
                    sx={{ width: "100%", backgroundColor: "white", marginTop: "8px" }}
                  >
                    <DatePicker
                      sx={{ width: "100%" }}
                      value={formData?.startDate || null}
                      onChange={(newValue) => {
                        updateFormData({ startDate: newValue });
                      }}
                    />
                  </Box>
                </div>
                <div className="w-full">
                  <label className="label">Choose ending date</label>
                  <Box
                    components={["DatePicker"]}
                    sx={{ width: "100%", backgroundColor: "white", marginTop: "8px" }}
                  >
                    <DatePicker
                      sx={{ width: "100%" }}
                      value={formData?.endDate || null}
                      onChange={(newValue) => {
                        if (newValue < formData.startDate) {
                          toast.error("Ending date must be greater than starting date.");
                          return;
                        }
                        updateFormData({ endDate: newValue });
                      }}
                    />
                  </Box>
                </div>
              </div>
            </div>

            <div className="bg-[#f0f9f0] rounded-xl">
              <h3 className="header">Service Ending Date</h3>
              <div className="space-y-3">
                <div className="w-full">
                  <label className="label">Choose starting time</label>
                  <div className="relative mt-2">
                    <input
                      type="time"
                      className="w-full p-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2d5a40] bg-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden"
                      value={formData?.startTime || ""}
                      onChange={(e) => {
                        updateFormData({ startTime: e.target.value });
                      }}
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
                <div className="w-full">
                  <label className="label">Choose ending time</label>
                  <div className="relative mt-2">
                    <input
                      type="time"
                      className="w-full p-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2d5a40] bg-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden"
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
          <h2 className="header">Caregiver Allowance</h2>
          <div className="mt-4">
            <p className="mb-3 label">Will meals be provided for caregiver during their shift?</p>
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
            <div className="flex gap-2 items-center text-sm mt-2">
              <CircleAlert size={25} className="text-primary" />
              <p>This is use when giving service information to caregiver.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
          <h2 className="header">Additional Note</h2>
          <div className="mt-4">
            <textarea
              value={formData?.additionalNotes || ""}
              onChange={(e) => updateFormData({ additionalNotes: e.target.value })}
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40] min-h-[100px]"
              placeholder="E.g Please make medication time be exact 8 hours apart."
            />
            <div className="flex gap-2 items-center text-sm mt-2">
              <CircleAlert size={25} className="text-primary" />
              <p>This is use when giving service information to caregiver.</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 my-10">
          <button
            onClick={() => onSubmitBack()}
            className="bg-white font-bold border-2 border-primary w-full text-primary px-4 py-[16px] font-bold text-[14px] rounded-full transition-all duration-300 ease-in-out active:bg-secondary"
          >
            Back
          </button>
          <button
            onClick={() => submitForm()}
            disabled={
              !formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime
            }
            className={` w-full text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary ${
              !formData.startDate || !formData.endDate || !formData.startTime || !formData.endTime
                ? "opacity-50 cursor-not-allowed bg-gray-400"
                : "bg-primary"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CaregiverPower;

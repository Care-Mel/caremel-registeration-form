import { useRef, useState } from "react";
import { Calendar, Clock, CircleAlert } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CaregiverPower = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [mealsProvided, setMealsProvided] = useState(false);
  const addref = useRef(null);

  // console.log(addref.current.value);

  return (
    <div className="mt-10 overflow-y-auto h-[50vh]">
      <div className="mb-5 bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="text-lg font-semibold text-primary">Service Starting Date</h2>
        <div className="flex items-center border rounded-md p-2 mt-2">
          <input
            type="date"
            className="flex-grow p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
          />
        </div>
        <div className="flex items-center border rounded-md p-2 mt-2">
          <input
            type="time"
            className="flex-grow p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
          />
        </div>
      </div>

      <div className="mb-5 bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="text-lg font-semibold text-primary">Service Ending Date</h2>
        <div className="flex items-center border rounded-md p-2 mt-2">
          <input
            type="date"
            className="flex-grow p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
          />
        </div>
        <div className="flex items-center border rounded-md p-2 mt-2">
          <input
            type="time"
            className="flex-grow p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
          />
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
              onClick={() => setMealsProvided(true)}
              className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                mealsProvided
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setMealsProvided(false)}
              className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                !mealsProvided
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
            ref={addref}
            className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40] min-h-[100px]"
            placeholder="E.g Please make medication time be exact 8 hours apart."
          />
          <div className="flex gap-2 items-center text-primary text-sm mt-2">
            <CircleAlert size={15} className="text-primary" />
            <p>This is use when giving service information to caregiver.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverPower;

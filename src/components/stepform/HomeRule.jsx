import { useState } from "react";
import plus from "./../../assets/image/faPlus.png";
import { CircleAlert } from "lucide-react";

const HomeRule = () => {
  const [gender, setGender] = useState("male");
  const [hasInfection, setHasInfection] = useState(false);
  const [isDeaf, setIsDeaf] = useState(false);

  return (
    <div className="mt-10 overflow-y-auto h-[50vh]">
      <div className="bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="text-[#1a472a] text-xl font-semibold mb-6">Patient Information</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-primary text-lg mb-2">Patient Name</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
              placeholder="Enter patient name"
            />
          </div>

          <div>
            <label className="block text-primary text-lg mb-2">Patient Age</label>
            <input
              type="number"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
              placeholder="Enter patient age"
            />
          </div>

          <div>
            <label className="block text-primary text-lg mb-2">Patient Gender</label>
            <div className="flex rounded-lg overflow-hidden border-2 border-primary">
              <button
                onClick={() => setGender("male")}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  gender === "male"
                    ? "bg-primary text-white shadow-md"
                    : " text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setGender("female")}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  gender === "female"
                    ? "bg-primary text-white shadow-md"
                    : " text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                Female
              </button>
            </div>
          </div>

          <div>
            <label className="block text-primary text-lg mb-2">Religious Affiliation</label>
            <div className="relative">
              <select
                className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary appearance-none bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose Religion
                </option>
                <option value="buddhism">Buddhism</option>
                <option value="christianity">Christianity</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm text-primary mt-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              This information will help caregiver to make cultural & regional preparations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300 mt-5">
        <h2 className="text-[#1a472a] text-xl font-semibold mb-6">Patient Status</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-primary text-lg mb-2">
              Does patient have any infectious disease?
            </label>
            <div className="flex rounded-lg overflow-hidden border-2 border-primary">
              <button
                onClick={() => setHasInfection(true)}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  hasInfection
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setHasInfection(false)}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  !hasInfection
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {hasInfection && (
            <div>
              <label className="block text-primary text-lg mb-2">Infectious Disease Name</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
                placeholder="Enter disease name"
              />
            </div>
          )}

          <div>
            <label className="block text-primary text-lg mb-2">
              Is the patient Deaf or hard of hearing?
            </label>
            <div className="flex rounded-lg overflow-hidden border-2 border-primary">
              <button
                onClick={() => setIsDeaf(true)}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  isDeaf
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setIsDeaf(false)}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  !isDeaf
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                No
              </button>
            </div>
          </div>

          <div>
            <label className="block text-primary text-lg mb-2">Mobility Level</label>
            <div className="relative">
              <select
                className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary appearance-none bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose Mobility Level
                </option>
                <option value="independent">Independent</option>
                <option value="assisted">Assisted</option>
                <option value="wheelchair">Wheelchair</option>
                <option value="bedridden">Bedridden</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-2 items-center text-sm mt-2">
              <CircleAlert size={15} className="text-primary" />
              <p className="">This is use when giving service information to caregiver.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRule;

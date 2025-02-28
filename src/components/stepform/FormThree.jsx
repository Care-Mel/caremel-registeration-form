import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import plus from "./../../assets/image/faPlus.png";
import { CircleAlert, ChevronDown } from "lucide-react";

const HomeRule = ({ onSubmit, onSubmitBack, formData, updateFormData }) => {
  const [isReligionOpen, setIsReligionOpen] = useState(false);
  const [isMobilityOpen, setIsMobilityOpen] = useState(false);
  const [gender, setGender] = useState(formData?.gender || "male");
  const [inflictions, setInflictions] = useState(formData?.inflictions || []);
  const [deaf, setDeaf] = useState(formData?.isDeaf || false);
  const [mobilityLevel, setMobilityLevel] = useState(formData?.mobilityLevel || "");
  const selectedServices = formData?.selectedServices || null;

  const religions = [
    { value: "buddhism", label: "Buddhism" },
    { value: "christianity", label: "Christianity" },
    { value: "islam", label: "Islam" },
    { value: "hinduism", label: "Hinduism" },
    { value: "other", label: "Other" },
  ];

  const mobilityLevels = [
    { value: "independent", label: "Independent" },
    { value: "assisted", label: "Assisted" },
    { value: "wheelchair", label: "Wheelchair" },
    { value: "bedridden", label: "Bedridden" },
  ];

  return (
    <div className="mt-10 mb-[50px]">
      <div className="bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="text-[#1a472a] text-xl font-semibold mb-6">Patient Information</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-primary text-lg mb-2">Patient Name</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
              placeholder="Enter patient name"
              value={formData?.patientName || ""}
              onChange={(e) => updateFormData({ patientName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-primary text-lg mb-2">Patient Age</label>
            <input
              type="number"
              className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
              placeholder="Enter patient age"
              value={formData?.patientAge || ""}
              onChange={(e) => updateFormData({ patientAge: e.target.value })}
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
              <div
                onClick={() => {
                  setIsMobilityOpen(false);
                  setIsReligionOpen(!isReligionOpen);
                }}
                className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none hover:border-primary cursor-pointer bg-white flex justify-between items-center"
              >
                <span className={formData?.religion ? "text-gray-900" : "text-gray-500"}>
                  {formData?.religion
                    ? religions.find((r) => r.value === formData?.religion)?.label
                    : "Choose Religion"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    isReligionOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isReligionOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border-2 border-primary rounded-xl shadow-lg">
                  {religions.map((religion) => (
                    <div
                      key={religion.value}
                      className="p-3 hover:bg-primary hover:text-white cursor-pointer transition-colors"
                      onClick={() => {
                        updateFormData({ religion: religion.value });
                        setIsReligionOpen(false);
                      }}
                    >
                      {religion.label}
                    </div>
                  ))}
                </div>
              )}
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
                onClick={() => updateFormData({ hasInfection: true })}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  formData?.hasInfection
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => updateFormData({ hasInfection: false })}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  !formData.hasInfection
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {formData.hasInfection && (
            <div>
              <label className="block text-primary text-lg mb-2">Infectious Disease Name</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
                placeholder="Enter disease name"
                value={formData.infectiousDiseaseName}
                onChange={(e) => updateFormData({ infectiousDiseaseName: e.target.value })}
              />
            </div>
          )}
          {selectedServices === "elderly" && (
            <div>
              <div>
                <label className="block text-primary text-lg mb-2">
                  Is the patient Deaf or hard of hearing?
                </label>
                <div className="flex rounded-lg overflow-hidden border-2 border-primary">
                  <button
                    onClick={() => updateFormData({ isDeaf: true })}
                    className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                      formData.isDeaf
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-700 hover:border-primary hover:text-primary"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => updateFormData({ isDeaf: false })}
                    className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                      !formData.isDeaf
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-700 hover:border-primary hover:text-primary"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-primary text-lg mt-5 mb-2">Mobility Level</label>
                <div className="relative">
                  <div
                    onClick={() => {
                      setIsReligionOpen(false);
                      setIsMobilityOpen(!isMobilityOpen);
                    }}
                    className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none hover:border-primary cursor-pointer bg-white flex justify-between items-center"
                  >
                    <span className={formData.mobilityLevel ? "text-gray-900" : "text-gray-500"}>
                      {formData.mobilityLevel
                        ? mobilityLevels.find((m) => m.value === formData.mobilityLevel)?.label
                        : "Choose Mobility Level"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        isMobilityOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {isMobilityOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border-2 border-primary rounded-xl shadow-lg">
                      {mobilityLevels.map((level) => (
                        <div
                          key={level.value}
                          className="p-3 hover:bg-primary hover:text-white cursor-pointer transition-colors"
                          onClick={() => {
                            updateFormData({ mobilityLevel: level.value });
                            setIsMobilityOpen(false);
                          }}
                        >
                          {level.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 items-center text-sm mt-2">
                  <CircleAlert size={15} className="text-primary" />
                  <p className="">This is use when giving service information to caregiver.</p>
                </div>
              </div>
            </div>
          )}

          {selectedServices === "chronic" && (
            <div>
              {formData.hasInfection && (
                <div className="mb-5">
                  <label className="block text-primary text-lg mb-2">Patient Disease Name</label>
                  <input
                    type="text"
                    value={formData?.patientDiseaseName}
                    onChange={(e) => updateFormData({ patientDiseaseName: e.target.value })}
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
                    onClick={() => updateFormData({ isDeaf: true })}
                    className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                      formData.isDeaf
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-700 hover:border-primary hover:text-primary"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => updateFormData({ isDeaf: false })}
                    className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                      !formData.isDeaf
                        ? "bg-primary text-white shadow-md"
                        : "text-gray-700 hover:border-primary hover:text-primary"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-primary text-lg mt-5 mb-2">Mobility Level</label>
                <div className="relative">
                  <div
                    onClick={() => {
                      setIsReligionOpen(false);
                      setIsMobilityOpen(!isMobilityOpen);
                    }}
                    className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none hover:border-primary cursor-pointer bg-white flex justify-between items-center"
                  >
                    <span className={formData.mobilityLevel ? "text-gray-900" : "text-gray-500"}>
                      {formData.mobilityLevel
                        ? mobilityLevels.find((m) => m.value === formData.mobilityLevel)?.label
                        : "Choose Mobility Level"}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        isMobilityOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {isMobilityOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border-2 border-primary rounded-xl shadow-lg">
                      {mobilityLevels.map((level) => (
                        <div
                          key={level.value}
                          className="p-3 hover:bg-primary hover:text-white cursor-pointer transition-colors"
                          onClick={() => {
                            updateFormData({ mobilityLevel: level.value });
                            setIsMobilityOpen(false);
                          }}
                        >
                          {level.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 items-center text-sm mt-2">
                  <CircleAlert size={15} className="text-primary" />
                  <p className="">This is use when giving service information to caregiver.</p>
                </div>
              </div>
            </div>
          )}

          {selectedServices === "hospital" && (
            <div>
              <label className="block text-primary text-lg mt-5 mb-2">Mobility Level</label>
              <div className="relative">
                <div
                  onClick={() => {
                    setIsReligionOpen(false);
                    setIsMobilityOpen(!isMobilityOpen);
                  }}
                  className="w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none hover:border-primary cursor-pointer bg-white flex justify-between items-center"
                >
                  <span className={formData.mobilityLevel ? "text-gray-900" : "text-gray-500"}>
                    {formData.mobilityLevel
                      ? mobilityLevels.find((m) => m.value === formData.mobilityLevel)?.label
                      : "Choose Mobility Level"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isMobilityOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isMobilityOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border-2 border-primary rounded-xl shadow-lg">
                    {mobilityLevels.map((level) => (
                      <div
                        key={level.value}
                        className="p-3 hover:bg-primary hover:text-white cursor-pointer transition-colors"
                        onClick={() => {
                          updateFormData({ mobilityLevel: level.value });
                          setIsMobilityOpen(false);
                        }}
                      >
                        {level.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-2 items-center text-sm mt-2">
                <CircleAlert size={15} className="text-primary" />
                <p className="">This is use when giving service information to caregiver.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 mt-10">
        <button
          onClick={() => onSubmitBack()}
          className="bg-white font-sofia font-bold border-2 border-primary w-full text-primary px-4 py-[16px] font-bold text-[14px] rounded-full transition-all duration-300 ease-in-out active:bg-secondary"
        >
          Back
        </button>
        <button
          onClick={() => onSubmit()}
          className="font-sofia w-full bg-primary text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeRule;

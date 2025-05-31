import { useEffect, useState } from "react";
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

  // console.log(selectedServices);

  const religions = [
    { value: "buddhism", label: "Buddhism" },
    { value: "christianity", label: "Christianity" },
    { value: "islam", label: "Islam" },
    { value: "hinduism", label: "Hinduism" },
    { value: "other", label: "Other" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mobilityLevels = [
    { value: "1", label: "lying in bed" },
    { value: "2", label: "bed activites" },
    { value: "3", label: "sitting at edge of bed" },
    { value: "4", label: "transferring to chair/commode" },
    { value: "5", label: "static standing for at least 1 min" },
    { value: "6", label: "walking at least 10 steps" },
    { value: "7", label: "walking at least 7.5 m" },
    { value: "8", label: "walking at least 75 m" },
  ];

  return (
    <div className="mt-10 mb-[50px]">
      <div className="bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="header">Patient Information</h2>

        <div className="space-y-6">
          <div>
            <label className="label">
              {selectedServices === "Infant Care" || selectedServices === "Child Care"
                ? "Child Name"
                : "Patient Name"}
            </label>
            <input
              type="text"
              className="w-full mt-2 p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
              placeholder="Enter patient name"
              value={formData?.patientName || ""}
              onChange={(e) => updateFormData({ patientName: e.target.value })}
            />
          </div>

          <div>
            <label className="label">Patient Age</label>
            <div className="mt-2 w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary bg-white flex justify-between items-center">
              <input
                type="number"
                placeholder="Enter patient age"
                value={formData?.patientAge || ""}
                className="w-full focus:outline-none"
                // min={selectedServices === "Infant Care" ? 0 : 1}
                onChange={(e) => updateFormData({ patientAge: e.target.value })}
              />
              <div className="text-gray-500 border-l pl-2">
                {selectedServices === "Infant Care" ? "months" : "years"}
              </div>
            </div>
          </div>

          <div>
            <label className="label">Patient Gender</label>
            <div className="mt-2 flex rounded-lg overflow-hidden border-2 border-primary">
              <button
                onClick={() => {
                  updateFormData({ gender: "male" });
                  setGender("male");
                }}
                className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
                  gender === "male"
                    ? "bg-primary text-white shadow-md"
                    : " text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                Male
              </button>
              <button
                onClick={() => {
                  updateFormData({ gender: "female" });
                  setGender("female");
                }}
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
            <label className="label">Religious Affiliation</label>
            <div className="relative mt-2">
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
            <p className="text-sm mt-1 flex items-center gap-2">
              <CircleAlert size={25} className="text-primary" />
              This information will help caregiver to make cultural & regional preparations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f9f0] p-6 rounded-3xl shadow-sm border border-gray-300 mt-5">
        <h2 className="header">Patient Status</h2>

        <div className="space-y-6">
          <div>
            <label className="label">Does patient have any infectious disease?</label>
            <div className="flex mt-2 rounded-lg overflow-hidden border-2 border-primary">
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
              <label className="label">Infectious Disease Name</label>
              <input
                type="text"
                className="mt-2 w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
                placeholder="Enter disease name"
                value={formData.infectiousDiseaseName}
                onChange={(e) => updateFormData({ infectiousDiseaseName: e.target.value })}
              />
            </div>
          )}
          {/* Elder Care __________________________________________________________ */}
          {selectedServices === "Elderly Care" && (
            <div>
              <div>
                <label className="label">Is the patient Deaf or hard of hearing?</label>
                <div className="flex mt-2 rounded-lg overflow-hidden border-2 border-primary">
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

              <div className="mt-5">
                <label className="label">Mobility Level</label>
                <div className="relative mt-2">
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
                    <div className="absolute z-10 top-[-400px] w-full mt-1 bg-white border-2 border-primary rounded-xl shadow-lg">
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
                  <CircleAlert size={25} className="text-primary" />
                  <p className="">This is use when giving service information to caregiver.</p>
                </div>
              </div>
            </div>
          )}
          {/* Chronic __________________________________*/}
          {selectedServices === "Chronic Disease Care" && (
            <div>
              {/* {formData.hasInfection && (
                <div className="mb-5">
                  <label className="label">Patient Disease Name</label>
                  <input
                    type="text"
                    value={formData?.patientDiseaseName}
                    onChange={(e) => updateFormData({ patientDiseaseName: e.target.value })}
                    className="mt-2 w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-primary"
                    placeholder="Enter disease name"
                  />
                </div>
              )} */}
              <div className="mb-5">
                <label className="label">Is the patient Deaf or hard of hearing?</label>
                <div className="flex mt-2 rounded-lg overflow-hidden border-2 border-primary">
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
                <label className="label">Mobility Level</label>
                <div className="relative mt-2">
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
                    <div className="absolute z-10 top-[-400px] w-full mt-1 bg-white border-2 border-primary rounded-xl shadow-lg">
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
                  <CircleAlert size={25} className="text-primary" />
                  <p className="">This is use when giving service information to caregiver.</p>
                </div>
              </div>
            </div>
          )}
          {/* Hospital Companion Care __________________________________*/}
          {selectedServices === "Hospital Companion Care" && (
            <div>
              <label className="label">Mobility Level</label>
              <div className="relative mt-2">
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
                  <div className="absolute z-10 top-[-400px] w-full mt-1 bg-white border-2 border-primary rounded-xl shadow-lg">
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
                <CircleAlert size={25} className="text-primary" />
                <p className="">This is use when giving service information to caregiver.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 mt-10">
        <button
          onClick={() => onSubmitBack()}
          className="bg-white font-bold border-2 border-primary w-full text-primary px-4 py-[16px] font-bold text-[14px] rounded-full transition-all duration-300 ease-in-out active:bg-secondary"
        >
          Back
        </button>
        <button
          onClick={() => onSubmit()}
          disabled={!formData.patientName || !formData.patientAge}
          className={`w-full text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary ${
            !formData.patientName || !formData.patientAge
              ? "opacity-50 cursor-not-allowed bg-gray-400"
              : "bg-primary"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeRule;

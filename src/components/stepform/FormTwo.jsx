import { useEffect } from "react";

const careServices = [
  { id: "infant", label: "Infant Care" },
  { id: "child", label: "Child Care (3yrs - 12yrs)" },
  { id: "elderly", label: "Elderly Care" },
  { id: "chronic", label: "Chronic Disease Care" },
  { id: "hospital", label: "Hospital Companion Care" },
];

const CareRule = ({ onSubmit, onSubmitBack, onServiceSelect, formData }) => {
  const handleServiceSelect = (serviceId) => {
    onServiceSelect(serviceId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-10 mb-[50px]">
      <div className="bg-[#f0f9f0] p-6 rounded-3xl border border-gray-300">
        <h2 className="header">Choose Care Service</h2>
        <div className="space-y-3">
          {careServices.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service.label)}
              className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${
                formData.selectedServices === service.label
                  ? "bg-primary text-white"
                  : "bg-white text-[#1a472a]"
              }`}
            >
              <p className="font-medium">{service.label}</p>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  formData.selectedServices === service.label ? "border-white" : "border-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    formData.selectedServices === service.label ? "bg-white" : "bg-gray-200"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-[150px]">
        <button
          onClick={() => onSubmitBack()}
          className="bg-white font-bold border-2 border-primary w-full text-primary px-4 py-[16px] font-bold text-[14px] rounded-full transition-all duration-300 ease-in-out active:bg-secondary"
        >
          Back
        </button>
        <button
          onClick={() => onSubmit()}
          disabled={!formData.selectedServices}
          className={`w-full ${
            formData.selectedServices ? "bg-primary" : "bg-gray-400"
          } text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CareRule;

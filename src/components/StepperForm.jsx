import BookingInfo from "./stepform/FormOne";
import HomeRule from "./stepform/FormThree";
import { motion } from "framer-motion";
import CaregiverPower from "./stepform/FormFour";
import CareRule from "./stepform/FormTwo";
import { useState } from "react";

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Form One - Contact Info
    name: "",
    phoneNumber: "",
    township: "",
    address: "",
    nearestBusStop: "",
    busArrive: "no",

    // Form Two - Care Rules
    selectedServices: null,

    // Form Three - Home Rules
    patientName: "",
    patientAge: "",
    gender: "male",
    hasInfection: false,
    infectiousDiseaseName: "",
    paientDiseaseName: "",
    isDeaf: false,
    religion: "buddhism",
    mobilityLevel: null,

    // Form Four - Service Schedule
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    allowance: "",
    mealsProvided: false,
    additionalNotes: "",
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const steps = [
    { label: "စည်းမျဉ်းစည်းကမ်း", number: 1 },
    { label: "လုပ်ငန်းစဉ်တာ", number: 2 },
    { label: "သဘောတူညီချက်", number: 3 },
    { label: "သဘောတူညီချက်", number: 4 },
  ];

  const formVarient = {
    hidden: {
      opacity: 0,
      x: "-100vw",
      transition: {
        else: "easeInOut",
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <div className="overflow-hidden bg-background md:w-[500px] mx-auto py-1 px-[24px]">
      <div className="mt-5 mb-[30px]">
        <p className="text-3xl font-semibold text-secondary">Caregiver Booking Form</p>
      </div>
      <div className="flex items-center justify-between relative">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center z-10">
            <div
              className={`w-8 h-8 rounded-full text-[12px] font-bold flex items-center justify-center ${
                currentStep >= step.number
                  ? "bg-primary text-white transition-all duration-1000 ease-in-out"
                  : "bg-white text-primary"
              }`}
            >
              {step.number}
            </div>
          </div>
        ))}
        {/* Progress Bar */}
        <div className="mt-4 h-2 bg-white rounded absolute top-[-3px] left-0 w-full">
          <div
            className={`h-full bg-primary transition-all duration-300 ease-in-out rounded`}
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-5">
        {currentStep === 1 && (
          <motion.div key={2} variants={formVarient} initial="hidden" animate="visible" exit="exit">
            <BookingInfo
              formData={formData}
              updateFormData={updateFormData}
              onSubmit={() => setCurrentStep(2)}
            />
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div key={3} variants={formVarient} initial="hidden" animate="visible" exit="exit">
            <CareRule
              formData={formData}
              updateFormData={updateFormData}
              onSubmit={() => setCurrentStep(3)}
              onSubmitBack={() => setCurrentStep(1)}
              onServiceSelect={(service) => updateFormData({ selectedServices: service })}
            />
          </motion.div>
        )}
        {currentStep === 3 && (
          <motion.div key={3} variants={formVarient} initial="hidden" animate="visible" exit="exit">
            <HomeRule
              formData={formData}
              updateFormData={updateFormData}
              onSubmit={() => setCurrentStep(4)}
              onSubmitBack={() => setCurrentStep(2)}
              selectedServices={formData.selectedServices}
            />
          </motion.div>
        )}
        {currentStep === 4 && (
          <motion.div key={5} variants={formVarient} initial="hidden" animate="visible" exit="exit">
            <CaregiverPower
              formData={formData}
              updateFormData={updateFormData}
              onSubmitBack={() => setCurrentStep(3)}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StepperForm;

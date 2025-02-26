// import React from "react";
import BookingInfo from "./stepform/BookingInfo";
import HomeRule from "./stepform/HomeRule";
import { motion } from "framer-motion";
import CaregiverPower from "./stepform/CaregiverPower";
import CareRule from "./stepform/CareRule";
// import SuccessModal from "./StepOne/SuccessModal";
// import { Stepper } from "react-form-stepper";

const StepperForm = ({ currentStep }) => {
  // console.log(currentStep);
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
    <div className="w-full h-[60vh]">
      <div className="flex items-center justify-between relative">
        {currentStep < 6 &&
          steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center z-10">
              <div
                className={`w-8 h-8 rounded-full text-[12px] font-bold flex items-center justify-center ${
                  currentStep - 1 >= step.number
                    ? "bg-primary text-white transition-all duration-1000 ease-in-out"
                    : "bg-white text-primary"
                }`}
              >
                {step.number}
              </div>
            </div>
          ))}
        {/* Progress Bar */}
        {currentStep < 6 && (
          <div className="mt-4 h-2 bg-white rounded absolute top-[-3px] left-0 w-full">
            <div
              className={`h-full bg-primary transition-all duration-300 ease-in-out rounded`}
              style={{
                width: `${((currentStep - 2) / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>
        )}
      </div>

      <div className="mt-5">
        {currentStep === 2 && (
          <motion.div key={2} variants={formVarient} initial="hidden" animate="visible" exit="exit">
            <BookingInfo />
          </motion.div>
        )}
        {currentStep === 3 && (
          <motion.div key={3} variants={formVarient} initial="hidden" animate="visible" exit="exit">
            <CareRule />
          </motion.div>
        )}
        {currentStep === 4 && (
          <motion.div key={4} variants={formVarient} initial="hidden" animate="visible" exit="exit">
            <HomeRule />
          </motion.div>
        )}
        {currentStep === 5 && (
          <motion.div key={5} variants={formVarient} initial="hidden" animate="visible" exit="exit">
            <CaregiverPower />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StepperForm;

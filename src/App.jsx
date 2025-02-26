import { useState } from "react";
// import Stepper from "./components/Stepper";
import axios from "axios";
import StepperForm from "./components/StepperForm";
// import { ReactComponent as Logo } from "./assets/image/logo.svg";
import SuccessModal from "./components/SuccessModal";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  // console.log(currentStep);

  const handleSubmission = async () => {
    // console.log("Handling submission");
    // console.log(currentStep);
    // Handle form submission
    if (currentStep === 6) {
      // console.log("Form submitted");
      const name = localStorage.getItem("name");
      const NRC = localStorage.getItem("NRC");
      if (name && NRC) {
        const data = {
          name,
          NRC,
        };
        const res = await axios.post("https://api.caremelmm.com/api/v1/term-and-condition", data);
        console.log(res);
        if (res.data.code === 201) {
          // console.log("Form submitted successfully");
          localStorage.clear();
          setCurrentStep(6);
        }
      } else {
        alert("နာမည်နှင့် NRC နံပါတ်ကို ထည့်ပါ");
      }
    }
  };

  // console.log("hey")
  return (
    <div className="min-h-screen md:w-[500px] mx-auto py-1 px-[24px] bg-background overflow-hidden">
      <div className="h-[80vh]">
        {currentStep === 1 && (
          <div className="flex flex-col justify-end gap-8 mb-10 items-center h-full">
            <svg
              width="212"
              height="124"
              viewBox="0 0 212 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.5614 35.0602L46.6101 40.6533C42.5174 46.9283 35.3559 50.9523 26.83 50.9523C13.4615 50.9523 3.23047 40.1077 3.23047 26.8754C3.23047 13.5751 13.4615 2.73022 26.83 2.73022C35.2875 2.73022 42.3129 6.68621 46.4053 12.6884L38.2886 18.2813C35.7651 14.53 31.7409 12.1427 26.83 12.1427C18.9862 12.1427 13.2569 18.6906 13.2569 26.8754C13.2569 34.9922 18.9862 41.5397 26.83 41.5397C31.7409 41.5397 36.0379 38.8797 38.5614 35.0602ZM77.42 30.4904H87.1738L82.1947 14.1207L77.42 30.4904ZM90.3794 39.1525H74.1461L69.9857 50.2703H59.3452L76.8064 3.27588H87.651L105.044 50.2703H94.5401L90.3794 39.1525ZM140.626 12.0745H131.895V25.3066H140.353C144.241 25.3066 146.287 21.6917 146.287 18.6906C146.287 15.7577 144.445 12.0745 140.626 12.0745ZM144.991 33.6278L156.654 50.2703H144.65L134.146 34.037H131.895V50.2703H121.869V3.27588H141.103C151.744 3.27588 156.723 10.9832 156.723 18.6906C156.723 25.3067 153.04 31.9909 144.991 33.6278ZM176.927 50.2703V3.27588H206.665V12.0745H186.885V22.783H204.209V31.4453H186.885V41.4717H207.279V50.2703H176.927Z"
                fill="#3DBB47"
              />
              <path
                d="M35.6988 97.1697L46.9865 72.8409H53.726L58.3288 110.595H50.2742L47.644 87.9642L38.8219 106.266H32.6301L23.7534 87.9642L21.0685 110.595H13.0137L17.6712 72.8409H24.3014L35.6988 97.1697ZM76.7572 110.595V72.8409H100.648V79.9096H84.7572V88.5122H98.675V95.4713H84.7572V103.526H101.141V110.595H76.7572ZM119.957 110.595V72.8409H128.012V103.526H142.149V110.595H119.957Z"
                fill="#3DBB47"
              />
              <path d="M197.73 77.0811H170.919V103.892H197.73V77.0811Z" fill="#3DBB47" />
              <path
                d="M179.856 93.8382V94.9552C179.856 96.1841 180.284 97.2455 181.14 98.139C182.034 98.9956 183.095 99.4239 184.324 99.4239C185.553 99.4239 186.596 98.9956 187.452 98.139C188.346 97.2455 188.792 96.1841 188.792 94.9552V93.8382H189.91C191.138 93.8382 192.181 93.4099 193.037 92.5536C193.931 91.6598 194.378 90.5985 194.378 89.3698C194.378 88.1409 193.931 87.0983 193.037 86.2417C192.181 85.3482 191.138 84.9012 189.91 84.9012H188.792V83.7841C188.792 82.5552 188.346 81.5126 187.452 80.6563C186.596 79.7625 185.553 79.3158 184.324 79.3158C183.095 79.3158 182.034 79.7625 181.14 80.6563C180.284 81.5126 179.856 82.5552 179.856 83.7841V84.9012H178.738C177.51 84.9012 176.448 85.3482 175.554 86.2417C174.698 87.0983 174.27 88.1409 174.27 89.3698C174.27 90.5985 174.698 91.6598 175.554 92.5536C176.448 93.4099 177.51 93.8382 178.738 93.8382H179.856ZM171.365 109.031C169.466 109.031 167.865 108.398 166.562 107.132C165.296 105.829 164.663 104.227 164.663 102.328V82.8903C164.663 81.8477 164.886 80.8611 165.333 79.9301C165.78 78.9619 166.431 78.1428 167.288 77.4725L180.246 67.7536C181.475 66.8598 182.835 66.4131 184.324 66.4131C185.813 66.4131 187.173 66.8598 188.402 67.7536L201.36 77.4725C202.217 78.1428 202.868 78.9619 203.315 79.9301C203.799 80.8611 204.041 81.8477 204.041 82.8903V102.328C204.041 104.227 203.389 105.829 202.086 107.132C200.783 108.398 199.182 109.031 197.283 109.031H171.365Z"
                fill="#C3EAC6"
              />
            </svg>
            <p className="text-center font-bold text-secondary text-[20px] mb-10 leading-[1.8]">
              Please fill out our intake form to help us match you with the perfect caregiver. Your
              journey to quality care starts here!
            </p>
          </div>
        )}
        {currentStep !== 1 && currentStep !== 6 && (
          <div>
            <p className="font-bold text-secondary text-[20px] mt-5 leading-[1.8]">
              Caregiver Booking Form
            </p>
            <div className="mt-10">
              <StepperForm currentStep={currentStep} />
            </div>
          </div>
        )}
        {currentStep === 6 && (
          <div className="flex flex-col justify-center gap-8 mb-10 items-center h-full">
            <SuccessModal />
          </div>
        )}
      </div>

      <div>
        {currentStep !== 6 && (
          <div className="mt-5 flex justify-between">
            {currentStep > 2 && (
              <button
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
                className="bg-white font-sofia font-bold border-2 border-primary w-full text-primary px-4 py-[16px] font-bold text-[14px] rounded-full mr-2 transition-all duration-300 ease-in-out active:bg-secondary"
              >
                နောက်ပြန်သွားမယ်
              </button>
            )}
            {currentStep !== 6 && (
              <button
                onClick={() => {
                  setCurrentStep((prev) => Math.min(prev + 1, 6));
                  handleSubmission();
                }}
                className="font-sofia w-full bg-primary text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary"
                // disabled={currentStep === 6}
              >
                {currentStep === 5 ? "သဘောတူပါသည်။" : "ရှေ့ဆက်မယ်"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

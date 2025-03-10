// import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StepperForm from "./components/StepperForm";
// import { useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import SuccessModal from "./components/SuccessModal";
import { Toaster } from "sonner";
import Term from "./components/Term";

function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <div className="">
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/term" element={<Term />} />
            <Route path="/form" element={<StepperForm />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/success" element={<SuccessModal />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

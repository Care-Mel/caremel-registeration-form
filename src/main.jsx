import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AnimatePresence } from "framer-motion";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </StrictMode>
);

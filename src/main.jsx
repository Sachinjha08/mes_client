import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster position="top-right" reverseOrder={false} />
  </>
);

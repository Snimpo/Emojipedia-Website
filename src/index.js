import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";  // Use relative path

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

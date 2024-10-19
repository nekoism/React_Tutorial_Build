import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1509460107.
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

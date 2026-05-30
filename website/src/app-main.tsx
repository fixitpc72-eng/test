import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import { ThemeProvider } from "./context/ThemeProvider";
import ClearViewApp from "./components/app/ClearViewApp";

// The ClearView mobile app preview is dark-only (forced).
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider forced="dark">
      <ClearViewApp />
    </ThemeProvider>
  </StrictMode>
);

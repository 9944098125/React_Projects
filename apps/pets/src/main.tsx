import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PetProvider } from "./context/pet-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PetProvider>
      <App />
    </PetProvider>
  </StrictMode>,
);

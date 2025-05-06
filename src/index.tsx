import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroSection } from "./screens/Frame";
import { Contact } from "./screens/Frame/Contact";
import { Box } from "./screens/Frame/Shadow";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HeroSection />
    <Box />
  <Contact />
  </StrictMode>,
);

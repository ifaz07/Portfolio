import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// A portfolio should always make its first impression at the landing section.
// Without this, browsers may restore the visitor's previous scroll position
// before GSAP finishes setting up the smooth-scrolling wrapper.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

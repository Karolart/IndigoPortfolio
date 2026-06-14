import React from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App.tsx";
import { AdminRecommendations } from "./app/components/AdminRecommendations";

import "./styles/index.css";

const path = window.location.pathname;

createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    {path === "/admin"
      ? <AdminRecommendations />
      : <App />}
  </React.StrictMode>
);
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

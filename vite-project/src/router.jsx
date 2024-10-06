import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BedRoom from "./pages/BedRoom";
import DiningRoom from "./pages/DiningRoom";
import LivingRoom from "./pages/LivingRoom";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact", element: <BedRoom /> },
  { path: "/diningroom", element: <DiningRoom /> },
  { path: "/livingroom", element: <LivingRoom /> },
  { path: "/bedroom", element: <BedRoom /> },
]);

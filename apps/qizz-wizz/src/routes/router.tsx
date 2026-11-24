import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../features/Dashboard";
import Explore from "../features/Explore";

export const routesList = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
]);

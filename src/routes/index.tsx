import { Navigate, useRoutes } from "react-router-dom";
import { AboutPage, HomePage } from "./elements";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/",
      element: <AboutPage />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
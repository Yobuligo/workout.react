import { createBrowserRouter } from "react-router-dom";
import { WorkoutConfigPage } from "../pages/WorkoutConfigPage";
import { WorkoutPage } from "../pages/WorkoutPage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <WorkoutConfigPage />,
  },
  { path: "/workout", element: <WorkoutPage /> },
]);

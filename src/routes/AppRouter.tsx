import { createBrowserRouter } from "react-router-dom";
import { WorkoutConfigPage } from "../pages/WorkoutConfigPage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <WorkoutConfigPage />,
  },
]);

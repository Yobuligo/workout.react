import { createBrowserRouter } from "react-router-dom";
import { WorkoutConfigPage } from "../pages/WorkoutConfigPage";
import { WorkoutOverviewPage } from "../pages/WorkoutOverviewPage";
import { WorkoutTypePage } from "../pages/WorkoutTypePage";
import { Routes } from "./Routes";

export const AppRouter = createBrowserRouter([
  {
    path: Routes.workoutTypePage.origin,
    element: <WorkoutTypePage />,
  },
  { path: Routes.workoutConfig.origin, element: <WorkoutConfigPage /> },
  { path: Routes.workout.origin, element: <WorkoutOverviewPage /> },
]);

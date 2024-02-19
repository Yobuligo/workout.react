import { createBrowserRouter } from "react-router-dom";
import { WorkoutConfigPage } from "../pages/WorkoutConfigPage";
import { WorkoutPage } from "../pages/WorkoutPage";
import { WorkoutTypePage } from "../pages/workoutTypePage/WorkoutTypePage";

export const Routes = {
  workoutTypePage: "/",
  workoutConfig: "/workout-config",
  workout: "/workout",
};

export const AppRouter = createBrowserRouter([
  {
    path: Routes.workoutTypePage,
    element: <WorkoutTypePage />,
  },
  { path: Routes.workoutConfig, element: <WorkoutConfigPage /> },
  { path: Routes.workout, element: <WorkoutPage /> },
]);

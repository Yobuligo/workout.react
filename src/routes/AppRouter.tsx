import { createBrowserRouter } from "react-router-dom";
import { WorkoutConfigPage } from "../pages/WorkoutConfigPage";
import { WorkoutPage } from "../pages/WorkoutPage";
import { ExerciseTypePage } from "../pages/exerciseTypePage/ExerciseTypePage";

export const Routes = {
  exerciseTypePage: "/",
  workoutConfig: "/workout-config",
  workout: "/workout",
};

export const AppRouter = createBrowserRouter([
  {
    path: Routes.exerciseTypePage,
    element: <ExerciseTypePage />,
  },
  { path: Routes.workoutConfig, element: <WorkoutConfigPage /> },
  { path: Routes.workout, element: <WorkoutPage /> },
]);

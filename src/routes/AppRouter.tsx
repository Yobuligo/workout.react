import { createBrowserRouter } from "react-router-dom";
import { ExerciseListPage } from "../pages/ExerciseListPage";
import { WorkoutConfigPage } from "../pages/WorkoutConfigPage";
import { WorkoutOverviewPage } from "../pages/WorkoutOverviewPage";
import { WorkoutPage } from "../pages/WorkoutPage";
import { WorkoutTypePage } from "../pages/WorkoutTypePage";
import { Routes } from "./Routes";

export const AppRouter = createBrowserRouter([
  {
    path: Routes.workoutTypePage.origin,
    element: <WorkoutTypePage />,
  },
  { path: Routes.workoutConfig.origin, element: <WorkoutConfigPage /> },
  { path: Routes.workoutOverview.origin, element: <WorkoutOverviewPage /> },
  { path: Routes.workout.origin, element: <WorkoutPage /> },
  { path: Routes.exerciseList.origin, element: <ExerciseListPage /> },
]);

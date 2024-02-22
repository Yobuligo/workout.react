import { createBrowserRouter } from "react-router-dom";
import { WorkoutConfigPage } from "../pages/WorkoutConfigPage";
import { WorkoutPage } from "../pages/WorkoutPage";
import { WorkoutTypePage } from "../pages/workoutTypePage/WorkoutTypePage";
import { Route } from "../utils/Route";
import { configure } from "./configure";

export const Routes = configure({
  workoutTypePage: new Route("/"),
  workoutConfig: new Route("/:workout-type/workout-config"),
  workout: new Route("/workout"),
});

export const AppRouter = createBrowserRouter([
  {
    path: Routes.workoutTypePage.origin,
    element: <WorkoutTypePage />,
  },
  { path: Routes.workoutConfig.origin, element: <WorkoutConfigPage /> },
  { path: Routes.workout.origin, element: <WorkoutPage /> },
]);

import { createBrowserRouter } from "react-router-dom";
import { WorkoutPage } from "../pages/WorkoutPage";
import { ExerciseTypePage } from "../pages/exerciseTypePage/ExerciseTypePage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <ExerciseTypePage />,
  },
  { path: "/workout", element: <WorkoutPage /> },
]);

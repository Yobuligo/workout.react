import { Route } from "./Route";
import { configure } from "./configure";

export const Routes = configure({
  workoutTypePage: new Route("/"),
  workoutConfig: new Route("/:workout-type/workout-config"),
  workout: new Route("/workout"),
});

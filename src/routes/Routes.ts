import { configure } from "./core/configure";
import { route } from "./core/route";

export const Routes = configure({
  workout: route("/:workout-type/workout"),
  workoutConfig: route("/:workout-type/workout-config"),
  workoutOverview: route("/:workout-type/workout-overview"),
  workoutTypePage: route("/"),
});

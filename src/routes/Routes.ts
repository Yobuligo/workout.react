import { configure } from "./core/configure";
import { route } from "./core/route";

export const Routes = configure({
  workoutTypePage: route("/"),
  workoutConfig: route("/:workout-type/workout-config"),
  workout: route("/workout"),
});

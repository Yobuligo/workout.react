import { configure } from "./core/configure";
import { route } from "./core/route";

export const Routes = configure({
  exerciseList: route("/:workout-type/exercise-list"),
  workout: route("/:workout-type/workout"),
  workoutConfig: route("/:workout-type/workout-config"),
  workoutOverview: route("/:workout-type/workout-overview"),
  workoutTypePage: route("/"),
});

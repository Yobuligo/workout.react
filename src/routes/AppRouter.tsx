import { createBrowserRouter } from "react-router-dom";
import { WorkoutConfigPage } from "../pages/WorkoutConfigPage";
import { WorkoutPage } from "../pages/WorkoutPage";
import { WorkoutTypePage } from "../pages/workoutTypePage/WorkoutTypePage";


export const Routes = {
  workoutTypePage: "/",
  workoutConfig: "/:workout-type/workout-config",
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



type IsParameter<Part> = Part extends `:${infer ParamName}` ? ParamName : never;
type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? IsParameter<PartA> | FilteredParts<PartB>
  : IsParameter<Path>;
type ParamValue<Key> = Key extends `...${infer Anything}` ? string[] : number;
type RemovePrefixDots<Key> = Key extends `...${infer Name}` ? Name : Key;
type Params<Path> = {
  [Key in FilteredParts<Path> as RemovePrefixDots<Key>]: ParamValue<Key>;
};
type CallbackFn<Path> = (req: { params: Params<Path> }) => void;
 
function get<Path extends string>(path: Path, callback: CallbackFn<Path>) {
	// TODO: implement
}

get("/:workout-type/workout-config", (req)=>{
  req.params["workout-type"]
})
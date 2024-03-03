import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { fetchMock } from "./api/mock/fetchMock";
import { AppContext } from "./context/AppContext";
import { Random } from "./core/Random";
import { repeat } from "./core/repeat";
import { useList } from "./hooks/useList";
import { useValue } from "./hooks/useValue";
import { AppRouter } from "./routes/AppRouter";
import { IDevice } from "./shared/model/device/IDevice";
import { IWorkoutType } from "./shared/model/exercise/IWorkoutType";
import { MuscleGroupRandomizer } from "./shared/services/MuscleGroupRandomizer";
import { ExerciseFinder } from "./shared/services/ExerciseFinder";
import { PowerExercises } from "./shared/model/exercise/PowerExercises";

export const fetchBackup = global.fetch;
global.fetch = fetchMock;

// !! DEMO picking from muscle Group -> to be deleted
const muscleGroupRandom = new MuscleGroupRandomizer(5);
const exerciseFinder = new ExerciseFinder(PowerExercises);
repeat(Random.next(5), () => {
const muscleGroup =  muscleGroupRandom.next()
  const exercise = exerciseFinder.findByMuscleGroup(muscleGroup);
  console.log(`Generated exercise ${exercise.title} for ${muscleGroup}`);
});
// !! DEMO picking from muscle Group -> to be deleted

const App: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        selectedDevices: useList<IDevice>("id"),
        selectedWorkoutType: useValue<IWorkoutType | undefined>(undefined),
      }}
    >
      <RouterProvider router={AppRouter} />
    </AppContext.Provider>
  );
};

export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { fetchMock } from "./api/mock/fetchMock";
import { AppContext } from "./context/AppContext";
import { useList } from "./hooks/useList";
import { useValue } from "./hooks/useValue";
import { AppRouter } from "./routes/AppRouter";
import { BodyWeightDevice } from "./shared/model/device/BodyWeightDevice";
import { IDevice } from "./shared/model/device/IDevice";
import { IWorkout } from "./shared/model/workout/workout/IWorkout";

export const fetchBackup = global.fetch;
global.fetch = fetchMock;

const App: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        selectedDevices: useList<IDevice>("id", [BodyWeightDevice]),
        selectedWorkout: useValue<IWorkout | undefined>(undefined),
      }}
    >
      <RouterProvider router={AppRouter} />
    </AppContext.Provider>
  );
};

export default App;

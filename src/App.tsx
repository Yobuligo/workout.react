import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { fetchMock } from "./api/mock/fetchMock";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { AppRouter } from "./routes/AppRouter";
import { IDevice } from "./shared/model/exercise/IDevice";

export const fetchBackup = global.fetch;
global.fetch = fetchMock;

const App: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        selectedDevices: useValue<IDevice[]>([]),
      }}
    >
      <RouterProvider router={AppRouter} />
    </AppContext.Provider>
  );
};

export default App;

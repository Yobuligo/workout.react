import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { fetchMock } from "./api/mock/fetchMock";
import { AppContext } from "./context/AppContext";
import { useList } from "./hooks/useList";
import { AppRouter } from "./routes/AppRouter";
import { IDevice } from "./shared/model/exercise/IDevice";

export const fetchBackup = global.fetch;
global.fetch = fetchMock;

const App: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        selectedDevices: useList<IDevice>("id"),
      }}
    >
      <RouterProvider router={AppRouter} />
    </AppContext.Provider>
  );
};

export default App;

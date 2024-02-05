import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { fetchMock } from "./api/mock/fetchMock";
import { AppRouter } from "./routes/AppRouter";

export const fetchBackup = global.fetch;
global.fetch = fetchMock;

const App: React.FC = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;

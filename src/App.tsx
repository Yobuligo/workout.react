import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { fetchMock } from "./api/mock/fetchMock";

global.fetch = fetchMock;

const App: React.FC = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;

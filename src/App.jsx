import logo from "./logo.svg";
import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

  ]);
  return <RouterProvider router={router} />;
}

export default App;

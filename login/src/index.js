import React from 'react';
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";

import App from "./App";
import DetailPerson from './components/DetailPerson';
import Home from './components/Home';
import Details from './components/Details';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/detail",
      element: <Details />,
    },
    {
      path:"/detailPerson",
      element:<DetailPerson />,
    }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





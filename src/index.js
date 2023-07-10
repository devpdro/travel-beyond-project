import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import About from "./router/About";
import Relax from "./router/Relax";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cultural from "./router/Cultural";
import Sports from "./router/Sports";
import History from "./router/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Relax",
    element: <Relax />,
  },
  {
    path: "/Cultural",
    element: <Cultural />,
  },
  {
    path: "/Sports",
    element: <Sports />,
  },
  {
    path: "/History",
    element: <History />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

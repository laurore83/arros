import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import App from "./App";
import Home from "./pages/Home";
import "./styles/index.scss";
import Gallerie from "./pages/Gallerie";
import Partenaires from "./pages/Partenaires";
import Contact from "./pages/Contact";
import Visites from "./pages/Visites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Actu from "./pages/Actu";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <App />
      </UserContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallerie",
        element: <Gallerie />,
      },
      {
        path: "/actu",
        element: <Actu />,
      },
      {
        path: "/partenaires",
        element: <Partenaires />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/visites",
        element: <Visites />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

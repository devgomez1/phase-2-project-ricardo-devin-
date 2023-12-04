import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './pages/App.jsx'
import NFL from './pages/NFL.jsx'
import MLB from './pages/MLB.jsx'
import F1 from './pages/F1.jsx'
import NBA from './pages/NBA.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "home",
    element: <App />
  },
  {
    path: "nfl",
    element: <NFL />
  },
  {
    path: "mlb",
    element: <MLB />
  },
  {
    path: "f1",
    element: <F1 />
  },
  {
    path: "nba",
    element: <NBA />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

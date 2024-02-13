import React from 'react'
import ReactDOM from 'react-dom/client'
import RootLayout from './layout/RootLayout.jsx';
import App from './App.jsx'
import About from './About.jsx'
import Contacts from './Contacts.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "about",
        element: <About />
      }  
    ]
  },
  {
    path: "/contacts",
    element: <Contacts />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

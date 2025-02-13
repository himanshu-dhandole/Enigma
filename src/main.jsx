import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './Components/Hero'
import TrackingList from './Components/TrackingList'
import TargetCamLoc from './Components/TargetCamLoc'
import Request from './Components/Request'
import ActiveSessions from './Components/ActiveSessions'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />
      },
      {
        path: "/tracking",
        element: <TrackingList />
      },
      {
        path: "/target",
        element: <TargetCamLoc />
      },
      {
        path: "/requests",
        element: <Request />
      },
      {
        path: "/sessions",
        element: <ActiveSessions />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


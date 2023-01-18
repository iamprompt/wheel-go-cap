import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import HelloPage from './pages/hello'
import HiPage from './pages/hi'

import './styles/globals.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HelloPage />,
  },
  {
    path: '/hi',
    element: <HiPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

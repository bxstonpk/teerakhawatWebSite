import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import AboutLayout from './Layout/AboutLayout.jsx'
import ProductLayout from './Layout/ProductLayout.jsx'
import ContactLayout from './Layout/ContactLayout.jsx'

import './index.css'
import Quotation from './component/quotation.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />
  },
  {
    path: "/about",
    element: <AboutLayout />
  },
  {
    path: "/product",
    element: <ProductLayout />
  },
  {
    path: "/contact",
    element: <ContactLayout />
  },
  {
    path: "/quotation",
    element: <Quotation />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

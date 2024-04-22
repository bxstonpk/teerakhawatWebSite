import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import AboutLayout from './Layout/AboutLayout.jsx'
import ProductLayout from './Layout/ProductLayout.jsx'
import ContactLayout from './Layout/ContactLayout.jsx'
import QuotationForm from './component/quotation.jsx'

import './index.css'

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
    element: <QuotationForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

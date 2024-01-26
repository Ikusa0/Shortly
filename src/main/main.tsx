import Router from '@/main/routes/router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)

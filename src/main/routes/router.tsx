import Landing from '@/presentation/pages/landing/landing'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  }
])

export default Router

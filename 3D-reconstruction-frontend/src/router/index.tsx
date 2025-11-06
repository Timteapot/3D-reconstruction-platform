import {createBrowserRouter} from 'react-router-dom'
import type {RouteObject} from 'react-router'
import React from 'react'
import RequireAuth from '../utils/Auth/requireAuth'


const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
const NotFound = React.lazy(() => import('../pages/NotFound'))


const routes: RouteObject[] =[
  {
    path: "/",
    Component: () => (
      <RequireAuth allowed={true} redirectTo="/login">
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: "/login",
    Component: () => (
      <RequireAuth allowed={false} redirectTo="/dashboard">
        <Login />
      </RequireAuth>
    ),
  },
  {
    path: "*",
    Component: NotFound,
  },
]

const router = createBrowserRouter(routes)

export default router
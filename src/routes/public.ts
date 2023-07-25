import { lazy } from 'react'

const Login = lazy(() => import('../views/public/Login'))

const Logoff = lazy(() => import('../views/public/Logoff'))

export const routes = [
  { path: '/', Element: Login },
  {
    path: 'logoff',
    name: 'Logoff',
    Element: Logoff
  }
]

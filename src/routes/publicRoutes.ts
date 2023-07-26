import { lazy } from 'react'

const Login = lazy(() => import('../views/public/Login'))

const Logoff = lazy(() => import('../views/public/Logoff'))
const DefaultLayout = lazy(() => import('../views/layouts/DefaultLayout'))

const Page404 = lazy(() => import('../views/Page404'))

export const publicRoutes = [
  {
    Element: DefaultLayout,
    path: '*',
    ErrorElement: Page404,
    children: [
      { path: '', Element: Login },
      {
        path: 'logoff',
        name: 'Logoff',
        Element: Logoff
      }
    ]
  }
]

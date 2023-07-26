import { lazy } from 'react'

const Login = lazy(() => import('../views/public/Login'))

const Logoff = lazy(() => import('../views/public/Logoff'))
const AdminLayout = lazy(() => import('../views/layouts/AdminLayout'))
const Page404 = lazy(() => import('../views/Page404'))

export const privateRoutes = [
  {
    Element: AdminLayout,
    path: '/admin/*',
    children: [
      { path: '', name: 'Login', Element: Login, icon: 'i' },
      {
        path: 'logoff',
        name: 'Logoff',
        Element: Logoff,
        icon: 'i'
      },
      { path: '*', Element: Page404 }
    ]
  }
]

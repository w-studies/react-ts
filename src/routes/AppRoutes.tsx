import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { publicRoutes } from './publicRoutes'
import { Suspense } from 'react'
import { Spinner } from '@/components'
import { privateRoutes } from './privateRoutes'

const makeRoutes = (routes: any, variant = 'primary') =>
  routes.map(({ path, Element, name, children, ErrorElement }: any) => {
    if (children) {
      children = makeRoutes(children, 'danger')
    }

    return {
      path,
      element: (
        <Suspense fallback={<Spinner variant={variant} />}>
          <Element title={name} />
        </Suspense>
      ),
      children,
      errorElement: ErrorElement && <ErrorElement />
    }
  })

const routes = makeRoutes([...publicRoutes, ...privateRoutes])

const router = createBrowserRouter(routes)

export const AppRoutes = () => <RouterProvider router={router} />

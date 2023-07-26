import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <main className="container">
      <h1 className="fw-light">Default Layout</h1>
      <Outlet />
    </main>
  )
}

export default DefaultLayout

import { Outlet } from 'react-router-dom'
import { Header } from './_admin/Header'

export const AdminLayout = () => {
  return (
    <div className="app">
      <Header />
      <main className="container">
        MAIN
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </div>
  )
}
export default AdminLayout

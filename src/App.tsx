import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './views/layouts/AdminLayout'
import DefaultLayout from './views/layouts/DefaultLayout'
import { Spinner } from './components'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner type="loading" color="brand-secondary" />}>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

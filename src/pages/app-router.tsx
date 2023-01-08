import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import { StyleGuidePage } from '@/pages/style-guide.page'
import { ActorsPage } from '@/pages/actors.page'

function Layout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='style-guide' element={<StyleGuidePage />} />
          <Route path='actors' element={<ActorsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

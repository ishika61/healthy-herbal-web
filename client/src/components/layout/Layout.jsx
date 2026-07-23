import { Outlet, useLocation } from 'react-router-dom'
import Seo from '../common/Seo'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout() {
  const { pathname } = useLocation()
  const pageTitle = { '/': 'Herbal wellness for everyday rituals', '/products': 'Products', '/cart': 'Your cart', '/about': 'About', '/contact': 'Contact' }[pathname]
  return (
    <div className="flex min-h-screen flex-col bg-black-950 text-white-100">
      {pageTitle && <Seo title={pageTitle} />}
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

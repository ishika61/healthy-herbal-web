import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ErrorBoundary from './components/common/ErrorBoundary'
import ScrollToTop from './components/common/ScrollToTop'
import ScrollToTopButton from './components/common/ScrollToTopButton'
import { ToastProvider } from './context/ToastContext'
import { WishlistProvider } from './context/WishlistContext'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <ToastProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <AppRoutes />
                <ScrollToTopButton />
              </CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </ToastProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App

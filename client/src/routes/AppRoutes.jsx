import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingState from '../components/common/LoadingState'
import RequireAuth from '../components/auth/RequireAuth'
import Layout from '../components/layout/Layout'

const About = lazy(() => import('../pages/About'))
const Cart = lazy(() => import('../pages/Cart'))
const Contact = lazy(() => import('../pages/Contact'))
const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const ProductDetails = lazy(() => import('../pages/ProductDetails'))
const Products = lazy(() => import('../pages/Products'))
const Profile = lazy(() => import('../pages/Profile'))
const SignIn = lazy(() => import('../pages/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp'))

function AppRoutes() {
  return <Suspense fallback={<LoadingState label="Loading page..." />}><Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="products" element={<Products />} /><Route path="products/:productSlug" element={<ProductDetails />} /><Route path="cart" element={<Cart />} /><Route path="about" element={<About />} /><Route path="contact" element={<Contact />} /><Route path="sign-in" element={<SignIn />} /><Route path="sign-up" element={<SignUp />} /><Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} /><Route path="*" element={<NotFound />} /></Route></Routes></Suspense>
}

export default AppRoutes

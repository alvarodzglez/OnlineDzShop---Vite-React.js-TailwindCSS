import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'  

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import Footer from '../../Components/Footer/footer'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/clothes', element: <Home />},
    { path: '/furnitures', element: <Home />},
    { path: '/electronics', element: <Home />},
    { path: '/others', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-orders/last', element: <MyOrder />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/*', element: <NotFound />},
    { path: '/sign-in', element: <SignIn />}
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter> 
      <AppRoutes />
      <Navbar />
      <CheckOutSideMenu />
      <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

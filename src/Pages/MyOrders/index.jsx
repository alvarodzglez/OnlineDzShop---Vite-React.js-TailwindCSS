import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4 text-gray-300">
      <p className="text-xl font-bold">My Orders</p>
      </div>
      {
        context.order.map ((order, index) => {
          console.log("totalProducts:", order.totalProducts)
          return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
            date={order.date}
            totalProducts={order.totalProducts} 
            totalPrice={order.totalPrice} />
          </Link>
        )})
      }
    </Layout>
  )
}
  
  export default MyOrders
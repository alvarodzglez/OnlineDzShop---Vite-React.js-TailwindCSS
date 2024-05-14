import Layout from "../../Components/Layout"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import { totalPrice } from '../../Utils/totalPrice'

function MyOrder() {
  const context = useContext (ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 text-gray-300">
        <Link to='/my-orders' className='absolute right-0 text-blue-500 underline text-sm'>
        <p>View all</p>
        </Link>
        <p className="text-xl font-bold">My Order</p>
      </div>
      <div className='flex flex-col w-80'>
        {
            context.order?.[index]?.products.map( product => (
                <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imgUrl={product.images}
                    price={product.price}
                    units={product.units}
                />
            ))
        }
      </div>
      <p className="flex justify-between text-xl w-40 px-4 mt-2 text-gray-300">
        <span className='font-semibold'>Total:</span>
        <span className='font-bold'>${totalPrice(context.order[index].products)}</span>
      </p>
    </Layout>
  )
}
  
export default MyOrder
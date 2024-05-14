import './styles.css'
import  { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils/totalPrice'
import { totalCartProducts } from '../../Utils/totalCartProducts'

import { format } from 'date-fns';


const CheckOutSideMenu = () => {
    const context = useContext (ShoppingCartContext)

    const handleDetelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const sumOrRestItem =(id, action)=>{
        const newProducts = [...context.cartProducts]
        const itemIndex = newProducts.findIndex(product => product.id === id)
        if(action=='minus'){
            newProducts[itemIndex] = {
                ...newProducts[itemIndex],
                units: (newProducts[itemIndex].units - 1)
            };
        }
        else if(action=='plus'){
            newProducts[itemIndex] = {
                ...newProducts[itemIndex],
                units: (newProducts[itemIndex].units + 1)
            };
        }
       context.setCartProducts(newProducts);
       if(newProducts[itemIndex].units == 0){
        handleDetelete(id)
      }
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: format(new Date(), 'dd/MM/yyyy  HH:mm'),
            products: context.cartProducts,
            totalPrice: totalPrice(context.cartProducts),
            totalProducts: totalCartProducts(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
        context.closeCheckout()
    }

    return (
        <aside className={`${context.isCheckoutOpen ? 'flex' : 'hidden'} checkout-side-menu bg-black flex flex-col fixed right-0 border border-gray-500 rounded `}>
            <div className="flex justify-between items-center p-4 text-gray-300">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                <XMarkIcon className="w-6 h-6"
                onClick={() => context.closeCheckout()} />
                </div>
            </div>
            <div className='p-4 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map( product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imgUrl={product.images}
                        price={product.price}
                        handleDelete={handleDetelete}
                        sumOrRestItem={sumOrRestItem}
                        units={product.units}
                    />
                ))
            }
            </div>
            <div className='flex flex-col p-4 items-center'>
            <p className={`${context.cartProducts.length > 0 ? 'flex' : 'hidden'} text-gray-300 w-60 flex justify-between text-xl px-4 mb-2`}>
                <span className='font-semibold'>Total:</span>
                <span className='font-bold'>${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
            <button 
            className='bg-green-500 text-gray-900 py-3 w-60 rounded-lg text-lg font-bold
            transition easy-in-out duration-300 cursor-pointer
            hover:scale-110'
            onClick={() => handleCheckout()}>Checkout</button>
            </Link>
            </div>
        </aside>
    )
}

export default CheckOutSideMenu
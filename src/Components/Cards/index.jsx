import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

import { PlusCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productData) => {
        context.openProductDetail()
        context.setProductToShow(productData)
        context.closeCheckout()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        productData.units = 1;
        // context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckout()
        }

    const renderIcon = (id) => {
        const productInCart = context.cartProducts.find(product => product.id === id)
        if (productInCart) {
            return (
            <div className="absolute top-2 right-2 flex justify-center items-center cardColors">
                <div className="h-6 w-6 flex justify-center items-center">
                <ShoppingCartIcon />
                <p>{productInCart.units}</p>
                </div>
            </div>
            )
        }

        else {
            return (
                <div
                    className="absolute top-2 right-2 flex justify-center items-center size-6 hover:text-green-500"
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusCircleIcon />
                </div>
            )
        }
    } 

    return(
        <div 
        className="transition easy-in-out duration-300 cursor-pointer w-56 h-62 hover:scale-110" 
        onClick={() => showProduct(data.data)}> 
            <figure className="relative mb-2 w-full h-4/5" >
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between  text-gray-300 px-1">
                <span className="text-sm font-light ">{data.data.title}</span>
                <span className="text-sm font-bold m-1">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card
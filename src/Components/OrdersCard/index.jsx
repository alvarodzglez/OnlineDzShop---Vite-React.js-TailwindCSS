import { CalendarDaysIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const { date, totalProducts, totalPrice } = props

    return (
        <div className="flex justify-between items-center mb-2 border border-gray-300 text-gray-300 rounded w-80 p-2
        transition easy-in-out duration-300 cursor-pointer
        hover:scale-110 hover:text-green-500 hover:border-green-500">
                <div className="flex flex-col">
                    <span className="flex items-center gap-1"><CalendarDaysIcon className="h-4 w-4"/>{date}</span>
                    <span className="flex items-center gap-1"><ShoppingBagIcon className="h-4 w-4"/>{totalProducts}</span>    
                </div>
                <span className="font-bold text-lg mr-2">${totalPrice}</span>
        </div>
    )
}

export default OrdersCard
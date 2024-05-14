import { NavLink } from 'react-router-dom'
import {ShoppingCartContext} from '../../Context'
import { useContext } from 'react'

import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { totalCartProducts   } from '../../Utils/totalCartProducts'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4 text-green-500'
    const context = useContext (ShoppingCartContext)
    
    return (
        <nav className=' bg-black text-gray-300 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-lighboldt border-b-2 border-gray-500'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/' 
                    onClick={() => context.setSearchByCategory()}>
                        DZ Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    onClick={() => context.setSearchByCategory('shoes')}
                        className={({isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-green-500'>
                    alvarodzglez@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center gap-1 cursor-pointer'
                onClick={() => {context.openCheckout()}}>
                    <ShoppingCartIcon className=" h-4 w-4"/>
                    {totalCartProducts(context.cartProducts)}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
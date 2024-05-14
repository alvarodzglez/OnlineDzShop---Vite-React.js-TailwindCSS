import './styles.css'
import  { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const context = useContext (ShoppingCartContext)
    return (
        <aside className={`${context.isDetailOpen ? 'flex' : 'hidden'} product-detail bg-black text-gray-300 flex flex-col fixed right-0 border border-gray-500 rounded`}>
            <div className="flex justify-between items-center p-4 text-gray-300">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                <XMarkIcon className="w-6 h-6"
                onClick={() => context.closeProductDetail()} />
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={context.ProductToShow.images} alt={context.ProductToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-xl'>${context.ProductToShow.price}</span>
                <span className='font-medium text-xl'>{context.ProductToShow.title}</span>
                <span className='font-light text-sm'>{context.ProductToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail
import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/solid"

const OrderCard = props => {
    const { id, title, imgUrl, price, handleDelete, sumOrRestItem, units } = props

    let renderTrashIcon
    let renderUnitsControl
    let renderFinalUnits

    if (handleDelete) {
        renderTrashIcon = 
            <TrashIcon
            className="h-6 w-6 text-red-600 cursor-pointer"
            onClick={() => handleDelete(id)}/>
    }

    if (sumOrRestItem) {
        renderUnitsControl = 
            <div className="flex items-center gap-1">
                <PlusCircleIcon 
                className="text-green-500 size-6 cursor-pointer"
                onClick={() => sumOrRestItem(id, 'plus')}/>
                <p>{units}</p>
                <MinusCircleIcon 
                className=" text-green-500 size-6 cursor-pointer"
                onClick={() => sumOrRestItem(id, 'minus')}/>
            </div>
    }

    if (!sumOrRestItem) {
        renderFinalUnits = 
                <p className="text-m font-light">{units}x </p>
    }



    return (
        <div className="flex justify-between items-center mb-2 text-gray-300">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imgUrl} alt={title} />
                </figure>
                <div className="flex flex-col">
                    {renderFinalUnits}
                    <p className="text-m font-light w-40">{title}</p>
                    {renderUnitsControl}
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price*units}</p>
                {renderTrashIcon}
            </div>
        </div>
    )
}

export default OrderCard
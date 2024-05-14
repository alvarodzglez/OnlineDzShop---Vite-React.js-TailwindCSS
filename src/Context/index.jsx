import { useState, createContext, useEffect } from "react";

export const ShoppingCartContext = createContext() 

export const ShoppingCartProvider = ({children}) => {
    // Product Detail · Open/Close
    const [ isDetailOpen, setDetailOpen] = useState(false)
    const openProductDetail = () => setDetailOpen (true)
    const closeProductDetail = () => setDetailOpen (false)

    // Product Detail · Show Product
    const [ ProductToShow, setProductToShow] = useState({})

    // Shopping Cart · Add Product to Cart
    const [ cartProducts, setCartProducts] = useState([])

    // Checkout Side Menu · Open/Close
    const [ isCheckoutOpen, setcheckoutOpen] = useState(false)
    const openCheckout = () => setcheckoutOpen (true)
    const closeCheckout = () => setcheckoutOpen (false)

    // Shopping Cart · Order
    const [ order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filteredBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filteredBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filteredBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filteredBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filteredBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    return (
        <ShoppingCartContext.Provider value={{
            openProductDetail,
            closeProductDetail,
            isDetailOpen,
            ProductToShow,
            setProductToShow,
            setCartProducts,
            cartProducts,
            isCheckoutOpen,
            openCheckout,
            closeCheckout,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory          
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


export const totalCartProducts = (cartProducts) => {
        const total = cartProducts.reduce((total, product) => {
        return total + (product.units)
    }, 0);
    return total
}

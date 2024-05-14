export const totalPrice = (cartProducts) => {
    const total = cartProducts.reduce((total, product) => {
    return total + (product.units * product.price)
}, 0);
return total
}
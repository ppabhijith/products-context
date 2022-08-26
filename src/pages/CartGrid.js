import React from 'react'
import Cart from '../components/Cart';
import { useProduct } from '../context/product-context';

function CartGrid() {

    const { state: {
        cart
    } } = useProduct()

    const total = [...cart].reduce((sum, item) => item.price * item.qty + sum, 0)

    return (
        <div className='cart-container'>
            <h3>Cart </h3>
            <p>Total Amount: {total}$</p>
            <Cart products={cart} />
        </div>
    )
}

export default CartGrid
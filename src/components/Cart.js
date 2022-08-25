import React from 'react'
import Products from './Products'

function Cart({ product }) {

    console.log(product, 'Cart')
    return (
        <div>
            <Products product={product} />
        </div>
    )
}

export default Cart
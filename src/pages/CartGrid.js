import React from 'react'
import Cart from '../components/Cart';
import { useProduct } from '../context/product-context';

import Typography from '@mui/material/Typography';

function CartGrid() {

    const { state: {
        cart
    } } = useProduct()

    const total = [...cart].reduce((sum, item) => item.price * item.qty + sum, 0)

    return (
        <div className='cart-container'>
            <Typography variant="h6" gutterBottom>
                Cart
            </Typography>
            <Typography variant="caption" display="inline-block" gutterBottom>
                Total Amount: {total}$
            </Typography>
            <Cart products={cart} />
        </div>
    )
}

export default CartGrid
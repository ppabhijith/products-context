import React from 'react'
import { useProduct } from '../context/product-context';

function Quantity({ product }) {

    const changeHandler = (id, qty) => {
        dispatch({
            type: 'CHANGE_QUANTITY',
            payload: {
                id, qty
            }
        })
    }
    const { dispatch } = useProduct();

    return (
        <div className='quantity-container'>
            <button onClick={() => changeHandler(product.id, product.qty + 1)}>+</button>
            <span>{product.qty}</span>
            <button onClick={() => changeHandler(product.id, product.qty - 1)}>-</button>
        </div>
    )
}

export default Quantity;
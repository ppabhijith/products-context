import React from 'react'
import { useProduct } from '../context/product-context'

import Button from '@mui/material/Button';

export default function ({ product }) {

    const { state: { cart },
        dispatch
    } = useProduct()

    const addCartButton = <Button variant="contained"
        onClick={() => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })}
    >Add to cart</Button>
    const removeCartButton = <button
        className='red-bg'
        onClick={() => dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product.id
        })}
    >Remove from cart</button>

    const isCarted = cart.some(item => product.id === item.id)

    return (
        <div className='product-card flex'>
            <img className='product--image' src={product.thumbnail} alt={product.title} />
            <h5>{product.title}</h5>
            <p>
                {product.description}
            </p>
            <p>
                <label>Price: </label>
                {`${product.price}$`}
            </p>
            <div className='button-container'>
                {
                    (isCarted ? removeCartButton : addCartButton)
                }
            </div>
        </div>
    )
}

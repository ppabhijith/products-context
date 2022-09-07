import React from 'react'
import { useProduct } from '../context/product-context'

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLogin } from '../context/loginContext';

export default function ({ product }) {

    const { state: { cart },
        dispatch
    } = useProduct()
    const { user, setUser } = useLogin()


    const addCartButton = <Button variant="contained" color='success'
        onClick={() => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })}
    >Add to cart</Button>
    const removeCartButton = <Button variant="contained" color='error'
        onClick={() => dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product.id
        })}
    >Remove from cart</Button>

    const isCarted = cart.some(item => product.id === item.id)

    return (
        <div className='product-card flex'>
            <img className='product--image' src={product.thumbnail} alt={product.title} />
            <Typography variant="h6" gutterBottom>
                {product.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
                {product.description}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                <label>Price: </label>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {`${product.price}$`}
            </Typography>
            <div className='button-container'>
                {
                    (isCarted ? removeCartButton : addCartButton)
                }
            </div>
        </div>
    )
}

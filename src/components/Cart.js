import React from 'react'
import { useProduct } from '../context/product-context'
import Quantity from './Quantity'

import Button from '@mui/material/Button';

function Cart({ products }) {
    const { dispatch } = useProduct()

    // const total = [...products].reduce((sum, item) => item.price * item.qty + sum, 0)

    return (
        <>
            {/* <h3>Cart </h3>
            <p>Total Amount: {total}$</p> */}
            <div className='products-container flex flex-wrap'>
                {
                    Object.keys(products).length !== 0 ? products.map(product => {
                        return (
                            <div key={product.id} className='product-card flex'>
                                <img className='product--image' src={product.thumbnail} alt={product.title} />
                                <h5>{product.title}</h5>
                                <p>
                                    <label>Price: </label>
                                    {`${product.price}$`}
                                </p>
                                <div className='button-container'>
                                    <Button variant="contained" color='error'
                                        onClick={() => dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            payload: product.id
                                        })}
                                    >Remove from cart</Button>
                                    <Quantity product={product} />
                                </div>
                            </div>
                        )
                    })
                        : <h6>Cart is Empty</h6>
                }
            </div>
        </>
    )
}

export default Cart
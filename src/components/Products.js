import React from 'react'
import { useProduct } from '../context/product-context'

export default function ({ product }) {

    const { state: { cart },
        dispatch
    } = useProduct()
    // console.log(product, 'product')

    const addCartButton = <button
        className='green-bg'
        onClick={() => dispatch({
            type: 'ADD_TO_CART',
            payload: product.id
        })}
    >Add to cart</button>
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
                {isCarted && console.log('qty')}

            </div>
        </div>
    )
}

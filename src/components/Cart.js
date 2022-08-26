import React from 'react'
import { useProduct } from '../context/product-context'
import Quantity from './Quantity'

function Cart({ products }) {
    const { dispatch } = useProduct()

    const total = [...products].reduce((sum, item) => item.price * item.qty + sum, 0)

    return (
        <>
            <h3>Cart </h3>
            <p>Total Amount: {total}$</p>
            <div>
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className='product-card flex'>
                                <img className='product--image' src={product.thumbnail} alt={product.title} />
                                <h5>{product.title}</h5>
                                <p>
                                    <label>Price: </label>
                                    {`${product.price}$`}
                                </p>
                                <div className='button-container'>
                                    <button
                                        className='red-bg'
                                        onClick={() => dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            payload: product.id
                                        })}
                                    >Remove from cart</button>
                                    <Quantity product={product} />
                                </div>
                            </div>)
                    })
                }
            </div>
        </>
    )
}

export default Cart
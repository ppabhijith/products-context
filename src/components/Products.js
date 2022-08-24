import React from 'react'

export default function ({ product }) {

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
                <button className='green-bg'>Add to cart</button>
                <button className='red-bg'>Remove from cart</button>
            </div>
        </div>
    )
}

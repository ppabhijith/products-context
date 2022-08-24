import React from 'react'

export default function ({ product }) {
    console.log(product)
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
        </div>
    )
}

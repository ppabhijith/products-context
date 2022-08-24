import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Products from '../components/Products'
import { useProduct } from '../context/product-context';

export default function ProductsGrid() {

    // const [products, setproducts] = useState([]);
    const { state: { products }, dispatch } = useProduct()

    const loadProducts = async () => {
        const { data } = await axios.get('https://dummyjson.com/products')
        console.log('products loaded')
        // setproducts(data.products)
        dispatch({
            type: 'loadProduct',
            payload: data.products
        });
    }

    useEffect(() => {
        loadProducts()
    }, [])
    return (
        <>
            <h3>Products</h3>
            <div className='products-container flex flex-wrap'>
                {
                    products.map((product) => <Products key={product.id} product={product} />)
                }
            </div>
        </>
    )
}

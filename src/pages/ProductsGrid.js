import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart';
import Products from '../components/Products'
import { useProduct } from '../context/product-context';

export default function ProductsGrid() {

    // const [products, setproducts] = useState([]);
    const { state, dispatch } = useProduct()
    // console.log(state.products, 'state product')
    console.log(state.cart, 'state cart')
    const loadProducts = async () => {
        const { data } = await axios.get('https://dummyjson.com/products')
        console.log('products loaded')
        // setproducts(data.products)
        dispatch({
            type: 'LOAD_PRODUCT',
            payload: data.products
        });
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <>
            <section className="products-section">
                <h3>Products</h3>
                <div className='products-container flex flex-wrap'>
                    {
                        state.products.map((product) => <Products key={product.id} product={product} />)
                    }
                </div>
            </section>
            <div className='cart-container'>
                <Cart products={state.cart} />
            </div>
        </>
    )
}

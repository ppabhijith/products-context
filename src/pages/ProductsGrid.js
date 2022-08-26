import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
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
                        state.products.map((product) => <Link to={`/products/${product.id}`}><Products key={product.id} product={product} /></Link>)
                    }
                </div>
            </section>
            {/* <div className='cart-container'>
                <Cart products={state.cart} />
            </div> */}
        </>
    )
}

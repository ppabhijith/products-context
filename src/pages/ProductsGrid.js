import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Products from '../components/Products'
import { useProduct } from '../context/product-context';
import useFetch from '../hooks/useFetch';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ProductsGrid() {

    // const [products, setproducts] = useState([]);
    const { state, dispatch } = useProduct()
    // //console.log(state.products, 'state product')
    // //console.log(state.cart, 'state cart')
    const { data, isLoaded } = useFetch("https://dummyjson.com/products");
    //console.log('data on product page', data)


    // const loadProducts = async () => {
    //     // const { data } = await axios.get('https://dummyjson.com/products')
    //     // //console.log('products loaded')
    //     // setproducts(data.products)
    //     dispatch({
    //         type: 'LOAD_PRODUCT',
    //         payload: data.products
    //     });
    // }

    useEffect(() => {
        //     //     loadProducts()
        isLoaded && dispatch({
            type: 'LOAD_PRODUCT',
            payload: data.products
        });
    }, [data])

    return (
        <>
            <section className="products-section">
                <Typography variant="h4" gutterBottom>
                    Products
                </Typography>
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

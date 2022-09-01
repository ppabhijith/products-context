import axios from 'axios'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../components/Products'
import useFetch from '../hooks/useFetch'

export default function ProductDetails() {

    const [item, setItem] = useState()
    const [isLoaded, setLoaded] = useState(false)
    const { productId } = useParams();
    // const { item1, isLoaded } = useFetch(`https://dummyjson.com/products/${productId}`)
    useLayoutEffect(() => {
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then((resp) => {
                setItem(resp.data);
                setLoaded(true)
            })
    }, [])

    return (
        isLoaded && <section className='pro-details'>
            <h3>Details of {item.title}</h3>
            <Products product={item} />
        </section>
    )
}

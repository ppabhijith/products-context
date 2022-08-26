import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../components/Products'

export default function ProductDetails() {

    const [item, setItem] = useState()
    const { productId } = useParams();

    // const loadDetails = () => {
    //     return data;
    // }
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then((resp) => {
                setItem(resp.data);
                console.log(item)
            })
            .then(console.log(productId))

        // console.log(item, 'detailspage')
    }, [])

    return (
        <section className='pro-details'>{
            // <Products product={item} />
        }</section>
    )
}

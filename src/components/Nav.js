import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4, BsHouseFill } from "react-icons/bs";

export default function () {
    return (
        <nav className='nav-container flex '>
            <Link to='/products'><BsHouseFill />Products</Link> {/* links in the browser will change now */}
            <Link to='/cart'><BsCart4 /></Link>
        </nav>
    )
}

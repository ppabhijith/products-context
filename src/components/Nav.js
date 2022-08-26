import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4, BsHouseFill } from "react-icons/bs";

export default function () {
    return (
        <div className='nav-container'>
            <nav>
                <Link to='/products'><BsHouseFill />Products</Link> {/* links in the browser will change now */}
                <Link to='/cart'><BsCart4 /></Link>
            </nav>
        </div>
    )
}

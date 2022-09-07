import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { BsCart4, BsHouseFill } from "react-icons/bs";
import { useLogin } from '../context/loginContext';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function () {

    const { user, setUser } = useLogin()
    const isLoggedIn = Object.keys(user).length ? true : false;
    const navigate = useNavigate()

    return (
        <nav className='nav-container flex '>
            <Link to='/products'><BsHouseFill />Products</Link> {/* links in the browser will change now */}
            {!isLoggedIn ? <Button variant="contained" color='error'
                onClick={() => navigate('/')}
            >LOG IN</Button> : <Avatar alt={user.firstName} src={user.image} onClick={() => { setUser({}) }} />}
            <Link to='/products/user/cart'><BsCart4 /></Link>
        </nav>
    )
}

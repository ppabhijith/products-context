import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useLogin } from '../context/loginContext'


export default function ProtectedRoute({ children }) {

    const { user, setUser } = useLogin()
    const isLoggedIn = Object.keys(user).length ? true : false;
    console.log(isLoggedIn, children)
    if (!isLoggedIn) return <Navigate to="/" />

    return <Outlet />
}

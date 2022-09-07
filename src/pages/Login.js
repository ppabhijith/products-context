import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../context/loginContext'

export default function Login() {
    const [isLogged, setIsLogged] = useState(false)
    const [state, setState] = useState({ userName: '', password: '' })
    const { user, setUser } = useLogin()
    const navigate = useNavigate()
    const data = {
        username: 'kminchelle',
        password: '0lelplR',
    }
    const handleChange = (e) => {
        let [name, value] = [e.target.name, e.target.value]
        setState((prev => (
            { ...prev, [name]: value }
        )))
        console.log('changed', state)
    }
    const logIn = (e) => {
        e.preventDefault()
        axios.post("https://dummyjson.com/auth/login", data)
            .then((resp) => {
                setUser(resp.data)
                resp.status == 200 && navigate('/products')
            })
    }
    // logIn();
    return (
        <div>
            <form onSubmit={logIn}>
                <label htmlFor='userName'>User Name :</label>
                <input type='text' value={state.userName} name='userName' id='userName' onChange={handleChange} />
                <label htmlFor='password'>Password :</label>
                <input type='text' value={state.password} name='password' id='password' onChange={handleChange} />
                <input type='submit' />
            </form>
        </div>
    )
}

import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router";

import { register, loginUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    const users = JSON.parse(localStorage.getItem("profile"));

    const handleRegister = (e) => {
        e.preventDefault()
        if (name && email && password) {
            dispatch(register({ name, password, email }));
            navigate('/home')
        }

        setName('')
        setEmail('')
        setPassword('')
    }

    const handleLogin = (e) => {
        e.preventDefault()
        // const validate = user.map((data) => data.email)
        if (name && email && password) {
            const user = JSON.parse(localStorage.getItem('profile'))

            const newLogin = user.find((data) => data.email === email)
            console.log('user', newLogin.email)

            if (newLogin.email === email) {
                dispatch(loginUser({ name, email, password }));
                navigate('/home')
            }
        }


    }

    useEffect(() => {
        if (user) navigate('/home')
    }, [user])

    return (
        <div>
            {/* <p className='text-center text-4xl m-8 capitalize font-serif text-blue-500'> you are logged in as tosin</p> : */}

            <section className='flex flex-col items-center justify-center '>
                <div className='flex space-x-4'>

                    <h1 className='text-3xl font-semibold'>Login /</h1>

                    <h1 className='text-3xl font-semibold'>Register</h1>
                </div>
                <form >

                    <input type="text" placeholder="name"
                        className='input'
                        onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="email"
                        className='input'
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password"
                        className='input'
                        onChange={(e) => setPassword(e.target.value)} />

                    <div className='flex items-center justify-center p-2'>
                        <input type="submit"
                            className='input-btn '
                            onClick={handleLogin}
                            value="Login" /><input
                            onClick={handleRegister}
                            type="submit"
                            className='p-4 border-none outline-none rounded-lg shadow w-[100%] bg-orange-600 text-white font-bold text-2xl cursor-pointer m-4 hover:bg-orange-500 ' value="Register" />
                    </div>

                </form>
            </section>

        </div>
    )
}

export default Login

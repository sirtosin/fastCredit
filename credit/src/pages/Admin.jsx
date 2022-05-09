import React, { useState } from 'react'
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        const checkProfile = JSON.parse(localStorage.getItem('profile'))
        if (name === 'admin' && password === 'admin1234') {
            navigate('/dashboard')

        }

    }
    return (
        <div>
           
            <section className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>

                    <h1 className='text-3xl font-semibold'>Admin Login </h1>

                </div>
                <form >

                    <input type="text" placeholder="name"
                        className='input'
                        onChange={(e) => setName(e.target.value)} />
                    <input type="password" placeholder="Password"
                        className='input'
                        onChange={(e) => setPassword(e.target.value)} />

                    <div className='flex items-center justify-center p-2'>
                        <input type="submit"
                            className='input-btn '
                            onClick={handleLogin}
                            value="Login" />

                    </div>

                </form>
            </section>

        </div>
    )
}

export default Login

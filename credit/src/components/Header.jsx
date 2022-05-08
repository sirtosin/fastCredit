import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router";

import { resetUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(resetUser())
        navigate('/')
    }
    return (
        <header className='sticky top-0 left-0 z-50 bg-white shadow p-1  '>
            <nav className='flex items-center justify-between  max-w-7xl  mx-auto'>
             
                    <Link className='m-4 font-extrabold  capitalize p-2 text-zinc-400 font-mono text-md' to='home'>
                        todo app
                    </Link>
                <div>
                    {user ?
                        <Link className='m-4  rounded-lg  p-2' to='/' onClick={handleLogout} >
                            Logout
                        </Link> : <Link className='m-4  rounded-lg  p-2' to='/'>
                            Login
                        </Link> }
                   {!user ? <Link className='m-4  rounded-lg  p-2' to='admin'>
                        Admin
                    </Link> :null}
             </div>

            </nav>
           
        </header>
    )
}

export default Header

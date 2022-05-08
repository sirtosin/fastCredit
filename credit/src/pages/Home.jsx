import React, { useState, useEffect, useContext } from 'react'
import { add } from "../features/todoSlice";
import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router'
const Home = () => {
    const [todo, setTodo] = useState("");
    const [category, setCategory] = useState("");
    const [todos, setTodos] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        e.preventDefault();

        if (todo !== "" && category !== '') {
            dispatch(add({ id: Date.now(), todo, category, isDone: false, user: user.email }))
            setTodos([...todos, { id: Date.now(), todo, category, isDone: false, user:user.email }]);
            setTodo("");
            setCategory("");
        }
    };

 useEffect(() => {
     if (!user) {
         navigate('/')
   }
 }, [user])
 

    return (
        <div>
            {user ?
                <>
                    <h1 className='capitalize text-xl font-bold p-5'>welcome, {user.name}</h1>
            <h3 className="text-3xl text-center my-9 font-bold capitalize text-gray-500">my todo list</h3>
            <input
                className="input"
                type="text"
                placeholder="Enter a Task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <input
                className="input"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <h3 className='bg-gray-600 text-white p-2 rounded w-[100px] text-center font-medium text-md mx-auto cursor-pointer uppercase transition-all duration-75 active:scale-95' onClick={(e) => {
                handleAdd(e);
            }}>add</h3>
            <TodoList
                todos={todos}
                setTodos={setTodos}
                    />
                </>
                :null}
        </div>
    )
}

export default Home

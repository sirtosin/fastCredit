import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { editTodos } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDone } from "react-icons/md";
import moment from 'moment'
const Todo = ({ index, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(todo.todo);
    const [show, setShow] = useState(false)
    const [date, setDate] = useState('')
    const inputRef = useRef(null);
    const dispatch = useDispatch()
    const Id = todo.id
    useEffect(() => {
        inputRef.current?.focus();

    }, [edit]);
    useEffect(() => {
        if (date === moment().format('dddd MMMM D YYYY')) {
            setTodos(todos.filter((todo) => todo.id !== Id));
        }
    }, [date]);

    const handleEdit = (e, id) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
        localStorage.setItem("todos", JSON.stringify(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))));
        console.log('todo', todos)
    };

    const handleDelete = (id) => {
        console.log('new', todos.filter((todo) => todo.id !== id))
        setTodos(todos.filter((todo) => todo.id !== id))
        localStorage.setItem("todos", JSON.stringify(todos.filter((todo) => todo.id !== id)))
        // console.log('new', todos)

    };

    const handleDone = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            ).filter((todo) => todo.id !== id)
        );
        localStorage.setItem("todos", JSON.stringify(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ).filter((todo) => todo.id !== id)))
    };

    const setDeadline = (n) => {
        setDate(moment().add(n, 'day').format('dddd MMMM D  YYYY'))
        setShow(true)
    }

    return (
        <div className="m-4 bg-gray-300 shadow-lg p-4 rounded-lg transition-all duration-75 ease-out hover:scale-105">
            <form
                onSubmit={(e) => handleEdit(e, todo.id)}
                className="flex items-center justify-around "
            >
                {edit ? (
                    <input
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className=" w-[90%] bg-transparent border-none outline-none"
                        ref={inputRef}
                    />
                ) : todo.isDone ? (
                    <p>{todo.todo}</p>
                ) : (
                    <p className="flex-1 p-1 text-lg font-medium capitalize">{todo.todo}</p>
                )}
                <div className="flex space-x-5">
                    <span
                        className="icon"
                        onClick={() => {
                            if (!edit && !todo.isDone) {
                                setEdit(!edit);
                            }
                        }}
                    >
                        <AiFillEdit className="text-yellow-500 font-extrabold cursor-pointer text-xl" />
                    </span>
                    <span className="icon" onClick={() => handleDelete(todo.id)}>
                        <AiFillDelete className="text-red-500 font-extrabold cursor-pointer text-xl" />
                    </span>
                    <span className="icon" onClick={() => handleDone(todo.id)}>
                        <MdDone className="cursor-pointer text-green-500 font-extrabold text-xl" />
                    </span>
                </div>
            </form>

            <h4 className="font-medium text-sm text-gray-500">category: {todo.category}</h4>

            {show ? <small className="text-gray-700 capitalize text-xs opacity-60 font-bold">to be Completed: {date}</small> :
                <>
                    <h6 className="font-medium text-sm text-gray-500 mt-4">select day of completion</h6>
                    <div className="flex flex-wrap space-x-2">
                        <p onClick={() => setDeadline(0)} className="date">sunday</p>
                        <p onClick={() => setDeadline(1)} className="date">monday</p>
                        <p onClick={() => setDeadline(2)} className="date">tuesday</p>
                        <p onClick={() => setDeadline(3)} className="date">wednesday</p>
                        <p onClick={() => setDeadline(4)} className="date">thursday</p>
                        <p onClick={() => setDeadline(5)} className="date">friday</p>
                        <p onClick={() => setDeadline(6)} className="date">saturday</p>
                    </div> </>}
        </div>
    );
};

export default Todo;

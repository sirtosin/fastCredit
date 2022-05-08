import React,{useEffect, useState} from "react";
import Todo from "./Todo";

const TodoList = ({
    todos,
    setTodos,
}) => {

    const mytodos = JSON.parse(localStorage.getItem("todos"));
    const user = JSON.parse(localStorage.getItem("user"));
    const validate = mytodos.map((todo) => todo.user === user.email)
    console.log('tosin', validate)

    return (
        <div>
            {validate && mytodos ? mytodos.length === 0 ? <h4 className="text-xl text-center my-9 font-bold capitalize text-gray-800">no available todo list</h4> : <h2 className="text-xl text-center my-9 font-bold capitalize text-gray-800">Active Tasks</h2> : todos.length === 0 ? <h4 className="text-xl text-center my-9 font-bold capitalize text-gray-800">no available todo list</h4> : <h2 className="text-xl text-center my-9 font-bold capitalize text-gray-800">Active Tasks</h2>}
           
            
            {validate && mytodos ?  mytodos?.map((todo, index) => (
                <Todo
                    index={index}
                    todos={mytodos}
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                />
            )) : todos?.map((todo, index) => (
                <Todo
                    index={index}
                    todos={todos}
                    todo={todo}
                    key={todo.id}
                    setTodos={setTodos}
                />
            )) }
       
        </div>
    );
};

export default TodoList;

import React from 'react'

const Dashboard = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  return (
    <div>
      <h3 className='text-3xl text-center my-9 font-bold capitalize text-gray-500'>users todo list</h3>
      <section>
        {todos ? todos.map((todo) => (

          <article className='w-[300px] h-full bg-white shadow-lg p-6 m-4 rounded-lg transition-all duration-75 ease-out hover:scale-105'>
            <h2 className='text-xs font-medium capitalize text-gray-400'>user: {todo.user}</h2>
            <p className='text-xl font-medium capitalize text-gray-800'>todo item: {todo.todo}</p>
          </article>
        )) : <h3 className='text-3xl text-center my-9 font-bold capitalize text-gray-500'>no list available</h3> }
      </section>

    </div>
  )
}

export default Dashboard

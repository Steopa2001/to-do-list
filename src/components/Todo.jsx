import React from 'react'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-137.5 rounded-xl'>
      
      {/* TITLE and IMAGE */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src="/todo_icon.png" alt="icon-todo" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* INPUT  */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task...'/>
        <button className='cursor-pointer border-none rounded-full bg-orange-600 w-28 h-14 text-white text-lg font-medium'>ADD +</button>
      </div>

    </div>
  )
}

export default Todo

import React from 'react'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-137.5 rounded-xl'>
      
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src="/todo_icon.png" alt="icon-todo" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>
    </div>
  )
}

export default Todo

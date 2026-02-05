import React from 'react'

const TodoItems = ({todo, remove, onToggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer' onClick={onToggle}>
        <img
          className="w-7"
          src={todo.completed ? "/tick.png" : "/not_tick.png"}
          alt="status"
        />
           <p
          className={`ml-4 text-[17px] ${
            todo.completed ? "line-through text-slate-400" : "text-slate-700"
          }`}
        >
          {todo.text}
        </p>
      </div>

      <img className='w-3.5 cursor-pointer' src="/delete.png" alt="delete-icon" onClick={remove}/>
    </div>
  )
} 

export default TodoItems

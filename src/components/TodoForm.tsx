"use client";
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import TodoList from './TodoList';
import{useDispatch} from 'react-redux';
import toast from 'react-hot-toast';
import { addTodo } from '@/store/todoSlice';



const TodoForm = () => {
     const dispatch = useDispatch()
     const [todo, setTodo] = useState('')
   
       const handleTodo = ( e: React.MouseEvent<HTMLFormElement, MouseEvent>
         ) =>{
           e.preventDefault()
       if(todo === ""){
         toast.error('Please write your todo!')
        
       } else {
         dispatch(addTodo({_id:Math.random().toString(),todo:
            todo}))
         toast.success("Todo added successfully!")
         setTodo("");
       }
       };
  return (
    <div>
      {/* Todo Form */}
      <form onSubmit={handleTodo} className='flex  items-center gap-4 h-10 md:h-14 relative'>
        <input type="text"
          placeholder='Enter your todo...'
          className='lg:flex-1 h-full border-[1px]  border-green-600 bg-transparent pl-4 pr-6 placeholder:text-gray-400 text-base placeholder:text-sm tracking-wide rounded-md
     outline-none hover:border-blue-400 duration-150'
          value={todo}
          onChange={(e) => setTodo(e.target.value)} />
        {todo && <MdClose
         onClick={()=>setTodo("")}
         className='absolute top-4 lg:top-5 text-lg right-28 md:right-32 hover:text-red-600 cursor-pointer duration-200 ' />}
        <button type='submit' className='h-full border-[1px] border-green-600 
     px-2 rounded-md hover:text-red-700 uppercase duration-200 text-sm md:text-base'>AddTodo</button>
      </form>
      {/* TodoList */}
      <TodoList/>
    </div>
  )
}

export default TodoForm;









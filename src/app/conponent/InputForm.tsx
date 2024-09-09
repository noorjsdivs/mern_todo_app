"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todo/todoSlice';
import TodoList from './TodoList';

const InputForm = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] =useState("")


    const handleTodo =( e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>{
        e.preventDefault();
        if(todo === ""){
            toast.error("Please write your todo!");
            
        }else{
            dispatch(addTodo({_id:Math.random().toString(), todo:todo}))
            toast.success("Todo added successfully!")
            setTodo("")
        }
    }
   
    
  return (
    <div>
        <form
            onClick={handleTodo}
            className='flex items-center gap-4 h-10 md:12 relative'>
            <input 
              type="text" 
              placeholder='Enter yout todo.........'
              className='flex-1 h-full border-[1px] border-r-gray-600 bg-transparent pl-4 pr-6 rounded-md
               text-base outline-none tracking-wide hover:border-green-500 focus-visible:border-green-500 duration-200 '
               value={todo}
               onChange={(e) =>setTodo (e.target.value)}/>
               {todo && (
                   <MdClose onClick={()=>setTodo(" ")} className='absolute top-3 text-lg right-32 hover:text-red-600 cursor-pointer duration-200'/>
               )}
            <button type='submit' className='h-full border-[1px] px-2 rounded-md hover:text-orange-700 uppercase text-sm md:text-base duration-200'>Add todo</button>
        </form>
        <TodoList/>
    </div>
  )
}

export default InputForm
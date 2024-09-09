import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoState } from '../../../type';
import TodoItem from './TodoItem';
import { motion } from "framer-motion"
import { removeTodo } from '../todo/todoSlice';
import toast from 'react-hot-toast';

const TodoList = () => {
    const dispatch =useDispatch()
    const {todoList}=useSelector((state:TodoState)=>state?.todo)
    const [showRemove, setShowRemoce] =useState(false);
    
  return (
    <div className='flex flex-col gap-4 mt-2 p-4 border border-gray-600 rounded-md'>
        {todoList?.length > 0 &&(
            <div>
                <ul className='max-h-[300px] border border-slate-600 p-2 shadow-lg
            shadow-gray-800'>
                {todoList?.length > 0 && (
            <>
            {todoList?.map((item)=>(
                <TodoItem key={item?._id} item={item}/>
            ))}
            </>
        )}
            </ul>
            <motion.button
               initial={{y:10, opacity:0}}
               animate={{y:0, opacity:1}}
               transition={{duration:0.5}} 
               onClick={() =>setShowRemoce(true)}
               className='text-sm text-red-200 text-center bg-transparent border-[1px] border-gray-600
                rounded-md px-4 py-3 mt-2 hover:border-red-500 duration-200'>
                Remove todo
            </motion.button>
            </div>
        )}
        {todoList?.length=== 0 &&(
            <p className='text-center text-base font-medium tracking-wide'>
                Your list is Empty!
            </p>
        )}
            {showRemove &&(
                <div className='w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                    px-8 py-4 bg-bodyColor shadow-todoShadow rounded-md'>
                        <p className='text-base lg:text-xl text-center font-medium text-red-500'>
                            Are you sure to {" "}
                            <span className='font-semibold underline underline-offset-2 decoration-[1px]'>Remove</span>
                            {" "} all the todos</p>
                            <div className='flex items-center justify-center gap-4 mt-4'>
                                <button 
                                  onClick={()=> setShowRemoce(false)}
                                  className='px-6 py-2 text-base text-red-100 hover:text-red-500 
                                 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500
                                  duration-300 rounded-md'> 
                                    No
                                </button>
                                <button 
                                 onClick={() =>{
                                    dispatch(
                                        removeTodo(),
                                        toast.success("All todo removed Successfully!"),
                                        setShowRemoce(false)
                                    );
                                 }} 
                                 className='px-6 py-2 text-base text-red-100 hover:text-red-500 
                                 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500
                                  duration-300 rounded-md'>
                                    Yes
                                </button>
                            </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default TodoList
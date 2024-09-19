"use client"
import { addTodo, deleteTodo, resetToDo } from '@/redux/slice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import Link from 'next/link';

const TodoMiddle = () => {
    const addDispatch = useDispatch()
    const [todo,setTodo] = useState("")
    const id = uuidv4(); 
    const submitHandeler = ()=>{
        addDispatch(addTodo({
            id:id,
            todo:todo
        }))

        setTodo("")
    }

    // remove todo handeler
    const removeTodo = useDispatch()
    // reset todo list 
    const emptyTodo = useDispatch()


    const todoData = useSelector((item)=>item?.userTodo?.todo)
    console.log(todoData)
  return (
    <div>
        <div className="content max-w-xl  mx-auto my-8">
            <div className="header flex gap-4 justify-between items-center ">
                <div onClick={submitHandeler} className="button w-[30%] px-2 ">
                    <button  className="py-2 w-full rounded-md bg-indigo-700 mx-4">Add to do</button>
                </div>
                <div className="input w-[70%]">
                    <input value={todo} onChange={(e)=>setTodo(e.target.value)} className="w-full text-black px-4 font-serif py-2 rounded-md outline-none border-none" type="text" />
                </div>
            </div>
            {
             todoData.length > 0 ?  
            <div className="main-area">
                <div className="title text-center mt-[50px] mb-[30px]">
                    <p className=" font-semibold text-xl">Latest 10 item</p>
                </div>
                <div className="content-body border p-4 flex flex-col ">
                    {
                      todoData?.slice(0,10).map((item)=>
                         <div key={item?.id} className="main bg-gray-900 px-2 my-2 rounded-md py-2">
                             <div className="all-content">
                                <ul className=" list-decimal">
                                    <li className=" flex items-center justify-between">
                                        <div className="text-area">
                                            <p>{item?.todo}</p>
                                        </div>
                                        <div className="icon-area flex gap-4">
                                           <div className="del cursor-pointer">
                                             <FaEdit className=" text-xl" />
                                           </div>
                                           <div className="del cursor-pointer">
                                             <FaRegEye className=" text-xl" />
                                           </div>
                                           <div onClick={()=>removeTodo(deleteTodo({
                                             id:item?.id
                                           }))}  className="del cursor-pointer">
                                             <MdDelete className="text-red-600 text-xl" />
                                           </div>
                                        </div>
                                    </li>
                               </ul>
                             </div>
                         </div>
                      )  
                    }
                </div>
                <div onClick={()=>emptyTodo(resetToDo())} className="refresh bg-indigo-700 my-4 flex justify-center">
                    <button  className="  px-4 py-2 flex items-center gap-2 ">
                       <FiRefreshCcw className="" />
                       <p>Refrsh list</p>
                    </button>
                </div>
                <div className="all-todos text-center text-indigo-700">
                    <Link href="/all-todos">All todos</Link>
                </div>
            </div> :
            <div className="text-center my-[50px]">
                No Todos
            </div>
            }
        </div>
    </div>
  )
}

export default TodoMiddle
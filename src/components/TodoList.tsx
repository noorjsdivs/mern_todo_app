
'use client'
import { motion } from 'framer-motion';
import { removeTodo } from "@/store/todoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from './TodoItem';


const TodoList = () => {


     const dispatch = useDispatch();
     //@ts-ignore
     const { todoList } = useSelector((state) => state.todo);
     const [showRemove, setShowRemove] = useState(false);

     return (
          <div className='flex flex-col gap-4 mt-2 p-4 border border-gray-600 rounded-md'>
               {todoList?.length > 0 && (
                    <div>
                         <ul className='max-h-[300px] border border-slate-500 py-6 px-6 shadow-lg shadow-gray-600 flex flex-col gap-4'>
                              {todoList?.map((item: any) => (
                                   <TodoItem key={item._id} item={item} />
                              ))}
                         </ul>
                         <motion.button
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5 }}
                              onClick={() => setShowRemove(true)}
                              className='text-sm text-red-600 text-center bg-transparent border-[1px] border-blue-500 rounded-md px-4 py-3 mt-2 hover:border-yellow-500 duration-200'
                         >
                              Remove Todo
                         </motion.button>
                    </div>
               )}

               {todoList?.length === 0 && (
                    <p className='text-center text-base text-yellow-600 font-medium tracking-wide'>
                         Your todo list is Empty!
                    </p>
               )}

               {showRemove && (
                    <div className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60">
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor shadow-todoShadow rounded-md">
                              <p className="text-base lg:text-xl text-center font-medium text-yellow-600">
                                   Are you sure to <span className="font-semibold underline underline-offset-2 decoration-[1px]">remove </span>
                                   all the todo
                              </p>
                              <div className="flex items-center justify-center gap-5 mt-5">
                                   <button
                                        onClick={() => setShowRemove(false)}
                                        className="px-6 py-2 text-base text-red-500 hover:text-green-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-green-500 duration-300 rounded-md"
                                   >
                                        No
                                   </button>
                                   <button
                                        onClick={() => {
                                             dispatch(removeTodo());
                                             toast.success('All to do removed successfully!');
                                             setShowRemove(false);
                                        }}
                                        className="px-6 py-2 text-base text-orange-500 hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300 rounded-md"
                                   >
                                        Yes
                                   </button>
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default TodoList;
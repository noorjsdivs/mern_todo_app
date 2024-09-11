
import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { allReset, deleteTodo } from '@/store/todoSlice';
import toast, { Toaster } from 'react-hot-toast';
import { State } from '@/type';

const TodoList = () => {
      const todoList = useSelector((state: State) => state?.todo?.todoList);
      const dispatch = useDispatch()
      const [showRemove, setShowRemove] = useState(false)

      return (
            <div className='border border-gray-500 px-5 py-2 mt-6 relative'>
                  <div>
                        {todoList.map((item) => (
                              <div key={item?._id}>
                                    <div>
                                          <div
                                                className='flex mt-4 mb-4 items-center justify-between text-green-600 py-2 px-4 border border-gray-500 border-l-8 border-l-green-600 hover:border-l-8 hover:border-l-orange-600 hover:border hover:border-orange-400 duration-300 cursor-pointer'
                                          >
                                                <span>{item.todo}</span>
                                                <RiDeleteBinLine size={20} onClick={() => dispatch(deleteTodo(item?._id), toast.success("Deleted successfully!"))} className='hover:text-red-500 cursor-pointer' />
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>


                  {todoList?.length === 0 && (
                        <div className='h-12 px-6 rounded'>
                              <h1 className='text-center  text-xl'>
                                    Your todo list is Empty!
                              </h1>
                        </div>
                  )}

                  <div
                        onClick={() => setShowRemove(true)}
                        className={`border border-y-gray-500 w-40 mt-5 mb-4 h-10 mx-auto flex cursor-pointer duration-300 
                                     hover:border hover:border-red-600`}
                  >
                        <button
                              className={`text-center mx-auto text-orange-400`}
                        >
                              Delete All Todo
                        </button>
                  </div>

                  {showRemove && (
                        <div  className='absolute   top-50 lg:left-40 left-[150px] mx-auto border border-blue-400 lg:pb-0 pb-6 lg:h-28 lg:w-[380px] bg-bodyColors rounded '>
                              <h1 className='text-xl text-center mt-3 p-2
                                text-blue-500 font-medium'>Are you sure to remove all the <><br /></> todos?</h1>
                              <div className='flex gap-4 mt-4 lg:ml-24 ml-14'>
                                    <button onClick={() => setShowRemove(false)} className='border border-gray-500 py-2 px-6 duration-300 text-orange-400 hover:border-green-500'>No</button>
                                    <button onClick={() => dispatch(allReset(), setShowRemove(false), toast.success("All todo deleted successfully!"))} className='border border-gray-500 py-2 px-6 hover:border-red-500 hover:text-red-500 duration-300 text-blue-400'>Yes</button>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default TodoList;

"use client"
import { addTodo, deleteTodo, resetTodo } from "@/store/todoSlice";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { motion } from 'framer-motion';

const TodoForm = () => {

      const dispatch = useDispatch()
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [number, setNumber] = useState("")

      const todoData = {
            id: Date.now(),
            name,
            email,
            number
      }

      const handlaSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
            e.preventDefault()
            if (!name || !email || !number) {
                  toast.error("Please fill out all fields!");
                  return
            }
            dispatch(addTodo(todoData))
            toast.success("Todo added successfully!");
            setName("");
            setEmail("");
            setNumber("")
      }

      //@ts-ignore
      const selector = useSelector((state) => state?.todo.todo)

      return (
            <div className="bg-red-100 py-10">
                  <h1 className="text-3xl sm:text-4xl font-medium text-center text-gray-800">Todo Application</h1>
                  <div className="flex flex-col lg:flex-row justify-between gap-4 h-auto lg:h-[530px] px-4 lg:px-20">
                        {/* Form Section Start*/}
                        <form onSubmit={handlaSubmit} className="items-start mt-10 lg:w-1/2 w-full">
                              <div className="flex flex-col gap-5 relative">
                                    <input
                                          placeholder="Your Name..."
                                          type="text"
                                          name="name"
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                          className="py-3 outline-none w-full lg:w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    {name && (
                                          <IoMdClose onClick={() => setName("")} className="absolute top-4 right-4 lg:right-16 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                                    )}
                                    <input
                                          type="email"
                                          name="email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          placeholder="Enter Your Email..."
                                          className="py-3 outline-none w-full lg:w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    {email && (
                                          <IoMdClose onClick={() => setEmail("")} className="absolute top-[85px] right-4 lg:right-16 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                                    )}
                                    <input
                                          placeholder="Phone Number..."
                                          value={number}
                                          name="number"
                                          onChange={(e) => setNumber(e.target.value)}
                                          type="text"
                                          className="py-3 outline-none w-full lg:w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    {number && (
                                          <IoMdClose onClick={() => setNumber("")} className="absolute top-[152px] right-4 lg:right-16 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                                    )}

                                    {/* Add Todo Button */}
                                    <button
                                          className={`py-3 rounded-full text-xl mt-2 w-full lg:w-[500px] ${!name || !email || !number
                                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                : "bg-green-300 text-gray-800"
                                                }`}
                                          type="submit"
                                          disabled={!name || !email || !number}
                                    >
                                          Add Todo
                                    </button>
                              </div>
                              <Link href={"/"}>
                                    <h1 className="bg-orange-400 text-center mt-6 py-1 w-32 lg:w-36 justify-center ml-24 lg:ml-44 text-white">
                                          Go To Home
                                    </h1>
                              </Link>
                        </form>
                        {/* Form Section End */}



                        {/* Todo List Section Start */}
                        <div className="mt-6 lg:w-1/2 w-full">
                              <div>
                                    {selector.map((item: any) => (
                                          <motion.div
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                key={item.id}
                                                className="border py-2 px-4 border-l-8 border-green-500 flex flex-wrap justify-between gap-2 mt-4">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                      <h1 className="text-[16px] font-medium text-green-600">Name: </h1>
                                                      <h1 className="text-gray-700 text-[14px]">{item?.name}</h1>
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                      <h1 className="text-[16px] font-medium text-green-600">Email: </h1>
                                                      <h1 className="text-gray-700 text-[14px]">{item?.email}</h1>
                                                </div>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                      <h1 className="text-[16px] font-medium text-green-600">Phone: </h1>
                                                      <h1 className="text-gray-700 text-[14px]">{item?.number}</h1>
                                                </div>
                                                <MdDelete onClick={() => dispatch(deleteTodo(item?.id), toast.success("Todo deleted successfully!"))} size={20} className="text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                                          </motion.div>
                                    ))}
                              </div>


                              {/* All Todo Deleted Start */}
                              {selector.length > 0 && (
                                    <div className="mt-6">
                                          <button onClick={() => dispatch(resetTodo(), toast.success("All todo deleted successfully!"))} className="bg-green-500 hover:bg-red-500 duration-300 text-white py-2 px-4 lg:ml-48 rounded w-full lg:w-auto">
                                                Delete All Todos
                                          </button>
                                    </div>
                              )}
                              {/* All Todo End */}


                              {/* Empty Todo List Start */}
                              {selector?.length === 0 && (
                                    <div className="mt-24 h-12 px-6 rounded">
                                          <h1 className="text-center animate-bounce text-gray-700 lg:text-3xl text-xl">
                                                Your todo list is Empty!
                                          </h1>
                                    </div>
                              )}
                              {/* Empty Todo List End */}

                        </div>
                        {/* Todo List Section End */}

                  </div>
            </div>
      );
};

export default TodoForm;

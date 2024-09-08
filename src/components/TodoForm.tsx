"use client"
import { addTodo, deleteTodo } from "@/store/todoSlice";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const TodoForm = () => {

      const dispatch = useDispatch()
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [number, setNumber] = useState("")

      const todoData = {
            //@ts-ignore
            id : Date.row(),
            name,
            email,
            number
      }

      const handlaSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
            e.preventDefault()
            dispatch(addTodo(todoData))
            e.preventDefault();
            if (!name || !email || !number) {
                  toast.error("Please write your todo!");
                  return
            } else {
                  toast.success("Todo added successfully!");
                  setName("");
                  setEmail("");
                  setNumber("")
            }
      }

      // const handleDelete = (_id: string) => {
      //       dispatch(deleteTodo(_id));
      //       toast.success("Todo deleted successfully!");
      // }

      //@ts-ignore
      const selector = useSelector((state) => state?.todo.todo)

      return (
            <div className="bg-red-100 py-10">
                  <h1 className="text-4xl font-medium text-center text-gray-800"> Todo Application</h1>
                  <div className="flex justify-between gap-4 h-[530px] px-20">
                        <form onSubmit={handlaSubmit} className="items-start mt-10 w-1/2">
                              <div className="flex flex-col gap-5 relative" >
                                    <input
                                          placeholder="Your Name..."
                                          type="text"
                                          name="name"
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                          className="py-3 outline-none w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    {
                                          name && (
                                                <IoMdClose onClick={() => setName("")} className="absolute top-4 right-16 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                                          )
                                    }
                                    <input
                                          type="email"
                                          name="email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          placeholder="Enter Your Email..."
                                          className="py-3 outline-none w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    {
                                          email && (
                                                <IoMdClose className="absolute top-[85px] right-16 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                                          )
                                    }
                                    <input
                                          placeholder="Phone Number..."
                                          value={number}
                                          name="number"
                                          onChange={(e) => setNumber(e.target.value)}
                                          type="text"
                                          className="py-3 outline-none w-[500px] pr-10 pl-4 rounded placeholder:text-gray-700"
                                    />
                                    {
                                          number && (
                                                <IoMdClose className="absolute top-[152px] right-16 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                                          )
                                    }

                                    {/* Add Todo Button */}
                                    <button
                                          className={`py-3 rounded-full text-xl mt-2  w-[500px] ${!name || !email || !number
                                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                : "bg-green-300 text-gray-800"
                                                }`}
                                          type="submit"
                                          disabled={!name || !email || !number}
                                    >
                                          Add Todo
                                    </button>

                              </div>
                              <Link href={"/"}><h1 className="bg-orange-400 text-center mt-6 py-1 w-36 justify-center lg:ml-44 text-white">Go To Home</h1></Link>
                        </form>
                        <div className="mt-6 w-1/2">
                              <div>
                                    {
                                          selector.map((item: any) => (
                                                <div>
                                                      <div className="border border-gray-400 py-2 px-4 flex items-center justify-between gap-2 mt-4">
                                                            <div className="flex items-center gap-2">
                                                                  <h1 className="text-[16px] font-medium text-green-600">Name : </h1>
                                                                  <h1 className="text-gray-700 text-[14px]">{item?.name}</h1>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                  <h1 className="text-[16px] font-medium text-green-600">Email : </h1>
                                                                  <h1 className="text-gray-700 text-[14px]">{item?.email}</h1>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                  <h1 className="text-[16px] font-medium text-green-600">Phone : </h1>
                                                                  <h1 className="text-gray-700 text-[14px]">{item?.number}</h1>
                                                            </div>
                                                            <MdDelete onClick={() => dispatch(deleteTodo(item?._id), toast.success("Deleted successfully!"))} size={25} className="lg:ml-10 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                                                      </div>
                                                </div>

                                          ))
                                    }
                                    {/* All Todo Deleted */}
                                    <div className="ml-48">
                                          {selector.length > 0 && (
                                                <div className="mt-4">
                                                      <button className="bg-green-500 hover:bg-red-500 duration-300 text-white py-2 px-4 rounded">All Todo Deleted</button>
                                                </div>
                                          )}
                                    </div>

                              </div>
                              {/* Your todo list is Empty! */}
                              <div className=" mt-24">
                                    {selector?.length === 0 && (
                                          <div className='h-12 px-6 rounded'>
                                                <h1 className='text-center btn-shine text-3xl'>
                                                      Your todo list is Empty!
                                                </h1>
                                          </div>
                                    )}
                              </div>
                        </div>
                  </div>


            </div>

      );
};

export default TodoForm;
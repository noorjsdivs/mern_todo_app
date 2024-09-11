"use client"

import { addTodo } from "@/store/todoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const TodoForm = () => {

      const dispatch = useDispatch();

      const [todo, setTodo] = useState("");

      const handleTdodo = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
            e.preventDefault();
            if (todo === "") {
                  toast.error("Please write your todo!");
            } else {

                  dispatch(addTodo({ _id: Math.random().toString(), todo: todo }));

                  toast.success("Todo added successfully!");
                  setTodo("");
            }
      };

      return (
            <div>
            

                  {/* Todo Form */}
                  <form onSubmit={handleTdodo} className="lg:flex md:flex flex items-center gap-4 relative">
                        <input
                              placeholder="Enter your todo..."
                              type="text"
                              value={todo}
                              onChange={(e) => setTodo(e.target.value)}
                              className="lg:flex-1 lg:w-0 w-48 md:flex-1 bg-transparent border border-gray-500 outline-none pr-10 pl-6 py-3 placeholder-gray-400 text-sm placeholder-text-sm rounded-md tracking-wide hover:border-green-800 hover:border-2 focus-visible:border-green-800 duration-300"
                        />
                        {todo && (
                              <RxCross2 onClick={() => setTodo("")} className="absolute  lg:top-[14px] lg:right-[115px] md:right-32 md:top-4 right-32 top-4 hover:text-red-500" />
                        )}
                        <button className="border border-gray-500 py-3 lg:text-xs text-sm px-4 rounded-md hover:text-orange-500">
                              Add Todo
                        </button>
                  </form>
                  {/* Todo List */}
                  <TodoList />
                  <div className="p-1">
                        <h1 className="text-center text-[16px] tracking-wide mt-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia delectus necessitatibus <br /> facilis similique, alias ratione aspernatur qui optio? Est.</h1>
                        <div className="flex items-center gap-4 justify-center mt-4">
                              <span className="bg-gray-700 h-7 w-7 rounded-full flex text-gray-300 items-center justify-center hover:border-gray-300 hover:border duration-300 cursor-pointer">
                                    <FaGithub />
                              </span>

                              <span className="bg-gray-700 h-7 w-7 rounded-full flex text-gray-300 items-center justify-center hover:border-gray-300 hover:border duration-300 cursor-pointer">
                                    <FaYoutube />
                              </span>
                              <span className="bg-gray-700 h-7 w-7 rounded-full flex text-gray-300 items-center justify-center hover:border-gray-300 hover:border duration-300 cursor-pointer">
                                    <FaLinkedin />

                              </span>
                              <span className="bg-gray-700 h-7 w-7 rounded-full flex text-gray-300 items-center justify-center hover:border-gray-300 hover:border duration-300 cursor-pointer">
                                    <FaFacebook />
                              </span>
                              <span className="bg-gray-700 h-7 w-7 rounded-full flex text-gray-300 items-center justify-center hover:border-gray-300 hover:border duration-300 cursor-pointer">
                                    <FaSquareInstagram />
                              </span>
                              <span className="bg-gray-700 h-7 w-7 rounded-full flex text-gray-300 items-center justify-center hover:border-gray-300 hover:border duration-300 cursor-pointer">
                                    <FaXTwitter />
                              </span>
                              <span className="bg-gray-700 h-7 w-7 rounded-full flex text-gray-300 items-center justify-center hover:border-gray-300 hover:border duration-300 cursor-pointer">
                                    <MdEmail />
                              </span>
                              <span className="bg-gray-700 h-7 w-7 rounded-full flex text-gray-300 items-center justify-center hover:border-gray-300 hover:border duration-300 cursor-pointer">
                                    <SiMinutemailer />
                              </span>
                        </div>
                  </div>
            </div>
      );
};

export default TodoForm;

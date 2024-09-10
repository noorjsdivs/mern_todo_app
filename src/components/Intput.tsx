"use client";
import { addTodo } from "@/app/redux/todoSlicer";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

const Intput = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const formHandle = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("sorry! please input todo!");
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), todo: todo }));
      setTodo("");
      toast.success("Todo added successfully!");
    }
  };

  return (
    <div className="w-full h-full bg-purple-600 text-white/85 p-4  rounded-lg">
      <div className=" flex justify-center items-center">
        <form onSubmit={formHandle} action="#" className="relative">
          <input
            type="text"
            className="w-72 p-2 outline-none rounded-md text-black border-2 border-solid border-yellow-300 hover:border-blue-900 duration-300"
            placeholder="Input your todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {todo && (
            <IoIosClose
              onClick={() => setTodo("")}
              className="text-black absolute top-2 right-28 text-3xl hover:text-red-700 duration-300 hover:scale-125 cursor-pointer"
            />
          )}
          <button
            type="submit"
            className="ml-2 px-4 py-2 border border-solid border-gray-400 rounded-md hover:border-gray-500 duration-300 hover:bg-slate-200 hover:text-black"
          >
            Add Todo
          </button>
        </form>
      </div>
      <TodoList />
    </div>
  );
};

export default Intput;

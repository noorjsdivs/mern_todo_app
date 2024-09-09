"use client";
import { addTodo } from "@/app/redux/todoSlicer";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";

const Intput = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState();

  const formHandle = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (todoValue === "") {
      alert("sorry! please input todo");
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), todo: todoValue }));
    }
  };
  return (
    <div className="w-full h-full bg-purple-600 text-white/85 p-4 flex justify-center items-center rounded-lg">
      <form onSubmit={formHandle} action="#" className="relative">
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
          className="p-2 outline-none rounded-md text-black"
          type="text"
        />
        {todoValue && (
          <IoIosClose
            onClick={() => setTodoValue("")}
            className="text-black absolute top-2 right-28 text-3xl hover:text-red-700 duration-300 hover:scale-125 cursor-pointer"
          />
        )}
        <button
          type="submit"
          className="ml-2 px-4 py-2 border border-solid border-gray-400 rounded-md hover:border-gray-500 hover:text-white duration-300"
        >
          Add Todo
        </button>
      </form>
      <TodoList />
    </div>
  );
};

export default Intput;

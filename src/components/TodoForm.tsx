"use client";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/app/redux/TodoSlice";
import toast from "react-hot-toast";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("Please, enter todo.!");
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), todo }));
      toast.success("Todo added.!");
      setTodo("");
    }
  };

  return (
    <div className="w-[600px] bg-gradient-to-r from-cyan-100 via-blue-100 to-blue-300 rounded-md px-10 h-96 mt-0 md:-mt-60">
      <div className="relative w-[400px] mt-10">
        <form >
          <input
            type="text"
            placeholder="Enter todo..."
            className="outline-none px-7 border border-green-800 rounded-l-md h-10 w-full"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          {todo && (
            <span className="absolute top-3 right-2 text-gray-500 hover:text-red-500 cursor-pointer">
              <MdClose onClick={() => setTodo("")} />
            </span>
          )}
          <button
            className="bg-green-800 text-white h-10 w-32 rounded-r-md absolute top-0 -right-32 flex items-center justify-center gap-2"
            type="submit"
            onClick={handleAddTodo}
          >
            <FaPlus /> Add Todo
          </button>
        </form>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoForm;

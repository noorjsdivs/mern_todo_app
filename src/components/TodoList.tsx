"use client";

import { removeTodo } from "@/app/redux/todoSlicer";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../type";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispitch = useDispatch();
  const { todoList } = useSelector((state: State) => state?.todo);
  const pathName = usePathname();
  const [removeAllTodo, setRemoveAllTodo] = useState(false);

  return (
    <div>
      <div
        className={` ${
          pathName === "/"
            ? todoList?.length > 5 && "h-80 overflow-scroll"
            : "h-auto"
        } `}
      >
        <div>
          {todoList?.map((item) => (
            <TodoItem key={item?._id} item={item} />
          ))}
        </div>
      </div>
      {removeAllTodo && (
        <div className="absolute inset-y-0 mt-10">
          <div className=" bg-teal-700 rounded-lg shadow-lg drop-shadow-lg shadow-slate-400 p-4">
            <h1 className="text-xl">Do you want to remove all Todo?</h1>
            <div className="flex justify-around items-center my-3">
              <button
                onClick={() => {
                  alert("Thank you for make sure!");
                  setRemoveAllTodo(false);
                }}
                className="px-4 py-2 border-[1px] border-solid border-purple-500 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  dispitch(removeTodo());
                  setRemoveAllTodo(false);
                }}
                className="px-4 py-2 border-[1px] border-solid border-purple-500 rounded-lg"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      {todoList?.length > 0 ? (
        <button
          onClick={() => setRemoveAllTodo(true)}
          className="bg-blue-800 text-white/90 px-4 py-2 rounded-lg hover:shadow-sm hover:shadow-slate-400 duration-300 opacity-80 
      hover:opacity-100 hover:skew-x-3 w-44 mx-auto mt-3"
        >
          Remove All Todo
        </button>
      ) : (
        <div
          className="max-w-96 mx-auto bg-green-950 text-white/90 p-3 my-2 rounded-lg 
      hover:shadow-md hover:shadow-slate-400 duration-300 opacity-60 
      hover:opacity-100 text-center"
        >
          Your todo is empty !
        </div>
      )}
    </div>
  );
};

export default TodoList;

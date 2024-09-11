"use client";

import { removeTodo } from "@/app/redux/todoSlicer";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../type";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispitch = useDispatch();
  const { todoList } = useSelector((state: State) => state?.todo);
  const pathName = usePathname();

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
      {todoList?.length > 0 ? (
        <button
          onClick={() => dispitch(removeTodo())}
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

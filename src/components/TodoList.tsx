"use client";

import { removeTodo } from "@/app/redux/todoSlicer";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../type";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispitch = useDispatch();
  const { todoList } = useSelector((state: State) => state?.todo);

  return (
    <div>
      <div>
        {todoList?.map((item) => (
          <TodoItem key={item?._id} item={item} />
        ))}
      </div>
      {todoList?.length > 0 && (
        <button
          onClick={() => dispitch(removeTodo())}
          className="bg-blue-800 px-4 py-2 rounded-lg hover:shadow-sm hover:shadow-slate-400 duration-300 opacity-80 
      hover:opacity-100 hover:skew-x-3 w-44 mx-auto mt-3"
        >
          Remove All Todo
        </button>
      )}
    </div>
  );
};

export default TodoList;

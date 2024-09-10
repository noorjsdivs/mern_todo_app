"use client";

import { useSelector } from "react-redux";
import { State } from "../../type";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useSelector((state: State) => state?.todo);

  return (
    <div>
      {todoList?.map((item) => (
        <TodoItem key={item?._id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;

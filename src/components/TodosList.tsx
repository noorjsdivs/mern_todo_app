"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllTodo, removeTodo, TodoState } from "@/store/todos/todoSlice";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

interface stateType {
  todos: TodoState;
}
const TodosList: React.FC = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((state: stateType) => state.todos);
  function deleteAll() {
    toast.success("Todo Added", {
      autoClose: 1500,
      position: "bottom-right",
    });
    dispatch(deleteAllTodo());
  }

  // Handle deleting a todo
  const handleDelete = (id: string) => {
    toast.error("Todo Removed", {
      autoClose: 2000,
      position: "bottom-right",
    });
    dispatch(removeTodo(id));
  };

  return (
    <div className="container flex flex-col justify-center items-center  mx-auto ">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Todos List</h1>

      {/* Grid container for todos */}
      <div className="flex flex-col p-5 gap-3 max-h-96 overflow-y-auto overflow-x-hidden">
        {allTodos.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No todos available.
          </p>
        ) : (
          allTodos.map((item) => (
            <div
              key={item.id}
              className="p-4 flex w-[500px] justify-between  items-center bg-white shadow-lg  rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Todo Content */}

              <h2 className="text-xl font-semibold w-52 overflow-auto">
                {item.text}
              </h2>

              <div className="flex justify-center items-center gap-4">
                <p className="text-gray-500">
                  {new Date(item.time).toLocaleString()}
                </p>

                {/* Action Button */}
                <Button
                  onClick={() => handleDelete(item.id)}
                  className="hover:bg-gray-300 duration-300 bg-white text-black "
                >
                  <FaTrash className="text-xl" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      {allTodos.length > 0 && (
        <Button
          onClick={deleteAll}
          variant={"destructive"}
          className="w-24 my-5 "
        >
          Delete All
        </Button>
      )}
    </div>
  );
};

export default TodosList;

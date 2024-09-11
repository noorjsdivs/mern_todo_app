"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, TodoState } from "@/store/todos/todoSlice";
import { toast } from "react-toastify";

interface stateType {
  todos: TodoState;
}
const TodosList: React.FC = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector((state: stateType) => state.todos);

  // Handle deleting a todo
  const handleDelete = (id: string) => {
    toast.error("Todo Removed", {
      autoClose: 2000,
    });
    dispatch(removeTodo(id));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Todos List</h1>

      {/* Grid container for todos */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allTodos.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No todos available.
          </p>
        ) : (
          allTodos.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Todo Content */}
              <div className="mb-3">
                <h2 className="text-xl font-semibold">{item.text}</h2>
                <p className="text-gray-500">
                  {new Date(item.time).toLocaleString()}
                </p>
              </div>

              {/* Action Button */}
              <Button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white w-full"
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodosList;

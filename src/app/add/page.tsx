"use client";
import TodoList from "@/components/TodoList";
import { add } from "@/feature/todo/todoConfigure";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Add = () => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");

  const dispatch = useDispatch();

  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputTitle(value);
  };

  const handleInputDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputDescription(value);
  };

  const getInputTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTitle && inputDescription) {
      dispatch(add({ title: inputTitle, description: inputDescription }));
      setInputTitle("");
      setInputDescription("");
      Swal.fire({
        position: 'top-end',
        title: "Added your todo!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
      })
    }
  };

  return (
    <div className="px-4 md:px-0 py-5">
      <form
        onSubmit={getInputTodo}
        className="border border-black mt-10 p-2 md:w-1/2 mx-auto flex flex-col lg:flex-row justify-between lg:items-end gap-5 rounded bg-black"
      >
        <div className="flex-1 flex flex-col gap-3">
          <label htmlFor="title" className="font-bold text-white">
            Title:
          </label>

          <input
            id="title"
            onChange={handleInputTitle}
            className="outline-none border border-black rounded w-full px-3 py-2 text-black"
            type="text"
            placeholder="What's the title."
            value={inputTitle}
            required
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <label htmlFor="description" className="font-bold text-white">
            Description:
          </label>
          <input
            id="description"
            onChange={handleInputDescription}
            className="outline-none border border-black rounded w-full px-3 py-2 text-black"
            type="text"
            placeholder="What's the description."
            value={inputDescription}
            required
          />
        </div>

        <button
          type="submit"
          className="px-3 py-2 text-black bg-yellow-500 font-bold duration-300 hover:bg-gray-50 rounded"
        >
          Add Todo
        </button>
      </form>

      <TodoList />
    </div>
  );
};

export default Add;

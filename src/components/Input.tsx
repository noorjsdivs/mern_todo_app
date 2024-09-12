"use client";
import React, { useState } from "react";
import TodoList from "./TodoList";
import Button from "./Button";
import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlices";

const input = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleTodo = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("Please enter your Todo!");
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), todo: todo }));
      toast.success("Todo added successfully!");
      setTodo("");
    }
  };
  return (
    <div className="">
      <form
        onSubmit={handleTodo}
        className="flex w-full  gap-4 h-10 md:h-12 relative"
      >
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter your todo..."
          className=" flex-1 h-full border-[1px]  border-gray-600 bg-transparent pl-4 pr-8 placeholder:text-black/60 text-base placeholder:text-sm tracking-wide rounded-md outline-none hover:border-sky-600 focus-visible:border-sky-600 duration-300"
        />
        {todo && (
          <MdClose
            onClick={() => setTodo("")}
            className=" absolute top-3 right-2 text-lg hover:text-red-600 md:right-28 md:top-3.5 cursor-pointer duration-200"
          />
        )}
        <Button />
      </form>
      <TodoList />
    </div>
  );
};

export default input;

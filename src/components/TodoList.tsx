"use client";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../../Type";
import { removeTodo } from "@/redux/todoSlices";
import toast from "react-hot-toast";

const TodoList = () => {
  const { todoList } = useSelector((state: state) => state?.todo);
  const dispatch = useDispatch();
  const [showRemove, setShowRemove] = useState(false);
  return (
    <div className="flex w-full flex-col gap-4 mt-4  border-gray-300 rounded-md ">
      {todoList?.length > 0 && (
        <div className="">
          <ul className="max-h-72 overflow-x-auto border border-slate-600 p-2 shadow-lg shadow-gray-800 gap-4">
            {todoList?.length > 0 && (
              <>
                {todoList?.map((item, index) => (
                  <TodoItem key={index} item={item} />
                ))}
              </>
            )}
          </ul>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowRemove(true)}
            className="text-sm text-black text-center bg-transparent border-[1px] border-gray-600 rounded-md px-4 py-3 mt-4  duration-200 hover:text-red-600 font-semibold"
          >
            Remove All Todo
          </motion.button>
        </div>
      )}
      {todoList?.length === 0 && (
        <p className="text-center text-base text-black font-medium tracking-wide border-red-500/60 p-4 border-2 rounded-md">
          Your todo is Empty !
        </p>
      )}
      {showRemove && (
        <div className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor rounded-lg  bg-[#9DB5B2]">
            <p className="text-base md:text-xl text-center font-medium text-black">
              Are you sure to{" "}
              <span className="underline text-xl cursor-pointer font-semibold underline-offset-2  decoration-[1px]">
                remove
              </span>{" "}
              all todos
            </p>
            <div className="flex mt-8  justify-around items-center">
              <button
                onClick={() => setShowRemove(false)}
                className="px-6 py-2 text-base text-black hover:text-red-600 font-semibold bg-transparent border-[1px] border-gray-500 duration-300 rounded-md"
              >
                No
              </button>
              <button
                onClick={() => {
                  dispatch(
                    removeTodo(),
                    toast.success("All todo remove successfully!"),
                    setShowRemove(false)
                  );
                }}
                className="px-6 py-2 text-base text-black hover:text-red-600 font-semibold bg-transparent border-[1px] border-gray-500 duration-300 rounded-md"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;

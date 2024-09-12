"use client";
import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteTodo } from "@/redux/todoSlices";
import toast from "react-hot-toast";

interface Item {
  item: {
    todo: string;
    _id: string;
  };
}

const TodoItem = ({ item }: Item) => {
  const dispatch = useDispatch();
  return (
    <motion.li className=" border-green-900 w-full font-medium border-[1px] px-2 py-1 cursor-pointer flex items-center justify-between  mt-2">
      <p className="overflow-hidden flex-1"> {item?.todo}</p>
      <p className="hover:text-red-500 duration-300">
        <MdDelete
          onClick={() => {
            dispatch(
              deleteTodo(item._id),
              toast.success("Toast Delete Successfully!")
            );
          }}
        />
      </p>
    </motion.li>
  );
};

export default TodoItem;

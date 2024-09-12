"use client"
import React from "react";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "@/redux/todoSlice";
import toast from "react-hot-toast";
interface Item {
    item: {
        _id: string;
        todo: string;
    };
}

const TodoItem = ({ item }: Item) => {
    const dispatch = useDispatch();
    return (
        <motion.li
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ y: { type: "spring", stiffness: 120 } }}
            className="flex justify-between  border border-l-green-500 border-l-8 border-gray-400 p-1 rounded-md text-gray-300 text-xs md:text-base lg:text-sm px-2 items-center "
        >
            <p>{item?.todo}</p>
            <MdDelete onClick={() => {
                dispatch(deleteTodo(item?._id), toast.success("Delete successfull"))
            }} className="hover:text-red-400 hover:cursor-pointer text-black/80 " />
        </motion.li>
    );
};

export default TodoItem;

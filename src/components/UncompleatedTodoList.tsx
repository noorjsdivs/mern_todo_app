import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { compleateTodo, remove } from "@/feature/todo/todoConfigure";
import Swal from "sweetalert2";
import { BiCheck } from "react-icons/bi";

interface TodoType {
  title: string;
  description: string;
  compleated: boolean;
}

interface props {
  todos: TodoType[];
}

const UncompleatedTodoList = ({ todos }: props) => {
  const dispatch = useDispatch();
  const deleteTodo = (index: number) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          icon: "success",
          color: "#000",
          showConfirmButton: false,
          timer: 1000,
        });
        dispatch(remove({ index: index }));
      }
    });
  };

  const addCompleated = (title: string) => {
    dispatch(compleateTodo({ title }));
  };

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo, index: number) => (
        <motion.div
          initial={{ y: -20, scale: 1.1, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          key={todo.title}
          className="px-2 py-3 bg-black text-white rounded flex items-center justify-between gap-5"
        >
          <div>
            <h1 className="text-wrap font-bold text-base text-yellow-400">
              {todo.title}
            </h1>
            <p className="text-wrap text-xs tracking-wider">{todo.description} </p>
          </div>
          <div className="flex items-center justify-center gap-5">
          <BiCheck
              onClick={() => addCompleated(todo?.title)}
              size={20}
              className="cursor-pointer hover:text-yellow-400 duration-300 w-6 h-6 rounded-full font-bold"
            />
            <RiDeleteBin6Line
              onClick={() => deleteTodo(index)}
              size={20}
              className="cursor-pointer hover:text-yellow-400 duration-300 w-6 h-6 rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UncompleatedTodoList;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { remove } from "@/feature/todo/todoConfigure";
import { AnimatePresence, motion } from "framer-motion";
import Swal from "sweetalert2";

interface StateType {
  todo: { todoList: TodoType[] };
}

interface TodoType {
  title: string;
  description: string;
  compleated: boolean;
}

const TodoList = () => {
  const todos = useSelector((state: StateType) => state?.todo.todoList);
  const dispatch = useDispatch();

  const deleteTodo = (index: number | string) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#000",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
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

  const exitAnimation = {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div>
      {todos.length > 0 && (
        <AnimatePresence>
          <motion.div
            initial={{ y: -20, scale: 1.01, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={exitAnimation}
            className="border border-black mt-10 p-2 md:w-1/2 max-h-60 mx-auto flex flex-col gap-2 rounded overflow-auto"
          >
            {todos.map((todo, index: number) => (
              <motion.div
                initial={{ y: -20, scale: 1.1, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={exitAnimation}
                key={todo.title}
                className="px-2 py-3 bg-black text-white rounded flex items-center justify-between gap-2"
              >
                <div>
                  <h1 className="text-wrap font-bold text-base text-yellow-400">
                    {todo.title}
                  </h1>
                  <p className="text-wrap text-sm">{todo.description}</p>
                </div>
                <div className="flex items-center justify-center">
                  <RiDeleteBin6Line
                    onClick={() => deleteTodo(index)}
                    size={20}
                    className="cursor-pointer hover:text-yellow-400 duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          {todos.length > 1 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={exitAnimation}
              className="flex justify-center mt-5"
            >
              <button
                onClick={() => deleteTodo("all")}
                className="px-4 py-2 bg-black text-yellow-400 hover:text-white rounded duration-200 cursor-pointer"
              >
                Delete All Todo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default TodoList;

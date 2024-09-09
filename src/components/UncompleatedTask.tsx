import React from "react";
import { motion } from "framer-motion";
import UncompleatedTodoList from "./UncompleatedTodoList";

interface TodoType {
  title: string;
  description: string;
  compleated: boolean;
}

interface props {
  todos: TodoType[];
}

const UncompleatedTask = ({ todos }: props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {todos.length > 0 ? (
          <UncompleatedTodoList todos={todos} />
        ) : (
          <p className="font-bold text-center py-5 text-gray-400">
            You have no any task!
          </p>
        )}
      </motion.div>
    </>
  );
};

export default UncompleatedTask;

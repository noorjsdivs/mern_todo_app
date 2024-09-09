import React from "react";
import { motion } from "framer-motion";
import CompleatedTodoList from "./CompleatedTodoList";
interface TodoType {
  title: string;
  description: string;
  compleated: boolean;
}

interface props {
  todos: TodoType[];
}

const CompleatedTask = ({ todos }: props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {todos.length > 0 ? (
        <CompleatedTodoList todos={todos} />
      ) : (
        <p className="font-bold text-center py-5 text-gray-400">
          You did not compleated any todo task!
        </p>
      )}
    </motion.div>
  );
};

export default CompleatedTask;

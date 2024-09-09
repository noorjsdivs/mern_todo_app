"use client";
import CompleatedTask from "@/components/CompleatedTask";
import EmptyTodo from "@/components/EmptyTodo";
import UncompleatedTask from "@/components/UncompleatedTask";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

interface TodoType {
  title: string;
  description: string;
  compleated: boolean;
}

interface StateType {
  todo: { todoList: TodoType[] };
}

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const todos = useSelector((state: StateType) => state?.todo.todoList);
  const tabs = ["To Do", "Compleated"];

  const uncompleatedList = todos.filter((item: TodoType) => {
    if (!item.compleated) {
      return item;
    }
  });
  const compleatedList = todos.filter((item: TodoType) => {
    if (item.compleated) {
      return item;
    }
  });


  return (
    <main className="flex justify-center p-5">
      {todos.length > 0 && (
        <div className="w-full  md:w-1/2 border border-black p-4 mt-10 rounded flex flex-col gap-2">
          <ul className="flex">
            {tabs.map((item, index) => (
              <li
              key={index}
                onClick={() => setSelectedTab(index)}
                className={`px-2 py-1 cursor-pointer font-bold border-b-4 hover:bg-gray-100 rounded ${
                  selectedTab === index
                    ? "border-yellow-400 text-yellow-500"
                    : "border-white"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {selectedTab === 0 ? (
              <UncompleatedTask todos={uncompleatedList} />
            ) : (
              <CompleatedTask todos={compleatedList} />
            )}
          </AnimatePresence>
        </div>
      )}

      {todos.length > 0 || (
        <EmptyTodo/>
      )}
    </main>
  );
}

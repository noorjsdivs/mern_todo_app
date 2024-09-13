"use client";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../.next/type";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todoList } = useSelector((state: State) => state?.todo);
    console.log(todoList);
    return (
        <div className="border p-2 mt-2    rounded-md">

            {todoList?.length > 0 && (
                <ul className="max-h-[300px] flex flex-col gap-2 border-slate-200 shadow-lg shadow-white p-2 overflow-hidden overflow-y-scroll">
                    {todoList?.length > 0 && (
                        <>
                            {todoList?.map((item) => (
                                <TodoItem key={item?._id} item={item} />
                            ))}
                        </>
                    )}
                </ul>
            )}
            {todoList?.length === 0 && (
                <h3 className="text-yellow-200 text-lg text-center">
                    Your todo list Empty!!
                </h3>
            )}
        </div>
    );
};

export default TodoList;

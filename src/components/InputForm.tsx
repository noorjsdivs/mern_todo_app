"use client";
import { addTodo } from "@/redux/todoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeTodo } from "@/redux/todoSlice";
import TodoList from "./TodoList";

const InputForm = () => {
    const [todo, setTodo] = useState("");
    const [showRemoved, setRemoved] = useState(false);


    const dispatch = useDispatch()

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (todo === "") {
            toast.error("add todo")
        } else {
            dispatch(addTodo({ _id: Math.random().toString(), todo: todo }));
            setTodo("")
            toast.success("add success")
        }
    }
    return (
        <div className="bg-slate-500 p-4 md:p-10 lg:p-6 rounded-md mx-4">
            {/* todo form */}
            <form onSubmit={handleSubmit} className="flex relative items-center h-10 gap-3">

                <input
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    placeholder="Enter your todo"
                    type="text"
                    className="h-full text-black/50   border-2 outline-none rounded-md flex-1 text-base placeholder:text-xs focus-visible:border-green-500 hover:border-green-500 duration-3000 pl-2"
                />
                {todo && <IoIosClose onClick={() => setTodo("")} className=" absolute right-36 text-black/50  text-xl font-semibold hover:cursor-pointer hover:text-red-500 duration-300" />}

                <button className="bg-green-600 h-full px-4 py-2 text-xs md:text-base uppercase text-white rounded-md">
                    Add Todo
                </button>

            </form>
            {/* todo list */}
            <div className="flex flex-col gap-4 ">
                <TodoList />
            </div>
            <div className="relative">
                <button onClick={() => setRemoved(dispatch(removeTodo))} className="  text-slate-300  hover:bg-slate-200 hover:text-red-600 duration-300 border p-2 shadow-inner shadow-red-200 rounded-md border-red-500 mt-2">
                    Remove todo
                </button>
                {showRemoved && <div className=" border bg-black/50 text-yellow-500 shadow-md shadow-red-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-lg mt-2">
                    <p>Are you sure want to remove</p>
                    <div className="flex justify-center gap-6">
                        <button onClick={() => setRemoved(false)} className="bg-red-600 px-2  border border-red-500 rounded-md">No</button>
                        <button onClick={() => setRemoved(true)} className="bg-green-600 px-2  rounded-md">Yes</button>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default InputForm;

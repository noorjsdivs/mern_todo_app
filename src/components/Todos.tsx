"use client";

import { deleteTodo, resetTodo } from "@/app/redux/TodoSlice";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const { todo } = useSelector((state: any) => state?.todo);
  const dispatch = useDispatch();
  const currentDate: Date = new Date();

  const formattedDate: string = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  const deleteAllTodo = () => {
    window.confirm("Are you sure to delete all todos...");
    dispatch(resetTodo())
  }
  return (
    <>
      {todo &&
        todo?.map((item: string, index: number) => (
          <div
            key={index}
            className="bg-primaryColor w-full h-60 p-3 rounded-md flex flex-col justify-between "
          >
            <div className="flex flex-col gap-3 text-white">
              <p className="text-sm">Task {index}</p>
              <p className="text-xs">{item?.todo}</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3 text-white">
                <MdOutlineDateRange /> {formattedDate}
              </span>
              <div className="w-full h-2 border-t-2 border-dotted border-gray-500"></div>
              <div className="flex items-center justify-between">
                <button className="bg-green-200 text-green-600 rounded-md px-2 py-1 font-semibold">
                  Uncompleted
                </button>
                <div className="flex items-center gap-2 text-white text-xl">
                  <span>
                    <FaRegStar />
                  </span>
                  <span
                    className="hover:text-red-500 hover:scale-110 cursor-pointer"
                    onClick={() => dispatch(deleteTodo(item?._id))}
                  >
                    <RiDeleteBinLine />
                  </span>
                  <span>
                    <BiDotsVerticalRounded />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      {todo?.length > 1 && (
        <button onClick={deleteAllTodo}
          className="bg-TextColor h-10 w-60 rounded-md uppercase text-white font-semibold"
          
        >
          delete all todo
        </button>
      )}
    </>
  );
};

export default Todos;

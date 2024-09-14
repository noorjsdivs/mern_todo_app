"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodo } from "@/app/redux/TodoSlice";

const LeftSideNav = () => {
  const [todo, setTodo] = useState("");

  const pathname = usePathname();
  const dispatch = useDispatch();

  const menus = [
    { title: "all tasks", link: "/" },
    { title: "Important tasks", link: "/important-tasks" },
    { title: "completed tasks", link: "/completed-tasks" },
    { title: "uncompleted tasks", link: "/uncompleted-tasks" },
  ];

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (todo?.length === 0) {
      toast.error("Enter Todo.!");
    } else {
      dispatch(addTodo({_id:Math.random().toString(), todo}));
      toast.success("Todo added.!");
      setTodo("");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 w-full py-10 pl-3 bg-slate-100 h-screen">
        <p className="text-2xl font-semibold uppercase text-center text-gray-600">
          to-do list
        </p>
        <div className="w-full mx-auto p-5">
          <label
            htmlFor="my_modal_7"
            className=" btn bg-primaryColor/90 hover:bg-primaryColor hover:scale-110 px-10 py-3 -ml-3 rounded-md text-white capitalize font-semibold w-full"
          >
            add new task
          </label>
        </div>
        <div className="mt-5 flex flex-col gap-3 px-0">
          {menus?.map((menu, index) => (
            <Link
              href={menu?.link}
              key={index}
              className={`text-md font-semibold capitalize px-3 py-2 ${
                pathname === menu.link
                  ? "bg-TextColor/10 text-TextColor border-r-4 border-r-TextColor"
                  : "text-gray-600"
              }`}
            >
              {menu?.title}
            </Link>
          ))}
        </div>
      </div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box relative ">
          <h3 className="text-lg font-bold text-center w-[420px] mx-auto">
            Add Todo!
          </h3>
          <form onClick={handleSubmit}>
            <div className="relative flex items-center justify-between gap-3">
              <input
                type="text"
                placeholder="Add todo name..."
                className="outline-none border border-primaryColor rounded-md h-14 w-96 mt-3 px-5 ml-4 pe-10"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}required
              />
              <div className="h-8 -mt-3 border-primaryColor">
                <LocalizationProvider dateAdapter={AdapterDayjs} required>
                  <DatePicker />
                </LocalizationProvider>
              </div>

              {todo && (
                <span
                  className="inline-block text-md hover:text-red-400 absolute top-8 right-48 cursor-pointer"
                  onClick={() => setTodo("")}
                >
                  <MdClose />
                </span>
              )}
            </div>
            {/* <textarea
              className="textarea border-primaryColor mt-2 w-[440px] mx-4 outline-none"
              placeholder="Todo description..."required
            ></textarea> */}
            <div className="w-[440px] mx-auto ml-4 hover:scale-110 transition-all duration-300">
              <button
                className="bg-primaryColor px-3 h-10 rounded-md mt-5 font-semibold text-white capitalize w-full"
                type="submit"
              >
                add
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default LeftSideNav;

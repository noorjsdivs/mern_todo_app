import Footer from "@/components/Footer";
import TodoList from "@/components/TodoList";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-slate-100 via-slate-300  to-slate-300 flex flex-col py-24 items-center px-2">
      <div className="w-full max-w-screen-md bg-[#A2C5AC]  border-sky-300 border  p-4 md:p-20 lg:-p-10 rounded-md flex flex-col gap-5 ">
        <p className="text-xl font-semibold underline underline-offset-2 decoration-[1px]">
          Todo Page
        </p>
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default page;

import React from "react";
import Todos from "./todos";
import TodosList from "./TodosList";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <>
      <div className="flex  justify-center my-14 items-center">
        <Todos />{" "}
      </div>
      <div>
        <TodosList />
      </div>
      <ToastContainer />
    </>
  );
};

export default page;

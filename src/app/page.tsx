import React from "react";
import Todos from "../components/todos";
import TodosList from "../components/TodosList";
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

import React from "react";
import Todos from "./todos";
import TodosList from "./TodosList";

const page = () => {
  return (
    <>
      <div className="flex  justify-center my-14 items-center">
        <Todos />{" "}
      </div>
      <div>
        <TodosList />
      </div>
    </>
  );
};

export default page;

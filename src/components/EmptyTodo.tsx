import Link from 'next/link';
import React from 'react';

const EmptyTodo = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-5xl text-gray-300 font-bold text-center">
            Your Todo List Is Empty
          </p>
          <p className="text-center mt-5 text-gray-400">
            please add todo from{" "}
            <Link href={"/add"} className="text-blue-600 cursor-pointer">
              Add Todo
            </Link>
          </p>
        </div>
  );
};

export default EmptyTodo;
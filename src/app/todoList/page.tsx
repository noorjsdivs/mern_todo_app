"use client";
import Container from "@/components/Container";
import TodoList from "@/components/TodoList";
import { useSelector } from "react-redux";

const todoListPage = () => {
  const { todo } = useSelector((state) => state?.todo);
  console.log("todooo", todo);
  return (
    <Container>
      <div className="w-[1200px] bg-gradient-to-l from-green-900 via-green-400 to-blue-400 rounded-md  h-[500px] mt-0 md:-mt-60">
        <h2 className="text-xl font-bold text-white text-center mt-4">Todo Lists...</h2>
        <div className=" mt-5 -ml-10">
          <TodoList />
        </div>
      </div>
    </Container>
  );
};

export default todoListPage;

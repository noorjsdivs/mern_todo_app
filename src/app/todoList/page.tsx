"use client";
import Container from "@/components/Container";
import TodoList from "@/components/TodoList";
import { useSelector } from "react-redux";

const todoListPage = () => {
  const { todo } = useSelector((state) => state?.todo);
  console.log("todooo", todo);
  return (
    <Container>
      <div className="w-[600px] bg-gradient-to-r from-cyan-100 via-blue-100 to-blue-300 rounded-md px-10 h-96 mt-0 md:-mt-60">
        <h2 className="text-xl font-semibold text-center mt-4">Todo Lists...</h2>
        <div className="relative w-[600px] mt-5 -ml-10">
          <TodoList />
        </div>
      </div>
    </Container>
  );
};

export default todoListPage;

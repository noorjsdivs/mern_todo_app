"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTodo } from "@/store/todos/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Home() {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  // const todos = useSelector(state => state.todos)
  function handleText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  function handleTime(e: React.ChangeEvent<HTMLInputElement>) {
    setTime(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addTodo({ text, time }));
  }
  return (
    <div className="flex justify-center h-[60vh] items-center">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-5 max-w-[800px]">
          <Input
            onChange={handleText}
            type="text"
            value={text}
            placeholder="Type your Todo"
            className=" "
          />
          <Input
            onChange={handleTime}
            value={time}
            type="datetime-local"
            className=""
          />
          <Button type="submit" className="w-20">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;

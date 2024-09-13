"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTodo } from "@/store/todos/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

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
    toast.success("Todo Added", {
      autoClose: 1500,
      position: "bottom-right",
    });

    setText("");
    setTime('')
  }


  return (
    <form className="flex" onSubmit={handleSubmit}>
      <Input
        required
        onChange={handleText}
        type="text"
        value={text}
        placeholder="Type your Todo"
        className="w-52 "
      />
      <Input
        required
        onChange={handleTime}
        value={time}
        type="datetime-local"
        className="w-52 mx-5"
      />
      <div className=" flex gap-3">
        <Button type="submit" className="w-20">
          Submit
        </Button>
       
      </div>
    </form>
  );
}

export default Home;

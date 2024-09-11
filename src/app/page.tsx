import TodoForm from "@/components/ui/TodoForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home | Todo Application",
  description: "A todo app for learning purposes",
};


export default function HomePage() {

  return (


    <div className="w-full min-h-screen bg-gradient-to-br p-2 from-slate-100 flex flex-col to-slate-300 py-10">
      <div className="max-w-screen-md mx-auto bg-bodyColors w-full lg:p-6 md:p-16 p-4  rounded-md">
        <TodoForm />
      </div>
    </div>

  );
}

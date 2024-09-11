import Footer from "@/components/Footer";
import TodoList from "@/components/TodoList";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-purple-100 ">
      <div className=" max-w-screen-lg bg-pink-900 rounded-xl mx-auto flex flex-col pt-8 items-center mt-10 border-2 border-solid border-white/90">
        <h1 className="text-xl px-3 py-1 bg-purple-800 text-white/90">
          Your Todo list is here..
        </h1>
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default page;

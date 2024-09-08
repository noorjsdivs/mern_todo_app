import { IoIosClose } from "react-icons/io";

const Intput = () => {
  return (
    <div className="w-full h-full bg-purple-600 text-white/85 p-4 flex justify-center items-center rounded-lg">
      <form action="#" className="relative">
        <input className="p-2 outline-none rounded-md text-black" type="text" />
        <IoIosClose className="text-black absolute top-2 right-28 text-3xl" />
        <button className="ml-2 px-4 py-2 border border-solid border-gray-400 rounded-md">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Intput;

const Intput = () => {
  return (
    <div className="w-full h-full bg-purple-600 text-white/85 p-4 flex justify-center items-center rounded-lg">
      <form action="#">
        <input className="p-2 outline-none rounded-md text-black" type="text" />
        <button className="ml-2 px-4 py-2 border border-solid border-gray-400 rounded-md">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Intput;

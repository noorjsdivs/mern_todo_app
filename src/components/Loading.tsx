const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-3">
      <div className="w-16 h-16 bg-transparent rounded-full border-[10px] border-solid border-x-purple-700 border-y-green-700 animate-spin" />
      <h1 className="text-6xl">Todo app is loading</h1>
    </div>
  );
};

export default Loading;

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-3">
      <div className="w-8 h-8 bg-transparent rounded-full border-4 border-solid border-x-purple-700 border-y-green-700 animate-spin" />
      <h1 className="text-4xl">Todo app is loading</h1>
    </div>
  );
};

export default Loading;

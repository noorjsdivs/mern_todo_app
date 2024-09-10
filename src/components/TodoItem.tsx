interface Item {
  item: {
    todo: string;
    _id: string;
  };
}

const TodoItem = ({ item }: Item) => {
  return (
    <div>
      <ul className="bg-green-950 text-white/90 p-3 my-2 rounded-lg hover:shadow-md hover:shadow-slate-300 duration-300 opacity-80 hover:opacity-100">
        <li>{item?.todo}</li>
      </ul>
    </div>
  );
};

export default TodoItem;

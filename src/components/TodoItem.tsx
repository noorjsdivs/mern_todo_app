import { deleteTodo } from "@/app/redux/todoSlicer";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

interface Item {
  item: {
    todo: string;
    _id: string;
  };
}

const TodoItem = ({ item }: Item) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col ">
      <ul
        className="bg-green-950 text-white/90 p-3 my-1 rounded-lg 
      hover:shadow-md hover:shadow-slate-400 duration-300 opacity-80 
      hover:opacity-100 hover:skew-x-6 hover:translate-x-2 
      flex justify-between items-center"
      >
        <li>{item?.todo}</li>
        <MdDelete
          onClick={() => dispatch(deleteTodo(item?._id))}
          className="text-lg hover:text-red-600 cursor-pointer"
        />
      </ul>
    </div>
  );
};

export default TodoItem;

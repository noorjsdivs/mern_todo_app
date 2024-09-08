import { useDispatch } from "react-redux";
import { Todo } from "../../type";
import { deleteTodo } from "./Redux/todoSlice";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";



interface Props{
item:Todo
};
const TodoList = ({ item }:Props) => {


  
  const dispatch = useDispatch();



  return (

      <div className="flex justify-between mt-6">
        <h1 className="text-sm font-bold text-black">{item?.name}</h1>
        <h1 className="text-sm font-bold text-black">{item?.email}</h1>
        <h1 className="text-sm font-bold text-black">{item.number}</h1>
        <h1 className="text-sm font-bold text-black">{item.roll}</h1>
        <h1
          onClick={() => dispatch(deleteTodo(item.id), toast.success("todo deleted success"))}
          className="text-2xl font-bold text-black hover:text-red-600 duration-500"
        >
          {" "}
          <MdDelete />{" "}
        </h1>
      </div>
   
  );
};

export default TodoList;
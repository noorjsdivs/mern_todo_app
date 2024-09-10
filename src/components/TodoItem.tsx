import { deleteTodo } from "@/app/redux/todoSlicer";
import { motion } from "framer-motion";
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
      <motion.ul
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-green-950 text-white/90 p-3 my-1 rounded-lg 
      hover:shadow-md hover:shadow-slate-400 duration-300 opacity-80 
      hover:opacity-100 hover:skew-x-6 hover:translate-x-2 
      flex justify-between items-center group relative"
      >
        <motion.li
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {item?.todo}
        </motion.li>
        <span className="absolute top-0 left-0 w-[3px] h-0 bg-yellow-600 group-hover:h-full duration-500" />
        <MdDelete
          onClick={() => dispatch(deleteTodo(item?._id))}
          className="text-lg hover:text-red-600 cursor-pointer"
        />
      </motion.ul>
    </div>
  );
};

export default TodoItem;

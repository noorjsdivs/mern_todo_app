'use client'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '@/store/todoSlice';
import {motion} from 'framer-motion';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
interface Item{
     item:{
          todo:string;
          _id:string;
     }
}

const TodoItem = ({item}: Item) => {
     const dispatch = useDispatch();
  return (
     
    <motion.li
     initial={{y:10, opacity:0}} 
     animate={{y:0, opacity:1}}
     transition={{y:{type:'spring', stiffness:120}}
}
     className='border-l-green-500 border-green-900
     w-full font-medium border-[1px] border-l-[6px] px-2 py-1  cursor-pointer flex items-center justify-between'>
     {item?.todo}
     <MdDelete onClick={()=>{
          dispatch(deleteTodo(item?._id),
           toast.success('Todo deleted successfully!'))}}
            className='text-lg hover:text-red-600 duration-200'/>
    </motion.li>
  );
};

export default TodoItem;

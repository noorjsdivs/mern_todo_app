import { deleteTodo, resetTodo } from "@/app/redux/TodoSlice";
import { emptyImage } from "@/assets";
import Image from "next/image";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { todo } = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      {todo?.length >= 1 ? (
        <div>
          <div className="mt-5 overflow-auto h-60">
            <div className="p-5">
              <div className="overflow-hidden w-full rounded-md">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Tasks</th>
                      <th className="flex items-center justify-end">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {todo?.map((item: any) => (
                      <tr className="bg-base-200 border border-b border-gray-300">
                        <>
                          <td className="font-semibold">{item?.todo}</td>
                          <td className="flex items-center justify-end">
                            <span className="hover:text-red-500 cursor-pointer text-lg">
                              <AiOutlineDelete
                                onClick={() => {
                                  dispatch(deleteTodo(item?._id));
                                  toast.success("Todo deleted.!");
                                }}
                              />
                            </span>
                          </td>
                        </>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-32 mx-auto mb-3 ">
            <button
              className="bg-red-500 text-white px-3 w-32 py-2 rounded-md flex items-center justify-between mb-4"
              onClick={() => dispatch(resetTodo())}
            >
              Reset Todo <AiOutlineDelete />
            </button>
          </div>
        </div>
      )
    : <div><p className="text-center mt-10 font-semibold">Todo is empty.!</p> <div>
      <Image src={emptyImage} alt="empty image" className="w-80 mx-auto rounded-md"/></div></div>
    }
    </>
  );
};

export default TodoList;

"use client";
import { deleteFavorite, deleteTodo, resetFavorite } from "@/app/redux/TodoSlice";
import toast from "react-hot-toast";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { favorite } = useSelector((state: any) => state?.todo);
 
  const dispatch = useDispatch();
  const currentDate: Date = new Date();

  const formattedDate: string = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  const handleResetTodo = () => {
    const isConfirm = window.confirm("Are you sure to delete all todos...");
    if (isConfirm) {
      dispatch(resetFavorite());
      toast.success("All favorite todos deleted.!");
    } else toast.error("Action canceled.!");
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
        {" "}
        {favorite ? (
          favorite?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-primaryColor w-full h-60 p-3 rounded-md flex flex-col justify-between "
            >
              <div className="flex flex-col gap-3 text-white">
                <p className="text-sm">Task {index}</p>
                <p className="text-xs">{item?.todo}</p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3 text-white">
                  <MdOutlineDateRange /> {formattedDate}
                </span>
                <div className="w-full h-2 border-t-2 border-dotted border-gray-500"></div>
                <div className="flex items-center justify-between">
                  <button className="bg-green-200 text-green-600 rounded-md px-2 py-1 font-semibold">
                    Uncompleted
                  </button>
                  <div className="flex items-center gap-2 text-white text-xl">
                    <span className="hover:text-red-500 hover:scale-110 cursor-pointer">
                      <FaRegStar />
                    </span>
                    <span
                      className="hover:text-red-500 hover:scale-110 cursor-pointer"
                      onClick={() => dispatch(deleteFavorite(item?._id))}
                    >
                      <RiDeleteBinLine />
                    </span>
                    <span>
                      <BiDotsVerticalRounded />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No task Available.!</div>
        )}
      </div>
      {favorite?.length > 2 && (
        <div className="w-32 mx-auto mt-10">
          <button
            className="bg-red-500 text-white h-8 w-32 rounded-md"
            onClick={handleResetTodo}
          >
            Delete all todo
          </button>
        </div>
      )}
    </>
  );
};

export default page;

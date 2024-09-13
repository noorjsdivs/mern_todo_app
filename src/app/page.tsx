import { BiDotsVerticalRounded } from "react-icons/bi";
import { CiCircleList } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoGrid } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { PiBellRingingFill } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Home() {
  const currentDate: Date = new Date();

  const formattedDate: string = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  return (
    <div className="bg-gray-200 w-full px-5 h-screen">
      <div className="flex items-center justify-between py-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search task..."
            className="h-10 w-72 text-gray-500 outline-none  rounded-md  px-4"
          />
          <span className="absolute top-3 right-2 text-gray-600 inline-block">
            <FiSearch />
          </span>
        </div>
        <div className="font-semibold">{formattedDate}</div>
        <div className="flex items-center gap-6">
          <span className="text-primaryColor text-2xl">
            <PiBellRingingFill />
          </span>
          <button className="bg-primaryColor text-white font-semibold text-md capitalize px-6 py-2 rounded-md">
            add new task
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-500">
          All tasks (3 tasks)
        </h2>
      </div>
      <div className="flex items-start gap-3 mt-5 text-primaryColor">
        <span>
          <CiCircleList />
        </span>
        <span>
          <IoGrid />
        </span>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <div className="bg-primaryColor w-full h-60 p-3 rounded-md flex flex-col justify-between ">
          <div className="flex flex-col gap-3 text-white">
            <p className="text-sm">Task 1</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              optio!
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3 text-white">
              <MdOutlineDateRange /> {formattedDate}
            </span>
            <div className="flex items-center justify-between">
              <button className="bg-green-200 text-green-600 rounded-md px-3 py-2 font-semibold">
                Completed
              </button>
              <div className="flex items-center gap-2 text-white text-xl">
                <span>
                  <FaRegStar />
                </span>
                <span>
                  <RiDeleteBinLine />
                </span>
                <span>
                  <BiDotsVerticalRounded />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

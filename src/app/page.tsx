
import Container from "@/components/Container";
import { useTheme } from "@/components/ThemeContext";
import Todos from "@/components/Todos";
// import { BiDotsVerticalRounded } from "react-icons/bi";
import { CiCircleList } from "react-icons/ci";
// import { FaRegStar, FaStar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoGrid } from "react-icons/io5";
// import { MdOutlineDateRange } from "react-icons/md";
import { PiBellRingingFill } from "react-icons/pi";

export default function Home() {
  const currentDate: Date = new Date();

  const formattedDate: string = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <Container>
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
          <div>
            {" "}
            <label
              htmlFor="my_modal_7"
              className=" btn bg-primaryColor/90 hover:bg-primaryColor hover:scale-110 px-5  py-3 -ml-3 rounded-md text-white capitalize font-semibold w-40"
            >
              add new task
            </label>
          </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <Todos />
      </div>
    </Container>
  );
}

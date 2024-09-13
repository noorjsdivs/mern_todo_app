"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideNav = () => {
  const pathname = usePathname();

  const menus = [
    { title: "all tasks", link: "/" },
    { title: "Important tasks", link: "/important-tasks" },
    { title: "completed tasks", link: "/completed-tasks" },
    { title: "uncompleted tasks", link: "/uncompleted-tasks" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full py-10 pl-3 bg-slate-100 h-screen">
      <p className="text-2xl font-semibold uppercase text-center text-gray-600">
        to-do list
      </p>
      <div className="w-full mx-auto p-5">
        <button className="bg-primaryColor px-10 py-3 -ml-3 rounded-md text-white capitalize font-semibold w-full">
          add new task
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-3 px-0">
        {menus?.map((menu, index) => (
          <Link
            href={menu?.link}
            key={index}
            className={`text-md font-semibold capitalize px-3 py-2 ${
              pathname === menu.link
                ? "bg-TextColor/10 text-TextColor border-r-4 border-r-TextColor"
                : "text-gray-600"
            }`}
          >
            {menu?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;

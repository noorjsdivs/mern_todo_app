"use client"
import Link from "next/link";
import { useState } from "react";

const Header = () => {

  const [activeLink, setActiveLink] = useState("/")
  const menus = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "todo list",
      link: "/todoList",
    },
    {
      title: "login",
      link: "/login",
    },
  ];


  return (
    <div
      className="max-w-screen-2xl mx-auto flex flex-col items-center justify-around  py-4 text-black font-semibold text-xl"
    
    >
      <div>
        <h3 className="text-3xl font-extrabold mb-10">Todo App</h3>
      </div>
      <div className="flex items-center gap-1 rounded-md mt-0 ">
        {menus?.map((menu, index) => (
          <Link href={menu?.link} key={index} className="capitalize  text-white " onClick={() => setActiveLink(menu?.link)}>
            <p className={`text-xs flex items-center justify-center gap-1 h-10 w-32 rounded-s-xl rounded-b-xl ${menu?.link === activeLink ? "bg-green-800" : "bg-slate-300 text-black"}`}>{menu?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;

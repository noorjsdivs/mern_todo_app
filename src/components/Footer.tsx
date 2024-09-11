"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerArray = [
    {
      icon: <FaGithub />,
      href: "https://github.com/i-am-sujon-islam",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/md-sujon-islam-ss/",
    },
  ];
  const pathName = usePathname();
  console.log(pathName);
  return (
    <footer className="w-96 lg:w-[560px] mx-auto my-8 text-white/90 ">
      <div>
        <p className="text-sm md:text-md  text-justify tracking-wide my-4">
          I am a web developer with 2+ years of experience in React. I have a
          strong foundation in front-end & back-end development and I am skilled
          creatin user-friendly and responsive web applicitions using React and
          its ecosystem
        </p>{" "}
        <Link
          href={pathName === "/" ? "/todolist" : "/"}
          className="px-2 py-1 border-[1px] border-solid border-yellow-400 rounded-md hover:bg-slate-800 hover:text-white/90 duration-300"
        >
          {pathName === "/" ? "Go to todo list" : "Go to home"}
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 mt-2">
        {footerArray.map((item, index) => (
          <Link
            className="text-3xl text-white/90 rounded-full hover:text-yellow-300 duration-300"
            key={index}
            href={item?.href}
            target="blank"
          >
            {item?.icon}
          </Link>
        ))}
      </div>
      <p className="text-center">All right by md sujon islam</p>
    </footer>
  );
};

export default Footer;

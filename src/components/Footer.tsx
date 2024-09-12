"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const footerArray = [
    { icon: <FaGithub />, href: "https://github.com/mdalihasanriyad" },
    { icon: <FaFacebook />, href: "https://facebook.com/ahriyad.me" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@riyadmemories" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/mdalihasanriyad/",
    },
    { icon: <FaInstagram />, href: "https://www.instagram.com/ahriyad.me" },
  ];
  const pathName = usePathname();
  return (
    <footer>
      <p className="text-base text-center text-black/60">
        I am a web developer with 2+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.
      </p>
      <div className="flex items-center gap-8 justify-center mt-4 ">
        {footerArray?.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            target="blank"
            className="h-10 w-10 rounded-l-full rounded-t-full rounded-r-full bg-gray-200 hover:bg-[#119822] cursor-pointer duration-500 hover:text-white border border-transparent hover:border-gray-500 flex items-center justify-center"
          >
            {item?.icon}
          </Link>
        ))}
      </div>
      <Link
        href={pathName === "/" ? "/todo" : "/"}
        className="text-center w-32 mx-auto text-base flex items-center justify-center mt-4 underline underline-offset-2 decoration-[1px] hover:text-[#119822] duration-300"
      >
        {pathName === "/" ? "todo page" : "back to home"}
      </Link>
    </footer>
  );
};

export default Footer;

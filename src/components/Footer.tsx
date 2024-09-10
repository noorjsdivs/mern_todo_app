import Link from "next/link";
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

  return (
    <footer className="w-96 lg:w-[560px] mx-auto my-8 text-gray-400 ">
      <p className="text-sm  text-justify">
        I am a web developer with 2+ years of experience in React. I have a
        strong foundation in front-end & back-end development and I am skilled
        creatin user-friendly and responsive web applicitions using React and
        its ecosystem
      </p>
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
    </footer>
  );
};

export default Footer;

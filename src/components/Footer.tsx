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
    <footer className="w-full text-gray-400 ">
      <p className="text-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis libero
        eaque officiis. Aperiam nostrum debitis eius, ullam nesciunt ex in sit
        omnis. Ea fugiat commodi quos a aspernatur accusamus sit!
      </p>
      <div className="flex items-center justify-center gap-2 mt-2">
        {footerArray.map((item, index) => (
          <Link key={index} href={item?.href} target="blank">
            {item?.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

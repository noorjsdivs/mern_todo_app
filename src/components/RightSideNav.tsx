"use client";
import { userImg } from "@/assets";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useTheme } from "./ThemeContext";
import Theme from "./Theme";

const RightSideNav = () => {
  const { data: session } = useSession();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex flex-col gap-8 w-full py-10 pl-3 h-screen ${
        theme === "dark" ? "bg-slate-900" : "bg-slate-100"
      }`}
    >
      <div className="flex items-center justify-center gap-3">
        {session?.user ? (
          <>
            <p className="font-semibold">Hi, {session?.user?.name}</p>
            <Image
              src={session?.user?.image || userImg}
              alt="user image"
              className="w-10 h-10 rounded-full inline-block"
              width={500}
              height={500}
            />
          </>
        ) : (
          <>
            <p className="font-semibold">Hi, User</p>
            <Image
              src={userImg}
              alt="user image"
              className="w-10 h-10 rounded-full"
            />
          </>
        )}
      </div>
      {session?.user ? (
        <button
          className="w-full px-3 py-2 border border-primaryColor rounded-md font-semibold "
          onClick={() => signOut()}
        >
          LogOut
        </button>
      ) : (
        <div className="p-5">
          <label
            htmlFor="my_modal_7 p-5"
            onClick={() => signIn()}
            className=" btn bg-primaryColor/90 hover:bg-primaryColor hover:scale-110  py-3  rounded-md text-white capitalize font-semibold w-full "
          >
            Login
          </label>
        </div>
      )}
      <div className="flex items-center justify-evenly  gap-5">
        <p>Theme </p>

        <Theme />
      </div>
      <div>No tasks today...</div>
    </div>
  );
};

export default RightSideNav;

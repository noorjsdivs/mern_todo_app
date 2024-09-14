"use client";
import { userImg } from "@/assets";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const RightSideNav = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-4 px-4 py-10 bg-slate-100 h-screen font-semibold">
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
        <button
          className="w-full px-3 py-2  bg-primaryColor  rounded-md text-white font-semibold "
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
      <div className="flex items-center justify-between">
        <p>Darkmode </p>
        <button>switch</button>
      </div>
      <div>No tasks today...</div>
    </div>
  );
};

export default RightSideNav;

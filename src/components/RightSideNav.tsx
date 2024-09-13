import { userImg } from "@/assets"
import Image from "next/image"

const RightSideNav = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-10">
      <div className="flex items-center justify-center gap-3">
          <p className="font-semibold">Hi, User</p>
          <Image src={userImg} alt="user image" className="w-10 h-10 rounded-full"/>
      </div>
      <div className="flex items-center justify-between">
        <p>Darkmode </p>
        <button>switch</button>
      </div>
      <div>
        No tasks today...
      </div>
    </div>
  )
}

export default RightSideNav
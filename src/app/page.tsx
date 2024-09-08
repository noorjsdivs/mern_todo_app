import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto py-10">
      <div className="flex items-center gap-4 mt-4 justify-between">
        <h1 className="text-4xl font-bold text-amber-600"> Shahin</h1>
        <Link href={"/shahin"}>
          <button className="bg-amber-300 py-2 px-6 text-xl rounded text-gray-700 hover:bg-amber-400 hover:text-white font-medium duration-300">Todo Application</button>
        </Link>
      </div>
      <h1 className="mt-6 tracking-wide text-xl text-gray-700 border-2 border-gray-200 py-4 px-4">A simple Todo application that allows users to add, view, and delete tasks. It includes a responsive form to input task details like name, email, and phone number. Users can manage their tasks efficiently with a clean interface and notifications for successfully! actions.</h1>
    </div>
  );
}

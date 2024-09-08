import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto py-10">
      <div className="flex items-center gap-4 mt-4 justify-between">
        <h1 className="text-3xl font-semibold text-amber-600 uppercase"> Shahin Alom</h1>
        
        <Link href={"/shahin"}>
          <button className="bg-amber-300 py-2 px-6 text-xl rounded text-gray-700 hover:bg-amber-400 hover:text-white font-medium duration-300">Todo Application</button>
        </Link>
      </div>
    </div>
  );
}

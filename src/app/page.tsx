
import Layoyt from "./conponent/Layoyt";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <div className="flex flex-col items-start max-w-2xl mx-auto gap-3">
        <h2 className="text-4xl font-bold underline underline-offset-4 decoration-[1px] text-blue-300 hover:text-blue-500 duration-200 cursor-pointer">
          Todo Application
        </h2>
        <div>
          <p>
            Create you own branch then start making your todo application. Make
            sure to use checkout or switch to move in your branch then start
            working. Make push from your own branch and please do not try to
            push in main branch directly.
          </p>
        </div>
        <div>
          <p className="text-lg font-bold my-3 underline underline-offset-2 decoration-[1px]">
            Functionalities included:
          </p>
          <ul className="flex flex-col text-white font-medium tracking-wide gap-2">
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">
                Good UI with perfect color combination
              </span>
              <span className="listBottom">
                Good UI with perfect color combination
              </span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Add todo</span>
              <span className="listBottom">Add todo</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Delete todo</span>
              <span className="listBottom">Delete todo</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Reset todo</span>
              <span className="listBottom">Reset todo</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Show todo list</span>
              <span className="listBottom">Show todo list</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold mb-2 underline underline-offset-2 decoration-[1px]">
            Must used packages:
          </p>
          <ul className="flex flex-col text-white font-medium tracking-wide gap-1">
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">React redux</span>
              <span className="listBottom">React redux</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Redux toolkit</span>
              <span className="listBottom">Redux toolkit</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Redux persist</span>
              <span className="listBottom">Redux persist</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Framer Motion</span>
              <span className="listBottom">Framer Motion</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Others as you me required!</span>
              <span className="listBottom">Others as you me required!</span>
            </li>
          </ul>
        </div>
        <Layoyt/>
      </div>
    </div>
  );
}

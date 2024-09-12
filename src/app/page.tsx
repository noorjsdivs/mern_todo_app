import Footer from "@/components/Footer";
import Input from "@/components/Input";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-slate-100 via-slate-300  to-slate-300 flex flex-col py-24 items-center px-2">
      <div className="w-full max-w-screen-md  bg-[#A2C5AC]  border-sky-300 border  p-4 md:p-16 lg:-p-10 rounded-md flex flex-col gap-5 ">
        <p className="text-4xl font-bold underline underline-offset-4 decoration-[1px] text-black hover:text-[#2A7221] duration-200 cursor-pointer">
          Todo Application
        </p>
        <Input />
        <Footer />
      </div>
    </div>
  );
}

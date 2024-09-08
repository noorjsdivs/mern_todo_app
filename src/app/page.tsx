import FromFiled from "@/components/FromFiled";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <div className="flex flex-col items-start max-w-2xl mx-auto gap-3">
        <h2 className="text-3xl mb-3 font-bold underline underline-offset-4 decoration-[1px] text-blue-500 hover:text-blue-700 duration-200 cursor-pointer">
          Todo Application Created by yeasin
        </h2>
      </div>
      <FromFiled/>
    </div>
  );
}

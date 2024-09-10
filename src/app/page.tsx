import Footer from "@/components/Footer";
import Intput from "@/components/Intput";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-purple-100 ">
      <div className=" max-w-screen-lg bg-pink-900 rounded-xl mx-auto flex flex-col pt-8 items-center mt-10">
        <Intput />
        <Footer />
      </div>
    </div>
  );
}

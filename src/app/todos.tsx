import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Home() {
  return (
    <div className="flex justify-center h-[60vh] items-center">
      <div className="grid grid-cols-3 gap-5 max-w-[800px]">
        <Input type="text" placeholder="Type your Todo" className=" " />
        <Input type="datetime-local" className="" />
        <Button className="w-20">Submit</Button>
      </div>
    </div>
  );
}

export default Home
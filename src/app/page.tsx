
import Link from "next/link";
import CreateUser from "./components/CreateUser";
import Container from "./components/Container";

export default function Homepage() {
  return (
    <main>
      <CreateUser/>
      <p className="text-center mb-6 text-lg"> sir ai application onek somossa ase jegula ami solve korte parchi na.. ami next cls a apnake janabo.</p>
      <Container className="text-xl font-semibold text-center">For view another todo Application Please <span className="text-blue-700 underline underline-offset-2 "><Link href={'https://todo-app-rust-beta.vercel.app/'} target="blank">Click here</Link> </span></Container>
    </main>
  );
}

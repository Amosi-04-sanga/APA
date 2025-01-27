import Image from "next/image";
import { About, Hero, Navbar, Objectives } from "../components";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Objectives/>
      <About/>
      
    </div>
  );
}

import { About, Contacts, Footer, Hero, Navbar, News, Objectives, OurTeam } from "../components";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Objectives/>
      <About/>
      <OurTeam/>
      <News/>
      <Contacts/>
      <Footer/>
      
    </div>
  );
}

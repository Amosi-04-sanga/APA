import { About, Contacts, Footer, Hero, Navbar, News, Objectives, OurTeam } from "../components";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Objectives/>
      <About/>
      <OurTeam/>
      <News/>
      <Contacts/>
    </div>
  );
}

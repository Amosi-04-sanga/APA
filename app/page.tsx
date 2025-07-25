import {
  About,
  Contacts,
  Departments,
  Hero,
  News,
  Objectives,
  OurTeam,
} from "../components";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Objectives />
      <About />
      <OurTeam />
      <Departments />
      <News />
      <Contacts />
    </div>
  );
}

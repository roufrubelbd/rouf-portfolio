import AboutPage from "@/components/About";
import ContactPage from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsPage from "@/components/Projects";
import SkillsPage from "@/components/Skills";
import TechnologiesPage from "@/components/Technologies";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <button className="btn btn-primary">test button</button> */}
      {/* <Navbar /> */}
      <Hero />
      <AboutPage />
      <TechnologiesPage />
      <SkillsPage />
      <Education />
      <ProjectsPage />
      <ContactPage />
      {/* <Footer /> */}
    </div>
  );
}

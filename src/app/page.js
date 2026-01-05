import Hero from "@/components/Hero";
import TechnologiesPage from "@/components/Technologies";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";
import Education from "./education/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutPage />
      <TechnologiesPage />
      <SkillsPage />
      <Education />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

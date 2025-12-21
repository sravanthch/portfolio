import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { HomeSection } from "@/components/home-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
}

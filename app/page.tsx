import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { Footer } from "@/components/sections/footer";

export default function Home(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer /> 
      </main>
    </>
  );
}
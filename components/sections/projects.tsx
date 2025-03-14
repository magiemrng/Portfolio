import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/projects";
type Project = {
  id: string;
  name: string;
  gitURL: string;
  liveURL: string;
  description: string;
  technologies: readonly string[]; // Change to readonly array
};
export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
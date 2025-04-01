"use client";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { Code2, Rocket, Star, Sparkles } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of my recent work showcasing my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Clean Code</h3>
            <p className="text-muted-foreground">
              Writing maintainable and efficient code following best practices
            </p>
          </div>
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Modern Tech</h3>
            <p className="text-muted-foreground">
              Using cutting-edge technologies and frameworks for optimal performance
            </p>
          </div>
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">User Experience</h3>
            <p className="text-muted-foreground">
              Creating intuitive and engaging interfaces for better user interaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
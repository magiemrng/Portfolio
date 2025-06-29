"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { Code2, Rocket, Star, Sparkles, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Web Apps", "AI/ML", "Tools", "Mobile"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => {
        // Simple categorization based on technologies
        if (selectedCategory === "AI/ML") {
          return project.technologies.some(tech => 
            tech.toLowerCase().includes('ai') || 
            tech.toLowerCase().includes('ml') || 
            tech.toLowerCase().includes('gemini') ||
            tech.toLowerCase().includes('openai')
          );
        }
        if (selectedCategory === "Web Apps") {
          return project.technologies.some(tech => 
            tech.toLowerCase().includes('react') || 
            tech.toLowerCase().includes('next') ||
            tech.toLowerCase().includes('typescript')
          );
        }
        return true;
      });

  return (
    <section id="projects" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="swiss-grid">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-span-12 text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-light tracking-tight swiss-typography mb-6">
            <span className="gradient-text">Selected</span>
            <br />
            <span className="text-muted-foreground">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            A curated collection of my recent work showcasing technical expertise and creative problem-solving.
          </p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-12 mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300 hover-lift"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="transition-all duration-300"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="transition-all duration-300"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="col-span-12">
          <motion.div
            layout
            className={`grid gap-8 ${
              viewMode === "grid" 
                ? "md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard {...project} viewMode={viewMode} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-12 mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Development Approach */}
            <div className="text-center p-8 rounded-lg glass hover-lift">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light swiss-typography mb-3">Clean Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Writing maintainable, scalable code following industry best practices and modern design patterns.
              </p>
            </div>

            {/* Technology Focus */}
            <div className="text-center p-8 rounded-lg glass hover-lift">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light swiss-typography mb-3">Modern Stack</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leveraging cutting-edge technologies and frameworks for optimal performance and developer experience.
              </p>
            </div>

            {/* User Experience */}
            <div className="text-center p-8 rounded-lg glass hover-lift">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light swiss-typography mb-3">User-Centric</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designing intuitive interfaces and seamless experiences that users love to interact with.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="col-span-12 text-center mt-16"
        >
          <div className="p-12 rounded-lg glass">
            <h3 className="text-2xl font-light swiss-typography mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and bring innovative ideas to life. 
              Let's create something amazing together.
            </p>
            <Button 
              size="lg" 
              className="hover-lift"
              asChild
            >
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { Github, ExternalLink, Calendar, Code2, ArrowUpRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps extends Project {
  viewMode?: "grid" | "list";
}

export function ProjectCard({ 
  name, 
  description, 
  technologies, 
  gitURL, 
  liveURL, 
  year = "2024",
  viewMode = "grid" 
}: ProjectCardProps) {
  
  if (viewMode === "list") {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="group"
      >
        <Card className="p-8 hover:shadow-xl transition-all duration-500 border-border/50 glass">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Project Info */}
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-light swiss-typography gradient-text">
                    {name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{year}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 6).map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
                {technologies.length > 6 && (
                  <Badge variant="outline">
                    +{technologies.length - 6} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex lg:flex-col gap-3">
              <Button
                variant="outline"
                size="sm"
                className="hover-lift"
                asChild
              >
                <a href={gitURL} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              {liveURL && (
                <Button
                  size="sm"
                  className="hover-lift"
                  asChild
                >
                  <a href={liveURL} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group h-full"
    >
      <Card className="p-6 h-full hover:shadow-xl transition-all duration-500 border-border/50 glass flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-light swiss-typography gradient-text group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{year}</span>
            </div>
          </div>
          
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href={gitURL} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            {liveURL && (
              <Button
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href={liveURL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <Code2 className="h-3 w-3 mr-1" />
            <span>View Project</span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Card>
    </motion.div>
  );
}
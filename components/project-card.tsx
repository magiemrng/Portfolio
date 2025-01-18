"use client";

import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Project } from "@/types/project";

export function ProjectCard({ name, description, technologies, gitURL, liveURL }: Project) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <TooltipProvider key={tech}>
            <Tooltip>
              <TooltipTrigger>
                <span className="px-2 py-1 bg-secondary rounded-full text-xs hover:bg-secondary/80 transition-colors">
                  {tech}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Used in project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      <div className="flex gap-4">
        <Button variant="outline" size="sm" asChild>
          <a href={gitURL} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        {liveURL && (
          <Button variant="outline" size="sm" asChild>
            <a href={liveURL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}
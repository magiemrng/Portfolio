"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Palette, 
  Shield, 
  GitBranch,
  Cloud,
  Zap,
  Terminal
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "text-blue-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 }
    ]
  },
  {
    title: "Backend",
    icon: Code2,
    color: "text-green-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "text-purple-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase", level: 80 },
      { name: "Supabase", level: 85 }
    ]
  },
  {
    title: "AI/ML",
    icon: Cpu,
    color: "text-orange-500",
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "OpenAI API", level: 85 },
      { name: "Gemini API", level: 90 },
      { name: "Data Analysis", level: 75 }
    ]
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "text-cyan-500",
    skills: [
      { name: "AWS", level: 70 },
      { name: "Docker", level: 65 },
      { name: "Vercel", level: 90 },
      { name: "Git", level: 95 }
    ]
  },
  {
    title: "Design",
    icon: Palette,
    color: "text-pink-500",
    skills: [
      { name: "UI/UX", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Responsive Design", level: 95 },
      { name: "Animation", level: 85 }
    ]
  }
];

const tools = [
  "VS Code", "Git", "Figma", "Postman", "Chrome DevTools", 
  "Terminal", "Docker", "AWS", "Vercel", "Netlify"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 bg-muted/30">
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
            <Zap className="h-4 w-4" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-light tracking-tight swiss-typography mb-6">
            <span className="gradient-text">Skills</span>
            <br />
            <span className="text-muted-foreground">& Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="col-span-12 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover-lift glass">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-primary/10`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-light swiss-typography">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-12"
        >
          <Card className="p-8 glass">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-light swiss-typography">Tools & Technologies</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="outline" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default px-4 py-2"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="col-span-12 mt-16"
        >
          <div className="text-center p-12 rounded-lg glass">
            <h3 className="text-2xl font-light swiss-typography mb-4">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of web development and deliver 
              cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
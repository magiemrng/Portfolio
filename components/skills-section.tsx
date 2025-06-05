"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Palette, 
  Shield, 
  GitBranch,
  Cloud
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend Development",
    icon: Code2,
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", ]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["AWS", "Docker",  "Git", ]
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Wireframing"]
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["OAuth", "JWT", "HTTPS", ]
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", ]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools I use to build modern applications
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
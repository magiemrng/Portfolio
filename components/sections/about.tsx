"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin, Code2, Zap, Users, Award } from "lucide-react";

const experiences = [
  {
    title: "WEB DEVELOPER",
    company: "CODIT TECH SOLUTIONS",
    period: "2024",
    type: "Professional"
  },
  {
    title: "B.Tech Computer Science",
    company: "SR University, Warangal",
    period: "2022 - 2026",
    type: "Education"
  }
];

const achievements = [
  { icon: Code2, title: "10+ Projects", desc: "Built and deployed" },
  { icon: Zap, title: "AI/ML Focus", desc: "Specialized expertise" },
  { icon: Users, title: "Open Source", desc: "Active contributor" },
  { icon: Award, title: "Modern Stack", desc: "Latest technologies" }
];

const coreSkills = [
  "Full Stack Development",
  "React & Next.js",
  "Node.js & Express",
  "AI/ML Integration",
  "Cloud Technologies",
  "UI/UX Design",
  "Database Design",
  "API Development"
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-muted/30">
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
            <Code2 className="h-4 w-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-light tracking-tight swiss-typography mb-6">
            <span className="gradient-text">Developer</span>
            <br />
            <span className="text-muted-foreground">& Creator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Passionate about building the future through code, one project at a time.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="col-span-12 lg:col-span-6 space-y-8">
          
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light swiss-typography">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student at SR University with a deep passion for 
                creating innovative digital solutions. My journey began with curiosity 
                about how things work and evolved into a love for building them.
              </p>
              <p>
                Specializing in full-stack development and AI/ML integration, I focus on 
                creating applications that not only solve problems but also provide 
                exceptional user experiences.
              </p>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light swiss-typography">Experience</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div className="space-y-1">
                    <h4 className="font-medium">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{exp.type}</Badge>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-light swiss-typography">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-6 space-y-8">
          
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glass hover-lift">
              <h3 className="text-xl font-light swiss-typography mb-6">Let's Connect</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button variant="outline" className="w-full hover-lift" asChild>
                  <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </a>
                </Button>
                <Button variant="outline" className="w-full hover-lift" asChild>
                  <a href="mailto:saikumarthota2004@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button variant="outline" className="w-full hover-lift" asChild>
                  <a href="https://github.com/SAIKUMAR039" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full hover-lift" asChild>
                  <a href="https://www.linkedin.com/in/sai-kumar-thota-101764252/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Always open to discussing new opportunities and collaborations
              </p>
            </Card>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover-lift glass">
                  <achievement.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-medium mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glass">
              <h3 className="text-xl font-light swiss-typography mb-4">Philosophy</h3>
              <blockquote className="text-muted-foreground italic leading-relaxed">
                "Great software is not just about writing code—it's about understanding 
                problems, crafting solutions, and creating experiences that make a difference."
              </blockquote>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
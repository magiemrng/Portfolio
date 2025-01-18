"use client";

import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileDown ,LucideIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/social-link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { 
    icon: Github, 
    href: "https://github.com/SAIKUMAR039", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/sai-kumar-thota-101764252/", 
    label: "LinkedIn" 
  },
  { 
    icon: Mail, 
    href: "mailto:contact@saikumarthota.live", 
    label: "Email" 
  }
];

const roles: string[] = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Developer",
  "UI/UX Enthusiast",
  "Cloud Technologies",
  "Open Source Contributor",
  "Tech Blogger",
  "Data Science Enthusiast",
  "Machine Learning Engineer",
];

export const HeroSection: React.FC = () => {
  const scrollToAbout = (): void => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center p-6 overflow-hidden">
      <BackgroundBeams className="opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/80 z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full space-y-8 text-center relative z-10"
      >
        <div className="space-y-6">
          <motion.div 
            className="flex justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-lg" />
              <img
                src="https://avatars.githubusercontent.com/u/134082542?v=4"
                alt="Sai Kumar Thota"
                className="relative w-36 h-36 rounded-full border-2 border-primary/50 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                Sai Kumar Thota
              </span>
            </h1>
            <TypewriterEffect words={roles} className="text-xl md:text-2xl text-muted-foreground mt-4" />
          </motion.div>
        </div>

        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Passionate about creating elegant solutions to complex problems through clean, 
          efficient code and intuitive user experiences.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity"
            asChild
          >
            <a href="/assets/Resume.pdf" download>
              <FileDown className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <SocialLink {...link} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Button 
            size="lg" 
            variant="ghost"
            onClick={scrollToAbout}
            className="group relative overflow-hidden px-8 transition-all duration-500"
          >
            <span className="relative z-10">Know More About Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce"
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
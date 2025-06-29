"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileDown, Code, Terminal, Zap, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterEffect, UltraFastCodeBlock } from "@/components/ui/typewriter-effect";

const roles = [
  "Full Stack Developer",
  "React Specialist", 
  "AI/ML Engineer",
  "UI/UX Designer",
  "Problem Solver",
  "Tech Innovator"
];

const codeLines = [
  { code: "const developer = 'Sai Kumar Thota';", delay: 0.3, highlight: false },
  { code: "const skills = ['React', 'Next.js', 'AI/ML', 'Node.js'];", delay: 0.6, highlight: false },
  { code: "const passion = 'Building innovative solutions';", delay: 0.9, highlight: false },
  { code: "const status = 'Available for opportunities';", delay: 1.2, highlight: true },
  { code: "console.log('Let\\'s build something amazing! 🚀');", delay: 1.5, highlight: false }
];

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/SAIKUMAR039", 
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/sai-kumar-thota-101764252/", 
    label: "LinkedIn",
    color: "hover:text-blue-500"
  },
  { 
    icon: Mail, 
    href: "mailto:saikumarthota2004@gmail.com", 
    label: "Email",
    color: "hover:text-red-500"
  }
];

export const HeroSection: React.FC = () => {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const [showFloatingElements, setShowFloatingElements] = useState(false);

  const scrollToAbout = (): void => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const terminalTimer = setTimeout(() => setIsTerminalVisible(true), 600);
    const elementsTimer = setTimeout(() => setShowFloatingElements(true), 1000);
    
    return () => {
      clearTimeout(terminalTimer);
      clearTimeout(elementsTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Animated Floating Code Elements */}
      <AnimatePresence>
        {showFloatingElements && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-xs font-mono text-muted-foreground/30"
                initial={{ opacity: 0, y: 100, x: Math.random() * 100 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  y: [-100, -500],
                  x: [0, Math.random() * 300 - 150],
                  rotate: [0, Math.random() * 360]
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '100%'
                }}
              >
                {[
                  '{ }', '[ ]', '< />', '( )', '=>', '&&', '||', '++', 
                  'const', 'let', 'function', 'return', 'async', 'await'
                ][i % 14]}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="swiss-grid w-full">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 lg:space-y-12"
          >
            
            {/* Profile Section */}
            <div className="space-y-6 lg:space-y-8">
              <motion.div 
                className="relative inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative group">
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-75 blur-sm"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <img
                    src="https://avatars.githubusercontent.com/u/134082542?v=4"
                    alt="Sai Kumar Thota"
                    className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-background shadow-2xl"
                  />
                  <motion.div 
                    className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-background"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>

              {/* Name and Title */}
              <div className="space-y-3 lg:space-y-4">
                <motion.h1 
                  className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight swiss-typography"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <span className="gradient-text font-medium">Sai Kumar</span>
                  <br />
                  <span className="text-muted-foreground text-2xl sm:text-4xl lg:text-6xl">Thota</span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light"
                >
                  <TypewriterEffect 
                    words={roles} 
                    typeSpeed={60}
                    deleteSpeed={40}
                    delayBetweenWords={1500}
                  />
                </motion.div>
              </div>
            </div>

            {/* Ultra-Fast Terminal Code Block */}
            <AnimatePresence>
              {isTerminalVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mx-auto"
                >
                  <UltraFastCodeBlock lines={codeLines} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light px-4">
                Crafting digital experiences with <span className="gradient-text font-medium">clean code</span>, 
                <span className="gradient-text font-medium"> innovative solutions</span>, and a passion for 
                <span className="gradient-text font-medium"> emerging technologies</span>.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Specialized in React, Next.js & AI-powered applications</span>
                <Sparkles className="h-4 w-4 text-primary" />
              </motion.div>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover-lift px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg rounded-2xl w-full sm:w-auto group"
                  asChild
                >
                  <a href="/assets/Resume.pdf" download>
                    <FileDown className="mr-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
              
              <div className="flex gap-3 lg:gap-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 hover-lift transition-all duration-300 ${link.color}`}
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 lg:gap-8 max-w-sm lg:max-w-md mx-auto pt-6 lg:pt-8"
            >
              {[
                { number: "10+", label: "Projects", icon: Code },
                { number: "2+", label: "Years", icon: Terminal },
                { number: "5+", label: "Technologies", icon: Zap }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <stat.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-xl sm:text-2xl lg:text-3xl font-light gradient-text">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-light">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 transition-all duration-300 rounded-full group"
            onClick={scrollToAbout}
          >
            <ChevronDown className="h-5 w-5 lg:h-6 lg:w-6 group-hover:text-primary transition-colors" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileDown, Code, Terminal, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const codeSnippets = [
  { 
    code: "const developer = 'Sai Kumar';", 
    language: "javascript",
    delay: 0 
  },
  { 
    code: "const skills = ['React', 'Next.js', 'AI/ML'];", 
    language: "javascript",
    delay: 1 
  },
  { 
    code: "const passion = 'Building the future';", 
    language: "javascript",
    delay: 2 
  },
  { 
    code: "console.log('Hello World! 👋');", 
    language: "javascript",
    delay: 3 
  }
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

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, 50 + delay * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span className="font-mono text-sm">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export const HeroSection: React.FC = () => {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  const scrollToAbout = (): void => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTerminalVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Swiss Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-muted-foreground/10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [-100, -300],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 12,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%'
            }}
          >
            {`<${['div', 'span', 'section', 'article', 'header', 'main', 'footer', 'nav'][i]} />`}
          </motion.div>
        ))}
      </div>

      <div className="swiss-grid w-full px-6">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            
            {/* Profile Section */}
            <div className="space-y-8">
              <motion.div 
                className="relative inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse blur-sm" />
                  <img
                    src="https://avatars.githubusercontent.com/u/134082542?v=4"
                    alt="Sai Kumar Thota"
                    className="relative w-32 h-32 rounded-full border-2 border-background shadow-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-background animate-pulse" />
                </div>
              </motion.div>

              {/* Name and Title */}
              <div className="space-y-4">
                <motion.h1 
                  className="text-6xl lg:text-8xl font-light tracking-tight swiss-typography"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <span className="gradient-text font-medium">Sai Kumar</span>
                  <br />
                  <span className="text-muted-foreground text-4xl lg:text-6xl">Thota</span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl lg:text-2xl text-muted-foreground font-light"
                >
                  Full Stack Developer & AI Enthusiast
                </motion.div>
              </div>
            </div>

            {/* Terminal Code Block */}
            <AnimatePresence>
              {isTerminalVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="terminal glass hover-lift">
                    <div className="terminal-content space-y-2">
                      {codeSnippets.map((snippet, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: snippet.delay * 0.5, duration: 0.4 }}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-green-400">$</span>
                          <TypewriterText text={snippet.code} delay={snippet.delay} />
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 0.4 }}
                        className="flex items-center space-x-2 text-green-400"
                      >
                        <Play className="w-3 h-3" />
                        <span className="text-sm">Ready to build amazing things...</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Description */}
            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Crafting digital experiences with clean code, innovative solutions, 
              and a passion for emerging technologies. Specialized in React, Next.js, 
              and AI-powered applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover-lift px-8 py-6 text-lg"
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
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`w-12 h-12 rounded-full border-2 hover-lift transition-all duration-300 ${link.color}`}
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8"
            >
              {[
                { number: "10+", label: "Projects" },
                { number: "2+", label: "Years" },
                { number: "5+", label: "Technologies" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-light gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-light">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce hover:animate-none transition-all duration-300"
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
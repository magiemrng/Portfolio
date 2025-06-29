"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export function TypewriterEffect({ 
  words, 
  className = "",
  typeSpeed = 50,
  deleteSpeed = 30,
  delayBetweenWords = 1500
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(waitTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setIsWaiting(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <div className={`font-mono ${className}`}>
      <span className="gradient-text">{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="text-primary ml-1"
      >
        |
      </motion.span>
    </div>
  );
}

// Fast Code Typewriter for Hero Section
interface FastTypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function FastTypewriter({ text, delay = 0, speed = 30, className = "" }: FastTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else if (!isComplete) {
        setIsComplete(true);
      }
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [currentIndex, text, delay, speed, isComplete]);

  return (
    <span className={`font-mono ${className}`}>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-green-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
}

// Animated Code Block Component
interface AnimatedCodeBlockProps {
  lines: Array<{
    code: string;
    delay: number;
    highlight?: boolean;
  }>;
  className?: string;
}

export function AnimatedCodeBlock({ lines, className = "" }: AnimatedCodeBlockProps) {
  return (
    <div className={`terminal glass hover-lift ${className}`}>
      <div className="terminal-content space-y-2">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay, duration: 0.3 }}
            className={`flex items-center space-x-2 ${line.highlight ? 'text-yellow-400' : ''}`}
          >
            <span className="text-green-400">$</span>
            <FastTypewriter 
              text={line.code} 
              delay={line.delay} 
              speed={25}
              className="text-sm"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
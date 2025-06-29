"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterEffectProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export function TypewriterEffect({ 
  words, 
  typeSpeed = 80, 
  deleteSpeed = 50, 
  delayBetweenWords = 2000,
  className = "" 
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <div className={`font-light ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </div>
  );
}

interface FastTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function FastTypewriter({ 
  text, 
  speed = 20, 
  delay = 0, 
  className = "",
  onComplete 
}: FastTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }
  }, [delay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return <span className={className}>{displayText}</span>;
}

interface CodeLine {
  code: string;
  delay: number;
  highlight?: boolean;
}

interface AnimatedCodeBlockProps {
  lines: CodeLine[];
  className?: string;
}

export function AnimatedCodeBlock({ lines, className = "" }: AnimatedCodeBlockProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [completedLines, setCompletedLines] = useState<number[]>([]);

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, line.delay * 1000);
    });
  }, [lines]);

  const handleLineComplete = useCallback((index: number) => {
    setCompletedLines(prev => [...prev, index]);
  }, []);

  const formatCode = (code: string, highlight: boolean = false) => {
    // Simple syntax highlighting
    return code
      .replace(/(const|let|var)/g, '<span class="syntax-keyword">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="syntax-string">$1</span>')
      .replace(/(console\.log)/g, '<span class="syntax-function">$1</span>')
      .replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, '<span class="syntax-variable">$1</span>=');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`terminal ${className}`}
    >
      <div className="terminal-content font-mono text-sm">
        <AnimatePresence>
          {visibleLines.map((lineIndex) => {
            const line = lines[lineIndex];
            return (
              <motion.div
                key={lineIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-2 ${line.highlight ? 'text-yellow-400' : 'text-green-400'}`}
              >
                <span className="text-gray-500 mr-2">$</span>
                <FastTypewriter
                  text={line.code}
                  speed={15} // Ultra fast typing
                  onComplete={() => handleLineComplete(lineIndex)}
                />
                {completedLines.includes(lineIndex) && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="text-green-400 ml-1"
                  >
                    |
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// Enhanced version with even faster typing and better effects
interface UltraFastCodeBlockProps {
  lines: CodeLine[];
  className?: string;
}

export function UltraFastCodeBlock({ lines, className = "" }: UltraFastCodeBlockProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [allLinesComplete, setAllLinesComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, lines[currentLineIndex]?.delay * 1000 || 500);
      
      return () => clearTimeout(timer);
    } else {
      setAllLinesComplete(true);
    }
  }, [currentLineIndex, lines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`terminal ${className}`}
    >
      <div className="terminal-content">
        {lines.slice(0, currentLineIndex + 1).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className={`mb-1 font-mono text-sm ${
              line.highlight ? 'text-yellow-300' : 'text-green-300'
            }`}
          >
            <span className="text-gray-500 mr-2">$</span>
            <FastTypewriter
              text={line.code}
              speed={8} // Super fast - 8ms per character
              className="inline"
            />
          </motion.div>
        ))}
        
        {/* Blinking cursor on last line */}
        {currentLineIndex < lines.length && (
          <motion.div className="font-mono text-sm text-green-300">
            <span className="text-gray-500 mr-2">$</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
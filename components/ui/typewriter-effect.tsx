"use client";

import React, { useState, useEffect } from 'react';
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
  typeSpeed = 100, 
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
    <div className={`font-mono ${className}`}>
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

interface CodeLine {
  code: string;
  delay: number;
  highlight?: boolean;
}

interface UltraFastCodeBlockProps {
  lines: CodeLine[];
}

export function UltraFastCodeBlock({ lines }: UltraFastCodeBlockProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typingStates, setTypingStates] = useState<string[]>(new Array(lines.length).fill(''));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleLines < lines.length) {
        setVisibleLines(prev => prev + 1);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [visibleLines, lines.length]);

  useEffect(() => {
    if (visibleLines > 0) {
      const currentLineIndex = visibleLines - 1;
      const currentLine = lines[currentLineIndex];
      
      if (typingStates[currentLineIndex].length < currentLine.code.length) {
        const timer = setTimeout(() => {
          setTypingStates(prev => {
            const newStates = [...prev];
            newStates[currentLineIndex] = currentLine.code.slice(0, newStates[currentLineIndex].length + 1);
            return newStates;
          });
        }, 30);

        return () => clearTimeout(timer);
      }
    }
  }, [visibleLines, typingStates, lines]);

  const formatCode = (code: string) => {
    return code
      .replace(/const|let|var/g, '<span class="syntax-keyword">$&</span>')
      .replace(/'([^']*)'/g, '<span class="syntax-string">\'$1\'</span>')
      .replace(/console\.log/g, '<span class="syntax-function">console.log</span>')
      .replace(/\[([^\]]*)\]/g, '[<span class="syntax-string">$1</span>]');
  };

  return (
    <div className="terminal">
      <div className="terminal-content space-y-2">
        {lines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: line.delay }}
            className={`font-mono text-sm leading-relaxed ${
              line.highlight ? 'text-green-400' : 'text-gray-300'
            }`}
          >
            <span className="text-green-400 mr-2">$</span>
            <span 
              dangerouslySetInnerHTML={{ 
                __html: formatCode(typingStates[index] || '') 
              }} 
            />
            {typingStates[index] && typingStates[index].length < line.code.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-green-400"
              >
                |
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
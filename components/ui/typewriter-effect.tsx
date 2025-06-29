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
    <div className={`font-light ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-primary ml-1"
      />
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
  const [currentLineText, setCurrentLineText] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const currentLine = lines[visibleLines];
      const timer = setTimeout(() => {
        setIsTyping(true);
        typeText(currentLine.code, () => {
          setIsTyping(false);
          setVisibleLines(prev => prev + 1);
          setCurrentLineText('');
        });
      }, currentLine.delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [visibleLines, lines]);

  const typeText = (text: string, onComplete: () => void) => {
    let index = 0;
    const typeChar = () => {
      if (index < text.length) {
        setCurrentLineText(text.slice(0, index + 1));
        index++;
        setTimeout(typeChar, 30); // Very fast typing
      } else {
        setTimeout(onComplete, 500); // Pause before next line
      }
    };
    typeChar();
  };

  const formatCode = (code: string, highlight: boolean = false) => {
    // Simple syntax highlighting
    const formatted = code
      .replace(/(const|let|var)/g, '<span class="syntax-keyword">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="syntax-string">$1</span>')
      .replace(/(console\.log)/g, '<span class="syntax-function">$1</span>')
      .replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, '<span class="syntax-variable">$1</span> =');

    return (
      <span 
        className={highlight ? 'text-green-400' : ''}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
  };

  return (
    <div className="terminal">
      <div className="terminal-content space-y-2">
        {lines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <span className="text-green-400 mr-2">$</span>
            {formatCode(line.code, line.highlight)}
          </motion.div>
        ))}
        
        {isTyping && visibleLines < lines.length && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <span className="text-green-400 mr-2">$</span>
            {formatCode(currentLineText, lines[visibleLines]?.highlight)}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-5 bg-green-400 ml-1"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
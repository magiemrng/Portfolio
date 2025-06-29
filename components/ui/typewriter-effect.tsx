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

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  className = ""
}) => {
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
};

interface CodeLine {
  code: string;
  delay: number;
  highlight?: boolean;
}

interface UltraFastCodeBlockProps {
  lines: CodeLine[];
}

export const UltraFastCodeBlock: React.FC<UltraFastCodeBlockProps> = ({ lines }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typingStates, setTypingStates] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const showNextLine = (lineIndex: number) => {
      if (lineIndex >= lines.length) return;

      setVisibleLines(lineIndex + 1);
      
      const line = lines[lineIndex];
      let currentIndex = 0;
      
      const typeCharacter = () => {
        if (currentIndex <= line.code.length) {
          setTypingStates(prev => ({
            ...prev,
            [lineIndex]: line.code.slice(0, currentIndex)
          }));
          currentIndex++;
          
          if (currentIndex <= line.code.length) {
            setTimeout(typeCharacter, 8); // Ultra-fast typing: 8ms per character
          } else {
            // Line complete, show next line after short delay
            setTimeout(() => showNextLine(lineIndex + 1), 150);
          }
        }
      };

      setTimeout(typeCharacter, line.delay * 1000);
    };

    showNextLine(0);
  }, [lines]);

  const formatCode = (code: string, isComplete: boolean) => {
    if (!isComplete) return code;

    return code.replace(
      /(const|let|var|console\.log|function|return|async|await)/g,
      '<span class="syntax-keyword">$1</span>'
    ).replace(
      /('.*?'|".*?")/g,
      '<span class="syntax-string">$1</span>'
    ).replace(
      /(\w+)(?=\s*=)/g,
      '<span class="syntax-variable">$1</span>'
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="terminal max-w-2xl mx-auto"
    >
      <div className="terminal-content">
        <div className="space-y-1 font-mono text-sm">
          {lines.slice(0, visibleLines).map((line, index) => {
            const currentText = typingStates[index] || '';
            const isComplete = currentText.length === line.code.length;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-3 ${line.highlight ? 'bg-primary/10 -mx-2 px-2 py-1 rounded' : ''}`}
              >
                <span className="text-green-400 select-none flex-shrink-0">$</span>
                <div className="flex-1 min-w-0">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: formatCode(currentText, isComplete)
                    }}
                    className="break-all"
                  />
                  {!isComplete && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="text-green-400"
                    >
                      ▋
                    </motion.span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
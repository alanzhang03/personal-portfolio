import React, { useState, useEffect } from 'react';

const Typewriter = ({ textArray, typingDelay, backspaceDelay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (isAdding) {
      if (charIndex < textArray[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + textArray[textIndex].charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, typingDelay);
      } else {
        timeout = setTimeout(() => setIsAdding(false), 1000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, backspaceDelay);
      } else {
        timeout = setTimeout(() => {
          setIsAdding(true);
          setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [isAdding, charIndex, textIndex, textArray, typingDelay, backspaceDelay]);

  return <div>{displayedText}</div>;
};

export default Typewriter;
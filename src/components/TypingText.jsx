import { useEffect, useState } from 'react';

export const TypingText = ({ text = "", speed = 100, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className={`${className} min-h-[1.5em] whitespace-nowrap`}>
      {text.slice(0, index)}
    </div>
  );
};

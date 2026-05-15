import { useEffect, useState } from "react";

export const TypingText = ({
  texts = [],
  speed = 100,
  pause = 1200,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return undefined;

    const currentText = texts[textIndex];
    const delay =
      !isDeleting && charIndex === currentText.length
        ? pause
        : isDeleting
          ? speed / 2
          : speed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextCharIndex = charIndex + 1;
        setDisplayText(currentText.slice(0, nextCharIndex));
        setCharIndex(nextCharIndex);

        if (nextCharIndex === currentText.length) {
          setIsDeleting(true);
        }
      } else {
        const nextCharIndex = charIndex - 1;
        setDisplayText(currentText.slice(0, nextCharIndex));
        setCharIndex(nextCharIndex);

        if (nextCharIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, pause, speed, textIndex, texts]);

  return (
    <div className={`${className} min-h-[1.5em] whitespace-nowrap`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

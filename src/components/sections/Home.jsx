import { useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import { TypingText } from "../TypingText";
import { FinisherHeader } from "../FinisherHeader"; 

export const Home = () => {

  useEffect(() => {
    // Small delay ensures layout has stabilized before scrolling
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 50);

    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
    >
      <FinisherHeader />
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Pragati Juyal
          </h1>

          <TypingText
            text="Full Stack Developer"
            speed={100}
            className="text-cyan-400 text-xl font-mono mt-2"
          />
  
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto mt-4">
            I enjoy turning ideas into simple, helpful software. Whether I’m working on a small interface or a full-stack feature, I try to build with clarity, empathy, and attention to detail. I'm always learning, always listening, and I believe the best tools feel effortless to use.
          </p>

          <div className="flex justify-center space-x-4">
            <a 
              href="#projects" 
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a 
              href="#contact" 
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

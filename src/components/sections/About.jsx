import { createElement } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFlutter,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { BrainCircuit, Database, HeartHandshake, Sparkles } from "lucide-react";

export const About = () => {
  const strengths = [
    {
      title: "Human-Centered",
      text: "Caregiving, teaching, and education shaped how I design for real people.",
      icon: HeartHandshake,
    },
    {
      title: "Adaptable",
      text: "International work taught me to communicate clearly and learn fast.",
      icon: Sparkles,
    },
    {
      title: "Curious Builder",
      text: "I like practical tools, clean interfaces, and thoughtful AI-supported workflows.",
      icon: BrainCircuit,
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Vite", icon: SiVite },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Flutter", icon: SiFlutter },
        { name: "Angular", icon: SiAngular },
        { name: "Figma", icon: SiFigma },
        { name: "Three.js", icon: SiThreedotjs },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MySQL", icon: SiMysql },
        { name: "SQL Server", icon: Database },
        { name: "JWT", icon: SiJsonwebtokens },
        { name: "REST APIs", icon: Database },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Go APIs", icon: SiGo },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-6 sm:p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-base sm:text-lg leading-8 max-w-3xl mx-auto text-center">
              I am a full-stack developer shaped by teaching, caregiving, and
              international collaboration. I enjoy building clean, accessible
              tools that make everyday tasks easier and help people learn, work,
              or communicate better.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {strengths.map(({ title, text, icon }) => (
                <div
                  key={title}
                  className="border border-white/10 bg-white/[0.03] p-5 rounded-lg transition hover:-translate-y-1 hover:border-blue-400/40"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-cyan-300 flex items-center justify-center mb-4">
                    {createElement(icon, { size: 22 })}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm leading-6 text-gray-400">{text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skillGroups.map(({ title, items }) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-black/30 p-5"
                >
                  <h3 className="text-xl font-bold mb-5">{title}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {items.map(({ name, icon }) => (
                      <div
                        key={name}
                        className="group min-h-12 flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-200 transition hover:border-blue-400/50 hover:bg-blue-500/10"
                      >
                        {createElement(icon, {
                          className: "shrink-0 text-blue-400 group-hover:text-cyan-300",
                          size: 20,
                        })}
                        <span className="leading-tight">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

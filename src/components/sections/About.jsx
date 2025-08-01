import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Vite",
    "TailwindCSS",
    "Bootstrap",
    "Flutter",
    "Angular",
    "Material UI", 
    "Figma",
    "p5.js",
    "Three.js"
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "SQL Server",
    "MySql",
    "Multer",
    "JWT",
    "REST API Design",
    "GraphQL (basic, with gqlgen in Go)",
    "Golang (API development)",
    "Nodemailer (email service)",
    "Session & Token Mangement",
    "MVC Architecture",
    "API security & Validation"
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center py-20"
  >
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 text-justify">
            My journey into tech has been shaped by real-life experiences, from working with children and elderly people in Japan to managing international projects and teaching languages. These roles taught me the value of empathy, adaptability, and clear communication-skills I now carry into my work as a full-stack developer.

            <br /><br />

            I love creating things that are useful and make life feel a little easier, whether it’s a clean user interface, a tool that saves time, or something that helps someone learn better. I’m especially curious about how AI and machine learning can be used thoughtfully, not just because they’re trendy, but because they have real potential to support people in everyday life.

            <br /><br />

            I care about accessibility, education, and efficiency, but most of all, I just want to keep learning and building things that matter.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fronend skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div> 
            {/* Backend skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div> 
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>
  );
};
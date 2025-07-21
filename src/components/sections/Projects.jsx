import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clinica Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Anonymous Reporting & Ticket Management System for Hospitals
              </h3>
              <p className="text-gray-400 mb-4 text-justify">
                A secure web app used by Clínica Sagrada Familia (Barcelona) to help hospital staff to submit incident reports anonymously. The system organizes reports as trackable tickets, helping administrators monitor status updates and ensure efficient resolution,  all while maintaining confidentiality.
              </p>
              <div className="flex flex/wrap gap/2 mb/4">
                {["React", "Node.js"].map((tech, key) => (
                  <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Link to the project */}
              <div className="flex justify-between items-center mt-4">
                <a 
                  href="https://project-csf-lp.vercel.app/" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                > View Project → 
                </a>

              </div>
            </div>
            {/* Periodic Table */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Interactive Periodic Table & Atomic Model Visualizer
              </h3>
              <p className="text-gray-400 mb-4 text-justify" >
                Mendelemento is a fun way to explore the periodic table! You can filter elements and see cute 3D atoms with colorful spinning electrons. It’s still in the early MVP stage, the nucleus was tricky to build, but updates are coming! The goal? A smoother, more polished learning tool that makes chemistry feel magical.
              </p>
              <div>
                {["JavaScript", "Three.js", "HTML/CSS"].map((tech, key) => (
                  <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Link to the project */}
              <div className="flex justify-between items-center mt-4">
                <a 
                  href="https://pragati9991.github.io/periodic-table/" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                > View Project → 
                </a>

              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";
import homeClinicaImg from "/src/assets/images/homeClinica.png";
import mendelementoImg from "/src/assets/images/mendelemento.png";

const projectList = [
  {
    title: "Anonymous Reporting & Ticket Management",
    image: homeClinicaImg,
    description:
      "A secure web app used by Clínica Sagrada Familia (Barcelona) to help hospital staff to submit incident reports anonymously. The system organizes reports as trackable tickets, helping administrators monitor status updates and ensure efficient resolution, all while maintaining confidentiality.",
    tech: ["React", "Node.js"],
    link: "https://project-csf-lp.vercel.app/"
  },
  {
    title: "Interactive Periodic Table",
    image: mendelementoImg,
    description: "Mendelemento helps you explore the periodic table like never before. Choose any element to see its atom with spinning electrons in 3D. You can also use easy filters to group elements by type, like metals, gases, or noble elements. It’s a fun and visual way for young learners to understand atoms and the periodic table.",
    tech: ["JavaScript", "Three.js", "HTML/CSS"],
    link: "https://pragati9991.github.io/periodic-table/"
  },
    {
    title: "Interactive Periodic Table",
    image: mendelementoImg,
    description: "Mendelemento helps you explore the periodic table like never before. Choose any element to see its atom with spinning electrons in 3D. You can also use easy filters to group elements by type, like metals, gases, or noble elements. It’s a fun and visual way for young learners to understand atoms and the periodic table.",
    tech: ["JavaScript", "Three.js", "HTML/CSS"],
    link: "https://pragati9991.github.io/periodic-table/"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {projectList.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};


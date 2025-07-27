import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCard } from "../ProjectCard";
import homeClinicaImg from "/src/assets/images/homeClinica.png";
import mendelementoImg from "/src/assets/images/mendelemento.png";
import safeReactImage from "/src/assets/images/safeReact.png";

// Icon imports
import reactIcon from "/src/assets/icons/react.svg";
import nodeIcon from "/src/assets/icons/nodejs.svg";
import viteIcon from "/src/assets/icons/vite.svg";
import sqlIcon from "/src/assets/icons/sqlserver.png";
import jwtIcon from "/src/assets/icons/jwt.svg";
import figmaIcon from "/src/assets/icons/figma.svg";
import bootstrapIcon from "/src/assets/icons/bootstrap.svg";
import cssIcon from "/src/assets/icons/css3.svg";
import jsIcon from "/src/assets/icons/javascript.svg";
import threeIcon from "/src/assets/icons/threejs.png";
import htmlIcon from "/src/assets/icons/html.svg";
import flutterIcon from "/src/assets/icons/Flutter.svg";
import dartIcon from "/src/assets/icons/dart.svg";

const projectList = [
  {
    title: "Anonymous Reporting & Ticket Management",
    image: homeClinicaImg,
    description:
      "A secure web app used by Clínica Sagrada Familia (Barcelona) to help hospital staff submit incident reports anonymously. It organizes reports into trackable tickets, allowing admins to monitor statuses and resolve issues efficiently while protecting confidentiality.",
    techIcons: [
      reactIcon,
      viteIcon,
      nodeIcon,
      sqlIcon,
      jwtIcon,
      figmaIcon,
      bootstrapIcon,
      cssIcon,
    ],
    link: "https://project-csf-lp.vercel.app/",
  },
  {
    title: "Interactive Periodic Table",
    image: mendelementoImg,
    description:
      "Mendelemento helps you explore the periodic table like never before. Choose any element to see its atom with spinning electrons in 3D. You can also use easy filters to group elements by type, like metals, gases, or noble elements. It’s a fun and visual way for young learners to understand atoms and the periodic table.",
    techIcons: [jsIcon, threeIcon, htmlIcon, cssIcon],
    link: "https://pragati9991.github.io/periodic-table/",
  },
  {
    title: "SafeReact – Drug Interaction App (Prototype)",
    image: safeReactImage, // use a thumbnail or app screenshot
    description: "SafeReact is a prototype of a drug interaction app built with Flutter and Dart. It helps users identify potential food and medicine interactions that could lead to harmful side effects. Designed to promote awareness and safer daily choices.",
    techIcons: [flutterIcon, dartIcon], // if you added icons
    link: "https://youtube.com/shorts/HfcDl-lyWI4?feature=share"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {projectList.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

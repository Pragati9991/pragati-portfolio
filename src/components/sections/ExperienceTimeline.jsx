import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaAngular, FaChalkboardTeacher, FaProjectDiagram, FaBookOpen, FaHourglassStart  } from "react-icons/fa";

const experiences = [
  {
    years: "Oct 2024 - Mar 2025",
    title: "Application Developer Trainee",
    company: "SunscreenTech.eu, Spain",
    mainTech: ["Angular", "Flutter"],
    technologies: ["REST API", "Firebase"],
    icon: <FaAngular />
  },
  {
    years: "Sep 2022 – Jun 2023",
    title: "English Teacher",
    company: "Progress Escola D’Idiomes, Spain",
    mainTech: ["Cambridge B2/C1"],
    technologies: ["Lesson Planning"],
    icon: <FaChalkboardTeacher />
  },
  {
    years: "Jan 2021 - Apr 2021",
    title: "Project Manager",
    company: "New Delhi, India",
    mainTech: ["Coordination"],
    technologies: ["Client Communication"],
    icon: <FaProjectDiagram />
  },
  {
    years: "Apr 2017 - Jan 2020",
    title: "Social Educator",
    company: "Osaka, Japan",
    mainTech: ["ADHD Support"],
    technologies: ["Custom Learning Plans"],
    icon: <FaBookOpen />
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto">
        <VerticalTimeline lineColor="#E5E7EB">
          {experiences.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.years}
              iconStyle={{ background: "#1F2937", color: "#fff" }}
              icon={item.icon}
              contentStyle={{ background: "#1F2937", color: "#F3F4F6" }}
              contentArrowStyle={{ borderRight: "7px solid #1F2937" }}
            >
              <div className="mb-2 flex flex-wrap gap-2">
                {item.mainTech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-600/10 text-pink-400 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-lg">{item.title}</h3>
              <h4 className="text-sm mb-2 text-gray-400">
                {item.company}
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}

          {/* End element */}
          <VerticalTimelineElement
            iconStyle={{ background: "#1F2937", color: "#fff" }}
            icon={<FaHourglassStart />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

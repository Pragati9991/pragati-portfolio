import { useState } from "react";
import Modal from "./ProjectModal";

export const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="w-full max-w-sm mx-auto min-h-[450px] cursor-pointer p-4 rounded-xl border border-white/10 bg-[#0d0d0d] shadow-blue-500/30 shadow-md hover:shadow-lg hover:-translate-y-1 transition flex flex-col justify-between"
        onClick={() => setOpen(true)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-contain max-h-[300px] mx-auto"
        />

        <div className="mt-4 flex flex-col items-center text-center flex-grow">
          <h3 className="text-xl font-bold">{project.title}</h3>

          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {project.techIcons ? (
              project.techIcons.map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  alt="tech icon"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  title="Technology"
                />
              ))
            ) : (
              project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-500/10 text-blue-400 text-sm px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))
            )}
          </div>

        </div>
      </div>

      {open && <Modal project={project} onClose={() => setOpen(false)} />}
    </>
  );
};

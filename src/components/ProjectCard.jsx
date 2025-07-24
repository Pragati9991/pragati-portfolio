import { useState } from "react";
import Modal from "./ProjectModal";

export const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer p-4 rounded-xl border border-white/10 hover:shadow-lg hover:-translate-y-1 transition"
        onClick={() => setOpen(true)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-contain max-h-[300px] mx-auto"
        />

        <h3 className="text-xl font-bold mt-4">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-blue-500/10 text-blue-400 text-sm px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      {open && <Modal project={project} onClose={() => setOpen(false)} />}
    </>
  );
};

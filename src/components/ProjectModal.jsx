export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-900 rounded-lg max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-zinc-500 hover:text-red-500"
        >
          &times;
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-contain max-h-[300px] mx-auto"
        />

        <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
        <p className="text-zinc-400 mt-2 text-justify">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-blue-500/10 text-blue-400 text-sm px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}

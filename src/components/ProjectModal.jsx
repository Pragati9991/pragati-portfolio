import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-2"
    >
      <div
        className="bg-white dark:bg-zinc-900 rounded-lg max-w-3xl w-full p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-5xl text-zinc-500 hover:text-blue-400 transition-colors"
        >
          &times;
        </button>

        {project.images?.length > 0 && (
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            className="w-full max-h-[300px] mt-2"
          >
            {project.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${project.title} ${index}`}
                  className="w-full h-auto object-contain max-h-[300px] mx-auto p-2"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
        <p className="text-zinc-400 mt-2 text-justify">{project.description}</p>

        {project.tech?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-blue-500/10 text-blue-400 text-sm px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {project.techIcons?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {project.techIcons.map((icon, i) => (
              <img key={i} src={icon} alt="tech icon" className="w-8 h-8" />
            ))}
          </div>
        )}

        <div className="flex justify-end items-center mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-base"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProjectModal({ project, onClose }) {
  // Escape key to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") onClose();
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
    >
      <div
        className="bg-white dark:bg-zinc-900 rounded-lg max-w-3xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 z-50 text-5xl text-zinc-500 hover:text-blue-400 transition-colors cursor-pointer"
        >
          &times;
        </button>

        {/* Swiper in Modal */}
        {project.images && (
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            className="w-full max-h-[300px]"
          >
            {project.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${project.title} ${index}`}
                  className="w-full h-auto object-contain max-h-[300px] mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
        <p className="text-zinc-400 mt-2 text-justify">{project.description}</p>

        {project.techIcons?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {project.techIcons.map((icon, i) => (
              <img key={i} src={icon} alt="tech icon" className="w-8 h-8" />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-4">
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

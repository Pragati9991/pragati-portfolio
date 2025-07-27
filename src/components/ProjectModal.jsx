import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectModal({ project, onClose }) {
  // Close on 'Escape' key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
    >
      <div
        className="bg-white dark:bg-zinc-900 rounded-lg max-w-2xl p-6 relative w-[90%] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-5xl text-zinc-500 hover:text-blue-400 transition-colors"
        >
          &times;
        </button>

        {/* Image Slider */}
        {project.images?.length > 0 && (
          <div className="relative w-full mb-12">
            {/* Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              className="w-full"       
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

            {/* Pagination Dots Container placed AFTER Swiper */}
            <div className="custom-swiper-pagination mt-4 text-center" />
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-2xl font-bold mt-2 text-center">{project.title}</h3>

        {/* Description */}
        <p className="text-zinc-400 mt-2 text-justify">{project.description}</p>

        {/* Technologies */}
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

        {/* Icons */}
        {project.techIcons?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {project.techIcons.map((icon, i) => (
              <img key={i} src={icon} alt="tech icon" className="w-8 h-8" />
            ))}
          </div>
        )}

        {/* Project Link */}
        <div className="flex justify-center items-center mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}

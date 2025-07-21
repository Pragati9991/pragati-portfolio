import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="flex justify-center gap-4 mb-3 text-xl">
        <a
          href="https://github.com/Pragati9991"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pragati-j-7452281b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm text-white/70">
        Copyright © Pragati Juyal
      </p>
    </footer>
  );
}

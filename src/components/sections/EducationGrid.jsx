import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap, FaLanguage, FaUniversity } from "react-icons/fa";
import ifpImg from "/src/assets/images/ifp.jpg";
import oleImg from "/src/assets/images/ole.png";
import ojaImg from "/src/assets/images/oja.png";
import hnbImg from "/src/assets/images/hnb.jpg";

export function EducationGrid() {
  const education = [
    {
      icon: <FaGraduationCap size={28} />,
      logo: ifpImg,
      title: "Advanced Vocational Certificate in Multiplatform Application Development(DAM)",
      school: "IFP L’Hospitalet, Barcelona, Spain",
      date: "Sep 2023 – Jun 2025",
    },
    {
      icon: <FaLanguage size={28} />,
      logo: oleImg,
      title: "Spanish Language Course (C1)",
      school: "Olé Language School, Barcelona, Spain",
      date: "Jan 2022 – Jun 2022",
    },
    {
      icon: <FaLanguage size={28} />,
      logo: ojaImg,
      title: "Japanese Language Course (JLPT N2)",
      school: "OJA Japanese Academy, Osaka, Japan",
      date: "Apr 2015 – Mar 2017",
    },
    {
      icon: <FaUniversity size={28} />,
      logo: hnbImg,
      title: "Bachelor’s in Science (Physics, Chemistry, Mathematics)",
      school: "Hemwati Nandan Bahuguna University, India",
      date: "2011 – 2014",
    },
  ];

  return (
    <section id="education" className="py-20 bg-black text-white">
      <RevealOnScroll>
      <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Education
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-white/10 rounded-xl p-6 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col items-center text-center"
            >
              {item.logo && (
                <div className="w-32 h-20 overflow-hidden mb-4 rounded-md bg-white p-2 shadow">
                  <img
                    src={item.logo}
                    alt={item.school}
                    className={`w-full h-full ${
                      item.school.includes("Olé")
                        ? "object-contain scale-[1.2]"
                        : item.school.includes("IFP")
                        ? "object-contain scale-[1.3]"
                        : item.school.includes("OJA")
                        ? "object-contain scale-[1.2]"
                        : item.school.includes("Hemwati")
                        ? "object-contain scale-[1.4]"
                        : "object-contain scale-100"
                    }`}
                  />
                </div>
              )}
              <div className="text-yellow-400 mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.school}</p>
              <p className="text-xs text-gray-500 mt-2">{item.date}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

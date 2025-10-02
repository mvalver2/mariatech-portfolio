import RevealOnScroll from "../RevealOnScroll";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiFigma, SiFirebase, SiMysql, SiC, SiCplusplus } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi"; 
import { MdDesignServices } from "react-icons/md"; 

export const About = () => {
  const frontendSkills = [
    { name: "React", icon: <SiReact size={20} className="text-blue-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={20} className="text-blue-600" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={20} className="text-teal-400" /> },
    { name: "Figma", icon: <SiFigma size={20} className="text-pink-400" /> },
    { name: "UI/UX Design", icon: <MdDesignServices size={20} className="text-purple-400" /> },
    { name: "Prototyping", icon: <BiCodeAlt size={20} className="text-indigo-400" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs size={20} className="text-green-500" /> },
    { name: "Python", icon: <SiPython size={20} className="text-yellow-400" /> },
    { name: "Firebase Realtime DB", icon: <SiFirebase size={20} className="text-orange-400" /> },
    { name: "Java", icon: <BiCodeAlt size={20} className="text-red-500" /> },
    { name: "C++", icon: <SiCplusplus size={20} className="text-blue-700" /> },
    { name: "C", icon: <SiC size={20} className="text-gray-400" /> },
    { name: "Assembly", icon: <BiCodeAlt size={20} className="text-green-700" /> },
    { name: "SQL", icon: <SiMysql size={20} className="text-blue-600" /> },
    { name: "Genomic Sequencing", icon: <BiCodeAlt size={20} className="text-pink-400" /> },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Intro */}
          <div className="rounded-2xl p-8 border border-white/10 bg-blue-800 hover:shadow-lg transition-all mb-10">
            <p className="text-gray-200 text-lg">
              Hi! I’m a Computer Science student at Johns Hopkins University, passionate about
              building creative, user-centered software solutions. I enjoy crafting
              intuitive interfaces, scalable backends, and working with real-time data while continuously learning
              new technologies.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-xl p-6 border border-white/10 bg-blue-800 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Frontend & Design</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                  >
                    {tech.icon} <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 border border-white/10 bg-blue-800 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-4 text-purple-300">Backend & Systems</h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-purple-500/10 text-purple-300 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-md transition"
                  >
                    {tech.icon} <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 bg-blue-800 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 text-green-400">Education</h3>
              <ul className="space-y-3">
                <li className="bg-green-500/10 text-green-400 py-2 px-3 rounded-full inline-block">
                  <strong>B.S. Computer Science</strong> - Johns Hopkins University (2022-2026)
                </li>
                <li className="text-gray-200 text-sm mt-2">
                  <strong>Relevant Coursework:</strong> Human-Computer Interaction, Accessible Computing, Data Structures, Algorithms, Fullstack JavaScript, UI/Mobile Development, AI, Computational Genomics
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-white/10 bg-blue-800 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Work Experience</h3>
              <div className="space-y-6 text-gray-200">
                <div className="bg-yellow-500/10 rounded-xl p-3 hover:shadow-md transition">
                  <h4 className="font-semibold text-lg">Software Developer Intern - ASRC Federal</h4>
                  <span className="text-sm text-yellow-300">May 2025 - Aug 2025</span>
                  <p className="mt-1 text-gray-300 text-sm">
                    Redesigned NOAA's FMDS dashboard, improving usability, navigation, and AI-assisted user support for a cleaner interface.
                  </p>
                </div>

                <div className="bg-yellow-500/10 rounded-xl p-3 hover:shadow-md transition">
                  <h4 className="font-semibold text-lg">Software Engineer Intern - Barrax Company</h4>
                  <span className="text-sm text-yellow-300">May 2024 - Aug 2024</span>
                  <p className="mt-1 text-gray-300 text-sm">
                    Built three functional websites, integrated newsletters/job boards, and implemented Google Analytics & promotional strategies.
                  </p>
                </div>

                <div className="bg-yellow-500/10 rounded-xl p-3 hover:shadow-md transition">
                  <h4 className="font-semibold text-lg">IT Intern - Child Parent Institute</h4>
                  <span className="text-sm text-yellow-300">Jun 2023 - Aug 2023</span>
                  <p className="mt-1 text-gray-300 text-sm">
                    Reduced hardware costs by 10% and created virtual workstations to support remote work, contributing to strategic IT planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import InfiniteScroll from "../animations/InfiniteScroll";
import { RevealOnScroll } from "../RevealOnScroll";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const About = () => {
  const items = [
    { content: <DiReact className="w-[150px] h-[150px] " /> },
    { content: <p>REACT</p> },
    { content: <DiHtml5 className="w-[150px] h-[150px] " /> },
    { content: <p>HTML</p> },
    { content: <SiTypescript className="w-[100px] h-[100px] " /> },
    { content: <p>TYPESCRIPT</p> },
    { content: <RiNextjsFill className="w-[100px] h-[100px] " /> },
    { content: <p>NEXT.JS</p> },
    { content: <DiJavascript1 className="w-[100px] h-[100px] " /> },
    { content: <p>JAVASCRIPT</p> },
    { content: <DiNodejs className="w-[100px] h-[100px] " /> },
    { content: <p>NODE.JS</p> },
    { content: <SiTailwindcss className="w-[100px] h-[100px] " /> },
    { content: <p>TAILWIND CSS</p> },
    { content: <DiCss3 className="w-[100px] h-[100px] " /> },
    { content: <p>CSS</p> },
  ];

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn",
    "Git",
    "GitHub",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Sequelize ORM",
    "JWT",
    "RESTful APIs",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Full-Stack Developer with half a decade of experience designing
              database schemas, building secure RESTful APIs, and delivering
              scalable SaaS and fintech applications using JavaScript, Node.js,
              Express, Next.js, and TypeScript. Expertise in authentication &
              authorization (JWT, HttpOnly cookies, role-based access),
              compliance-friendly data handling, audit-safe transactions, and
              system design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Sc. Building Technology</strong> - The Federal
                  University of Technology Akure (2024)
                </li>
                <li>
                  <strong>NYSC</strong> (2024 - 2025)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                � Professional Experience{" "}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Fullstack Engineer</strong> - Flospay (2025 - Present)
                </li>
                <li>
                  <strong>Fullstack Developer</strong> - Freelance/Contract
                  (Mahjeq, Luxhomes, Pharmmar, Ajopay)
                </li>
              </ul>
            </div>
          </div>

          <div
            className=" mt-[50px]  rounded-xl border-white/10 border"
            style={{ height: "500px", position: "relative" }}
          >
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={3}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

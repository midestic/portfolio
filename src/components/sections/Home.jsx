import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 space-y-[50px]">
          <div className="typewriter">
            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I&apos;m Usman Badmus
            </h1>
          </div>
          <p className="text-gray-400 text-lg  mx-auto w-[50%] max-md:w-[100%]">
            I&apos;m a full-stack developer passionate about building
            functional, reliable, and scalable digital experiences. I care
            deeply about clean code, intuitive UI, and seamless backend
            performance. For me, it’s not just about how things look—it’s about
            how well they work and the real problems they solve.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10"
            >
              CONTACT ME
            </a>
          </div>

          <div className="mt-8 max-w-xs mx-auto">
            <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 flex-wrap">
              <a
                href="https://www.linkedin.com/in/usman-badmus-59951b24a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/midestic?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://x.com/midestic_JS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.facebook.com/usman.badmus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-red-400 transition"
              >
                <FaFacebook size={30} />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

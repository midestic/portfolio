import Flospay from "../projects/flospay";
import IGWApp from "../projects/IGWApp";
import Mahjeq from "../projects/Mahjeq";
import Luxhomes from "../projects/Luxhomes";
import Pharmmar from "../projects/Pharmmar";
import AjoPay from "../projects/AjoPay";
// import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {/* <RevealOnScroll> */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <Flospay />

          <IGWApp />

          <Mahjeq />

          <Luxhomes />

          <Pharmmar />

          <AjoPay />
        </div>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};

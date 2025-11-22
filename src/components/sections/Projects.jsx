import AITask from "../projects/AITask";
import DaTooth from "../projects/Datooth";
import Ecommerce from "../projects/Ecommerce";
import Famr from "../projects/Famr";
import Lapo from "../projects/Lapo";
import Mahjeq from "../projects/Mahjeq";
import Mandem from "../projects/Mandem";
import MidesticData from "../projects/MidesticData";
import Naptip from "../projects/Naptip";
import Pharmmar from "../projects/Pharmmar";
import Recipe from "../projects/Recipe";
import TechCare from "../projects/TechCare";
import WeatherApp from "../projects/WeatherApp";
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
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <Mahjeq />

          <DaTooth />

          <Ecommerce />

          <Naptip />

          <Pharmmar />

          <Famr />

          <AITask />

          <TechCare />

          <Lapo />

          <MidesticData />

          <Recipe />

          <Mandem />

          <WeatherApp />
        </div>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};

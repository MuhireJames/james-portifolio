import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-gray-950"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src="/James.png"
              alt="MUHIRE James"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />
          </div>

          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm MUHIRE James
            </h1>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl">
              A full-stack developer with expertise in both the Django and MERN stacks.
              My background in Clinical Medicine gives me a unique perspective when building
              user-centered solutions. I transitioned into tech to solve real-world problems
              through software. I enjoy developing scalable backend systems and responsive
              front-end interfaces.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "TailwindCSS",
    "CSS",
    "BootStrap"
  ];

  const backendSkills = [
    "Node.js",
    "MongoDB",
    "GraphQL",
    "RESTful API",
    "Express.js",
    "PostgreSQL",
    "Django",
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
              I’m a full-stack developer with a passion for creating interactive
              web applications. I have experience in both frontend and backend
              development, and I love to learn new technologies and frameworks.
              My goal is to build solutions that offer both exceptional
              performance and a delightful user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Clinical Medicine</strong> - University of
                  Rwanda University (2016-2021)
                </li>
                <li>
                  <strong> Web Development Bootcamp</strong> - Udemy (2023)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Self-Directed Projects (2024–Present)
                  </h4>
                  <p>
                    Built and deployed several web applications independently,
                    applying modern frontend and backend technologies.
                    Demonstrated strong problem-solving, project management, and
                    continuous learning skills.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Professional Foundation Program – ALX Africa
                    (01/2025-4/2025)
                  </h4>
                  <p>
                    Completed intensive training focused on professional skills,
                    leadership, and foundational software development.
                    Collaborated with peers on real-world projects and developed
                    a growth mindset.
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

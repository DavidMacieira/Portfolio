
import { motion } from "framer-motion";

const skills = [
  {
    number: "01",
    icon: "</>",
    title: "Frontend",
    description: "Interfaces modernas, responsivas e intuitivas.",
    technologies: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    number: "02",
    icon: "{ }",
    title: "Backend",
    description: "Lógica, programação e desenvolvimento de aplicações.",
    technologies: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "C#",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
    ],
  },
  {
    number: "03",
    icon: ">_",
    title: "Bases de dados",
    description: "Organização, armazenamento e gestão de informação.",
    technologies: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "SQL",
        logo: null,
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SQL"
      role="img"
    >
      <ellipse cx="24" cy="10" rx="16" ry="6" stroke="currentColor" strokeWidth="3" />
      <path
        d="M8 10V37C8 40.3 15.2 43 24 43C32.8 43 40 40.3 40 37V10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M8 23C8 26.3 15.2 29 24 29C32.8 29 40 26.3 40 23"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="skills-heading">
          <span className="eyebrow">(02) COMPETÊNCIAS</span>

          <h2 className="section-title">
            Do frontend ao <em>backend.</em>
          </h2>

          <p className="skills-intro">
            Tecnologias e ferramentas com que tenho trabalhado
            ao longo do meu percurso.
          </p>
        </div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {skills.map((skill) => (
            <motion.article
              className="skill-card"
              key={skill.title}
              variants={cardVariants}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -9,
                transition: { duration: 0.3 },
              }}
            >
              <div className="skill-card-top">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-number">{skill.number}</span>
              </div>

              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              <div className="skill-technologies">
                {skill.technologies.map((tech, index) => (
                  <motion.div
                    className="skill-technology"
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.07 + 0.2,
                      duration: 0.35,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.06,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="technology-logo">
                      {tech.logo ? (
                        <img
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          loading="lazy"
                        />
                      ) : (
                        <DatabaseIcon />
                      )}
                    </div>

                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="skill-card-decoration" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


import { motion, useReducedMotion } from "framer-motion";
import type { Language } from "../types";

const skills = [
  {
    number: "01",
    icon: "</>",
    title: {
      pt: "Frontend",
      en: "Frontend",
    },
    description: {
      pt: "Interfaces modernas, responsivas e intuitivas.",
      en: "Modern, responsive and intuitive interfaces.",
    },
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
    title: {
      pt: "Backend",
      en: "Backend",
    },
    description: {
      pt: "Lógica, programação e desenvolvimento de aplicações.",
      en: "Logic, programming and application development.",
    },
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
    title: {
      pt: "Bases de dados",
      en: "Databases",
    },
    description: {
      pt: "Organização, armazenamento e gestão de informação.",
      en: "Data organization, storage and management.",
    },
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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const technologyVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse
        cx="24"
        cy="10"
        rx="16"
        ry="6"
        stroke="currentColor"
        strokeWidth="3"
      />

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

export default function Skills({
  language,
}: {
  language: Language;
}) {
  const english = language === "en";
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">

        {/* Section heading */}

        <motion.div
          className="skills-heading"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={cardVariants}
        >
          <motion.span
            className="eyebrow"
            variants={itemVariants}
          >
            (02) {english ? "SKILLS" : "COMPETÊNCIAS"}
          </motion.span>

          <motion.h2
            className="section-title"
            variants={itemVariants}
          >
            {english ? "From frontend to " : "Do frontend ao "}
            <em>backend.</em>
          </motion.h2>

          <motion.p
            className="skills-intro"
            variants={itemVariants}
          >
            {english
              ? "Technologies and tools I have worked with throughout my journey."
              : "Tecnologias e ferramentas com que tenho trabalhado ao longo do meu percurso."}
          </motion.p>
        </motion.div>

        {/* Skills cards */}

        <motion.div
          className="skills-grid"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={gridVariants}
        >
          {skills.map((skill) => (
            <motion.article
              className="skill-card"
              key={skill.number}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -7,
                      transition: { duration: 0.3 },
                    }
              }
            >
              <motion.div
                className="skill-card-top"
                variants={itemVariants}
              >
                <span className="skill-icon">
                  {skill.icon}
                </span>

                <span className="skill-number">
                  {skill.number}
                </span>
              </motion.div>

              <motion.h3 variants={itemVariants}>
                {skill.title[language]}
              </motion.h3>

              <motion.p variants={itemVariants}>
                {skill.description[language]}
              </motion.p>

              <motion.div
                className="skill-technologies"
                variants={gridVariants}
              >
                {skill.technologies.map((tech) => (
                  <motion.div
                    className="skill-technology"
                    key={tech.name}
                    variants={technologyVariants}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -4,
                            scale: 1.06,
                            transition: { duration: 0.2 },
                          }
                    }
                  >
                    <div className="technology-logo">
                      {tech.logo ? (
                        <img
                          src={tech.logo}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <DatabaseIcon />
                      )}
                    </div>

                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div
                className="skill-card-decoration"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

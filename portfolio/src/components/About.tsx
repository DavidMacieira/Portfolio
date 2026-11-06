
import { motion, useReducedMotion } from "framer-motion";
import type { Language } from "../types";

const education = [
  {
    type: {
      pt: "FORMAÇÃO ACADÉMICA",
      en: "ACADEMIC EDUCATION",
    },
    title: {
      pt: " CTESP - Desenvolvimento Web e Multimédia",
      en: "CTESP - Web Development and Multimedia",
    },
    institution: "Universidade Politécnica do Cávado e do Ave",
  },
  {
    type: {
      pt: "CURSO",
      en: "COURSE",
    },
    title: "Git & GitHub",
    institution: {
      pt: "Microsoft Learn · Em processo",
      en: "Microsoft Learn · In progress",
    },
  },
  {
    type: {
      pt: "FORMAÇÃO COMPLEMENTAR",
      en: "ADDITIONAL EDUCATION",
    },
    title: "Wall Street English",
    institution: {
      pt: "Formação em Inglês",
      en: "English language training",
    },
  },
];

const experience = [
  {
    number: "01",
    company: "GIGASTORE",
    area: {
      pt: "HARDWARE E SUPORTE TÉCNICO",
      en: "HARDWARE & TECHNICAL SUPPORT",
    },
    description: {
      pt: "Experiência em diagnóstico, manutenção e reparação de equipamentos tecnológicos, incluindo smartphones, comutadores, televisões, sistemas operativos e comandos de PlayStation.",
      en: "Experience in diagnosing, maintaining and repairing technological equipment, including smartphones, switches, televisions, operating systems and PlayStation controllers.",
    },
    technologies: ["Hardware", "Troubleshooting", "Technical Support"],
  },
  {
    number: "02",
    company: "FRICON",
    area: {
      pt: "DESENVOLVIMENTO DE SOFTWARE",
      en: "SOFTWARE DEVELOPMENT",
    },
    description: {
      pt: "Participação no desenvolvimento de aplicações para a empresa, com contacto com Figma, React, frontend, backend e bases de dados.",
      en: "Contributed to the development of applications for the company, working with Figma, React, frontend, backend and databases.",
    },
    technologies: ["Figma", "React", "Frontend", "Backend", "Databases"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function About({
  language,
}: {
  language: Language;
}) {
  const english = language === "en";
  const shouldReduceMotion = useReducedMotion();

  const animationProps = {
    initial: shouldReduceMotion ? false : "hidden",
    whileInView: "visible" as const,
    viewport: {
      once: true,
      amount: 0.15,
    },
    variants: containerVariants,
  };

  return (
    <section className="about-section" id="about">
      <div className="about-grid">

        {/* ABOUT ME */}

        <motion.div
          className="about-text"
          {...animationProps}
        >
          <motion.span
            className="eyebrow"
            variants={itemVariants}
          >
            (03) {english ? "ABOUT" : "SOBRE"}
          </motion.span>

          <motion.h2 variants={itemVariants}>
            {english ? "From idea to" : "Da ideia à"}
            <br />
            <em>
              {english ? "implementation." : "implementação."}
            </em>
          </motion.h2>

          <motion.p variants={itemVariants}>
            {english
              ? "I'm David, a Web Development and Multimedia student at UPCA, interested in technology and digital creation."
              : "Sou o David, estudante de Desenvolvimento Web e Multimédia no UPCA, interessado em tecnologia e criação digital."}
          </motion.p>

          <motion.p variants={itemVariants}>
            {english
              ? "I enjoy understanding people's needs, turning ideas into practical solutions and taking part in projects from the initial concept to implementation."
              : "Gosto de perceber as necessidades das pessoas, transformar ideias em soluções práticas e participar nos projetos desde a conceção inicial até à implementação."}
          </motion.p>

          <motion.p variants={itemVariants}>
            {english
              ? "I'm particularly interested in full-stack development, combining frontend, backend and databases to build useful and functional applications."
              : "Tenho particular interesse no desenvolvimento full-stack, juntando frontend, backend e bases de dados para criar aplicações úteis e funcionais."}
          </motion.p>

          <motion.p variants={itemVariants}>
            {english
              ? "I'm looking for opportunities to apply what I've learned, take on new challenges, work with different technologies and continue growing as a developer."
              : "Procuro oportunidades para aplicar os meus conhecimentos, enfrentar novos desafios, trabalhar com diferentes tecnologias e continuar a evoluir como programador."}
          </motion.p>

          <motion.a
            href="/cv.pdf"
            className="button-primary"
            download
            variants={itemVariants}
            whileHover={
              shouldReduceMotion ? undefined : { y: -4 }
            }
            whileTap={
              shouldReduceMotion ? undefined : { scale: 0.97 }
            }
          >
            {english ? "Download CV" : "Descarregar CV"}
            <span aria-hidden="true">→</span>
          </motion.a>
        </motion.div>

        {/* PROFESSIONAL JOURNEY */}

        <div className="about-journey">

          {/* EDUCATION */}

          <motion.div
            className="journey-block education"
            {...animationProps}
          >
            <motion.span
              className="eyebrow"
              variants={itemVariants}
            >
              (04) {english ? "EDUCATION" : "FORMAÇÃO"}
            </motion.span>

            <motion.h2 variants={itemVariants}>
              {english ? "Education and " : "Formação e "}
              <em>{english ? "courses." : "cursos."}</em>
            </motion.h2>

            <div className="education-list">
{education.map((item, index) => (
  <motion.article
    className="education-item journey-item"
    key={index}
    variants={itemVariants}
  >
                  <div className="journey-marker">
                    <span />
                  </div>

                  <div className="journey-item-content">
                    <small>
                      {typeof item.type === "string"
                        ? item.type
                        : item.type[language]}
                    </small>

                    <h3>
                      {typeof item.title === "string"
                        ? item.title
                        : item.title[language]}
                    </h3>

                    <p>
                      {typeof item.institution === "string"
                        ? item.institution
                        : item.institution[language]}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* EXPERIENCE */}

          <motion.div
            className="journey-block experience"
            {...animationProps}
          >
            <motion.span
              className="eyebrow"
              variants={itemVariants}
            >
              (05) {english ? "EXPERIENCE" : "EXPERIÊNCIA"}
            </motion.span>

            <motion.h2 variants={itemVariants}>
              {english ? "Where I gained " : "Onde ganhei "}
              <em>
                {english ? "experience." : "experiência."}
              </em>
            </motion.h2>

            <div className="experience-list">
              {experience.map((item) => (
                <motion.article
                  className="experience-item journey-item"
                  key={item.company}
                  variants={itemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: 5,
                          transition: { duration: 0.25 },
                        }
                  }
                >
                  <div className="journey-marker">
                    <span />
                  </div>

                  <div className="journey-item-content">
                    <small>
                      {item.number} / {item.area[language]}
                    </small>

                    <h3>{item.company}</h3>

                    <p>{item.description[language]}</p>

                    <div className="experience-tags">
                      {item.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

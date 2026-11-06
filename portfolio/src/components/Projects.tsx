
import { motion, useReducedMotion } from "framer-motion";

import restauranteImage from "../assets/Restaurante.png";
import waveImage from "../assets/wave.ia.png";
import barbeariaImage from "../assets/barbearia.png";

import type { Language } from "../types";

const projects = [
  {
    number: "01",
    category: "WEB APP",
    name: "Restaurante Macieira",
    description: {
      pt: "Plataforma digital para um restaurante português, com menu, reservas e gestão administrativa.",
      en: "Digital platform for a Portuguese restaurant, featuring a menu, reservations and administration system.",
    },
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: restauranteImage,
    github: "https://github.com/DavidMacieira/Restaurante-Macieira",
    demo: null,
  },
  {
    number: "02",
    category: "AI WEB APPLICATION",
    name: "Wave IA",
    description: {
      pt: "Experiência digital com um assistente de inteligência artificial que apresenta serviços e facilita o contacto através do WhatsApp.",
      en: "Digital experience featuring an AI assistant that presents services and facilitates contact through WhatsApp.",
    },
    technologies: ["React", "TypeScript", "Tailwind"],
    image: waveImage,
    github: "https://github.com/DavidMacieira/WAVE-IA",
    demo: "https://wave-ia.netlify.app/",
  },
  {
    number: "03",
    category: "WEBSITE",
    name: "Barbearia João Angeiras",
    description: {
      pt: "Website para uma barbearia, com apresentação dos serviços e sistema de marcações.",
      en: "Website for a barbershop, featuring service information and an appointment booking system.",
    },
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Apps Script",
      "Google Sheets",
    ],
    image: barbeariaImage,
    github: "https://github.com/DavidMacieira/Site-Barbeiro",
    demo: "https://barbearia-angeiras.netlify.app/",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
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
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Projects({
  language,
}: {
  language: Language;
}) {
  const english = language === "en";
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-heading"
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={cardVariants}
      >
        <motion.div variants={itemVariants}>
          <span className="eyebrow">
            (01) {english ? "PROJECTS" : "PROJETOS"}
          </span>

          <h2>
            {english ? "Selected" : "Trabalho"}
            <br />
            <em>{english ? "work." : "selecionado."}</em>
          </h2>
        </motion.div>

        <motion.p variants={itemVariants}>
          {english
            ? "A selection of projects combining frontend, backend and databases."
            : "Uma seleção de projetos onde juntei frontend, backend e bases de dados."}
        </motion.p>
      </motion.div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className={`project-card project-card-${index + 1}`}
            variants={cardVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
              margin: "0px 0px -60px 0px",
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -5, transition: { duration: 0.3 } }
            }
          >
            <div className="project-details">
              <motion.span
                className="project-category"
                variants={itemVariants}
              >
                {project.number} / {project.category}
              </motion.span>

              <motion.a
                href={project.demo || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
                aria-label={
                  english
                    ? `View ${project.name}`
                    : `Ver ${project.name}`
                }
                variants={itemVariants}
              >
                ↗
              </motion.a>

              <motion.h3 variants={itemVariants}>
                {project.name}
              </motion.h3>

              <motion.p variants={itemVariants}>
                {project.description[language]}
              </motion.p>

              <motion.div
                className="project-tags"
                variants={itemVariants}
              >
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </motion.div>

              <motion.div
                className="project-links"
                variants={itemVariants}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {english ? "Code" : "Código"} →
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {english ? "View website" : "Ver website"} ↗
                  </a>
                )}
              </motion.div>
            </div>

            <motion.div
              className="project-image"
              variants={itemVariants}
            >
              <div className="browser-frame">
                <div className="browser-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="browser-content">
                  <img
                    src={project.image}
                    alt={
                      english
                        ? `Preview of ${project.name}`
                        : `Pré-visualização do projeto ${project.name}`
                    }
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>

      <motion.a
        href="https://github.com/DavidMacieira"
        target="_blank"
        rel="noopener noreferrer"
        className="more-projects"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {english ? "See more projects" : "Ver mais projetos"}

        <span aria-hidden="true">→</span>
      </motion.a>
    </section>
  );
}

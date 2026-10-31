
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "WEB APP",
    name: "Macieira",
    description:
      "Plataforma digital para um restaurante português, com menu, reservas e gestão administrativa.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/projects/macieira.png",
    github: "https://github.com/DavidMacieira",
    demo: "#",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    name: "WaveStudio",
    description:
      "Identidade digital para um estúdio criativo focado em desenvolvimento web e comunicação visual.",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "/projects/wavestudio.png",
    github: "https://github.com/DavidMacieira/wave-studio",
    demo: "#",
  },
  {
    number: "03",
    category: "WEB APP",
    name: "App Arquitetura",
    description:
      "Aplicação de organização académica com calendário, tarefas e gestão de horários.",
    technologies: ["React", "TypeScript", "Supabase"],
    image: "/projects/arquitetura.png",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div>
          <span className="eyebrow">(01) PROJETOS</span>
          <h2>
            Trabalho
            <br />
            <em>selecionado.</em>
          </h2>
        </div>

        <p>
          Uma seleção de projetos onde juntei frontend, backend e bases de dados.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className={`project-card project-card-${index + 1}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-details">
              <span className="project-category">
                {project.number} / {project.category}
              </span>

              <a href={project.demo} className="project-arrow">↗</a>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">Código ↗</a>
                <a href={project.demo} target="_blank" rel="noreferrer">Demo ↗</a>
              </div>
            </div>

            <div className="project-image">
              <div className="browser-frame">
                <div className="browser-dots">
                  <span /><span /><span />
                </div>
                <img src={project.image} alt={`Captura de ${project.name}`} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <a href="https://github.com/DavidMacieira" target="_blank" rel="noreferrer" className="more-projects">
        Ver mais projetos <span>↗</span>
      </a>
    </section>
  );
}


import { motion } from "framer-motion";

const skills = [
  {
    icon: "</>",
    title: "Frontend",
    description: "Interfaces rápidas, acessíveis e bem cuidadas.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    icon: "{ }",
    title: "Backend",
    description: "APIs robustas, seguras e fáceis de manter.",
    technologies: ["Node.js", "Python", "FastAPI", "APIs REST"],
  },
  {
    icon: ">_",
    title: "Dados & DevOps",
    description: "Bases de dados, contentores e entrega contínua.",
    technologies: ["PostgreSQL", "SQL", "Docker", "Git"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <span className="eyebrow">(02) COMPETÊNCIAS</span>

        <h2 className="section-title">
          Do frontend ao <em>backend.</em>
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.article
              className="skill-card"
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              <div className="skill-tags">
                {skill.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

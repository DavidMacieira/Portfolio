
import { motion } from "framer-motion";

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Supabase",
  "HTML & CSS",
  "Git",
];

export default function TechStack() {
  return (
    <section className="tech-stack">
      <p className="tech-label">TECNOLOGIAS COM QUE TRABALHO</p>

      <div className="tech-list">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

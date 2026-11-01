
import { motion } from "framer-motion";

const education = [
  {
    date: "2024 — PRESENTE",
    type: "FORMAÇÃO",
    title: "Desenvolvimento Web e Multimédia",
    institution: "Universidade Politécnica do Cávado e do Ave",
  },
  {
    date: "2023",
    type: "ESTÁGIO",
    title: "Estágio Curricular - GIGASTORE",
    institution: "Estágio na Gigastore",
  },
    {
    date: "2023",
    type: "ESTÁGIO",
    title: "Estágio Curricular - FRICON",
    institution: "Estágio na Fricon",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">(03) SOBRE</span>

          <h2>
            Da ideia à
            <br />
            <em>implementação.</em>
          </h2>

          <p>
            Sou estudante de Desenvolvimento de Software e gosto de
            transformar ideias em soluções digitais.
          </p>

          <p>
            Interesso-me pelo desenvolvimento full stack, pela criação
            de aplicações web e por aprender novas tecnologias.
            Procuro constantemente novos desafios que me permitam evoluir.
          </p>

          <a href="/cv.pdf" className="button-primary" download>
            Descarregar CV ↗
          </a>
        </motion.div>

        <div className="education">
          <span className="eyebrow">(04) FORMAÇÃO</span>
          <h2>
            Formação e <em>cursos.</em>
          </h2>

          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.title}>
                <div>
                  <span>{item.date}</span>
                  <small>{item.type}</small>
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                </div>
              </article>
            ))}

            <article className="education-item">
              <div>
                <span>2026</span>
                <small>CURSO</small>
              </div>
              <div>
                <h3>Git & GitHub</h3>
                <p>Curso Microsoft - Em processo</p>
              </div>
            </article>
                        <article className="education-item">
              <div>
                <span>2026</span>
                <small>CURSO</small>
              </div>
              <div>
                <h3>Wall Street English</h3>
                <p>Curso de Inglês</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

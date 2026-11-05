
import { motion } from "framer-motion";
import type { Language } from "../types";

const education = [
  {
    type: "FORMAÇÃO ACADÉMICA",
    title: "Desenvolvimento Web e Multimédia",
    institution: "Instituto Politécnico do Cávado e do Ave",
  },
  {
    type: "CURSO",
    title: "Git & GitHub",
    institution: "Microsoft Learn · Em processo",
  },
  {
    type: "FORMAÇÃO COMPLEMENTAR",
    title: "Wall Street English",
    institution: "Formação em Inglês",
  },
];

const experience = [
  {
    type: "ESTÁGIO CURRICULAR",
    title: "GIGASTORE",
    description: "Experiência em contexto de estágio curricular.",
  },
  {
    type: "ESTÁGIO CURRICULAR",
    title: "FRICON",
    description: "Experiência em contexto de estágio curricular.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About({ language }: { language: Language }) {
  const english = language === "en";
  return (
    <section className="about-section" id="about">
      <div className="about-grid">

        {/* SOBRE MIM */}
        <motion.div
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
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
            <em>{english ? "implementation." : "implementação."}</em>
          </motion.h2>

          <motion.p variants={itemVariants}>
            {english ? "I enjoy following a project from its first idea through to completion." : "Gosto de acompanhar um projeto desde a primeira ideia até à sua concretização."}
          </motion.p>

          <motion.p variants={itemVariants}>
            Interessa-me perceber as necessidades de cada cliente,
            discutir possibilidades, organizar ideias e analisar
            a melhor forma de transformar cada desafio numa
            solução digital.
          </motion.p>

          <motion.p variants={itemVariants}>
            Gosto de estar envolvido em todas as etapas do
            desenvolvimento, desde o planeamento até à
            implementação do frontend, backend e bases de dados.
          </motion.p>

          <motion.p variants={itemVariants}>
            Sou estudante de Desenvolvimento de Software e
            procuro uma oportunidade onde possa trabalhar em
            projetos diferentes, aprender continuamente,
            explorar novas tecnologias e evoluir como programador.
          </motion.p>

          <motion.a
            href="/cv.pdf"
            className="button-primary"
            download
            variants={itemVariants}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            {english ? "Download CV" : "Descarregar CV"} <span>→</span>
          </motion.a>
        </motion.div>

        {/* PERCURSO */}
        <div className="about-journey">

          {/* FORMAÇÃO */}
          <motion.div
            className="journey-block education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.13 },
              },
            }}
          >
            <motion.span
              className="eyebrow"
              variants={itemVariants}
            >
              (04) FORMAÇÃO
            </motion.span>

            <motion.h2 variants={itemVariants}>
              Formação e <em>cursos.</em>
            </motion.h2>

            <div className="education-list">
              {education.map((item) => (
                <motion.article
                  className="education-item journey-item"
                  key={item.title}
                  variants={itemVariants}
                >
                  <div className="journey-marker">
                    <span />
                  </div>

                  <div>
                    <small>{item.type}</small>
                    <h3>{item.title}</h3>
                    <p>{item.institution}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* EXPERIÊNCIA */}
          <motion.div
            className="journey-block experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.13 },
              },
            }}
          >
            <motion.span
              className="eyebrow"
              variants={itemVariants}
            >
              (05) EXPERIÊNCIA
            </motion.span>

            <motion.h2 variants={itemVariants}>
              Onde ganhei <em>experiência.</em>
            </motion.h2>

            <div className="experience-list">
              {experience.map((item) => (
                <motion.article
                  className="experience-item journey-item"
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="journey-marker">
                    <span />
                  </div>

                  <div>
                    <small>{item.type}</small>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
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

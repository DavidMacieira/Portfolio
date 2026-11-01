
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroImage from "../assets/hero.jpeg";

const textVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.13,
      duration: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "HTML & CSS",
  "MongoDB",
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="hero" id="home">
      <div className="hero-background-glow" />

      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <p>
            David <span>Macieira.</span>
          </p>
        </a>

        <div className="nav-links">
          <a href="#projects">Projetos</a>
          <a href="#skills">Competências</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="nav-actions">
          <a
            href="https://github.com/DavidMacieira"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"/>
            </svg>
          </a>

          <a
            href="O_TEU_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
              <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 18H5V9h3ZM6.5 7.73a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19 18h-3v-4.38c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18h-3V9h2.88v1.23h.04a3.16 3.16 0 0 1 2.84-1.56C18.65 8.67 19 10.59 19 13.08Z"/>
            </svg>
          </a>

          <a href="/cv.pdf" className="cv-button" download>
            <span>CV</span>
            <span>↓</span>
          </a>

          <a href="#contact" className="nav-contact">
            Vamos conversar <span>↗</span>
          </a>
        </div>

        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="mobile-menu-backdrop"
              aria-label="Fechar menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              id="mobile-navigation"
              className="mobile-menu"
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mobile-menu-heading">
                <span>MENU</span>
                <span>01 — 04</span>
              </div>

              <div className="mobile-menu-links">
                <a href="#projects" onClick={closeMenu}>
                  <span>01</span>
                  Projetos
                  <span className="menu-arrow">↗</span>
                </a>

                <a href="#skills" onClick={closeMenu}>
                  <span>02</span>
                  Competências
                  <span className="menu-arrow">↗</span>
                </a>

                <a href="#about" onClick={closeMenu}>
                  <span>03</span>
                  Sobre
                  <span className="menu-arrow">↗</span>
                </a>

                <a href="#contact" onClick={closeMenu}>
                  <span>04</span>
                  Contacto
                  <span className="menu-arrow">↗</span>
                </a>
              </div>

              <div className="mobile-menu-footer">
                <div className="mobile-menu-socials">
                  <a
                    href="https://github.com/DavidMacieira"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/david-macieira-5791a2321/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </div>

                <a href="/cv.pdf" className="mobile-cv-button" download>
                  Descarregar CV <span>↓</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="eyebrow" variants={itemVariants}>
            <span className="eyebrow-dot" />
            FULL STACK DEVELOPER
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Transformo ideias em
            <br />
            <em>experiências digitais.</em>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            Sou o David, desenvolvedor de software com interesse em criar
            aplicações e websites modernos, funcionais e intuitivos.
            Gosto de acompanhar cada projeto desde a ideia inicial até
            à implementação.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={itemVariants}
          >
            <a href="#projects" className="button-primary">
              Ver projetos <span>↗</span>
            </a>

            <a href="#contact" className="button-outline">
              Contactar
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            variants={itemVariants}
          >
            <span className="hero-meta-line" />
            <span>DESIGN · DEVELOPMENT · DIGITAL</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-circle" />

          <div className="hero-photo-frame">
            <img
              src={heroImage}
              alt="David Macieira"
              className="profile-image"
            />
          </div>

          <div className="developer-stamp">
            FULL
            <br />
            STACK
          </div>

          <div className="availability">
            <span />
            Disponível para novos projetos
          </div>

          <div className="hero-image-caption">
            <span>01 / 01</span>
            <span>DAVID MACIEIRA</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <div className="tech-strip">
          <span className="tech-strip-label">TECNOLOGIAS</span>

          <div className="tech-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        <a href="#projects" className="scroll-indicator">
          SCROLL <span>↓</span>
        </a>
      </div>
    </section>
  );
}

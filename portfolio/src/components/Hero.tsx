
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <nav className="navbar">
        <a href="#home" className="logo">
          <span>DM</span>
          <p>David Macieira</p>
        </a>

        <div className="nav-links">
          <a href="#projects">Projetos</a>
          <a href="#skills">Competências</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="nav-actions">
          <a href="https://github.com/DavidMacieira" target="_blank" rel="noreferrer" className="social-icon">GH</a>
          <a href="O_TEU_LINKEDIN" target="_blank" rel="noreferrer" className="social-icon">in</a>
          <a href="/cv.pdf" className="cv-button" download>CV ↓</a>
          <a href="#contact" className="nav-contact">Falar comigo ↗</a>
        </div>
      </nav>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">(FULL STACK DEVELOPER)</span>

          <h1>
            Transformo ideias em
            <br />
            <em>experiências digitais.</em>
          </h1>

          <p className="hero-description">
            Sou o David, desenvolvedor de software com interesse em criar
            aplicações e websites modernos, funcionais e intuitivos.
            Gosto de acompanhar cada projeto desde a ideia inicial até
            à implementação.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">Ver projetos ↗</a>
            <a href="#contact" className="button-outline">Contactar</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-circle" />

          <img
            src="/profile.jpg"
            alt="David Macieira"
            className="profile-image"
          />

          <div className="developer-stamp">
            FULL
            <br />
            STACK
          </div>

          <div className="availability">
            <span />
            Disponível para novos projetos
          </div>
        </motion.div>
      </div>

      <a href="#projects" className="scroll-indicator">SCROLL ↓</a>
    </section>
  );
}

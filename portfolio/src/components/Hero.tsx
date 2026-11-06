
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroImage from "../assets/hero.png";
import type { Language } from "../types";

type Theme = "dark" | "light";

const textVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.13, duration: 0.7 },
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

function ArrowIcon() {
  return (
    <svg className="button-arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Recuperar a preferência guardada
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  const english = language === "en";

  // Aplicar e guardar o tema
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { number: "01", label: english ? "Projects" : "Projetos", href: "#projects" },
    { number: "02", label: english ? "Skills" : "Competências", href: "#skills" },
    { number: "03", label: english ? "About" : "Sobre", href: "#about" },
    { number: "04", label: english ? "Contact" : "Contacto", href: "#contact" },
  ];

  return (
    <section className="hero hero-redesign" id="home">
      <div className="hero-redesign-glow" />

      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <p>
            David <span>Macieira.</span>
          </p>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a href={link.href} key={link.number}>
              {link.label}
            </a>
          ))}
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
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/david-macieira-5791a2321/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
              <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 18H5V9h3ZM6.5 7.73a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19 18h-3v-4.38c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18h-3V9h2.88v1.23h.04a3.16 3.16 0 0 1 2.84-1.56C18.65 8.67 19 10.59 19 13.08Z" />
            </svg>
          </a>

          <a href="/cv.pdf" className="cv-button" download>
            <span>CV</span>
            <span>↓</span>
          </a>

          <a href="#contact" className="nav-contact">
            {english ? "Let's talk" : "Vamos conversar"} <ArrowIcon />
          </a>

          <div className="header-preferences">
            <div className="language-switcher" aria-label="Language">
              <button
                className={language === "pt" ? "active" : ""}
                onClick={() => setLanguage("pt")}
                aria-pressed={language === "pt"}
              >
                PT
              </button>
              <button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? english
                    ? "Switch to light mode"
                    : "Ativar modo claro"
                  : english
                    ? "Switch to dark mode"
                    : "Ativar modo escuro"
              }
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              <ThemeIcon theme={theme} />
            </button>
          </div>
        </div>

        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen
              ? english ? "Close menu" : "Fechar menu"
              : english ? "Open menu" : "Abrir menu"
          }
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
              aria-label={english ? "Close menu" : "Fechar menu"}
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
                {links.map((link) => (
                  <a href={link.href} onClick={closeMenu} key={link.number}>
                    <span>{link.number}</span>
                    {link.label}
                    <ArrowIcon />
                  </a>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <div className="mobile-menu-socials">
                  <a
                    href="https://github.com/DavidMacieira"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/david-macieira-5791a2321/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                <a href="/cv.pdf" className="mobile-cv-button" download>
                  {english ? "Download CV" : "Descarregar CV"} <ArrowIcon />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="hero-content hero-redesign-content">
        <motion.div
          className="hero-text hero-redesign-text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-redesign-line" variants={itemVariants} />

          <motion.h1 variants={itemVariants}>
            {english ? "I turn ideas into" : "Transformo ideias em"}
            <br />
            <em>
              {english ? "digital experiences." : "experiências digitais."}
            </em>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            {english
              ? "I'm David, a Web Development and Multimedia student passionate about technology and digital creation. I enjoy turning ideas into functional solutions, developing websites and applications from concept to implementation."
              : "Sou o David, estudante de Desenvolvimento Web e Multimédia, apaixonado por tecnologia e criação digital. Gosto de transformar ideias em soluções funcionais, desenvolvendo websites e aplicações desde a conceção até à implementação."}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#projects" className="button-primary hero-redesign-button">
              {english ? "View projects" : "Ver projetos"} <ArrowIcon />
            </a>

            <a href="#contact" className="button-outline hero-redesign-button">
              {english ? "Get in touch" : "Contactar"} <ArrowIcon />
            </a>
          </motion.div>

          <motion.a
            href="#projects"
            className="hero-scroll-cue"
            variants={itemVariants}
          >
            <span className="hero-scroll-mouse">
              <i />
            </span>
            <span>
              {english ? "SCROLL TO EXPLORE" : "SCROLL PARA EXPLORAR"}
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-visual hero-redesign-visual"
          initial={{ opacity: 0, x: 30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-portrait-glow" />

          <img
            src={heroImage}
            alt="David Macieira"
            className="profile-image hero-portrait"
          />
        </motion.div>
      </div>
    </section>
  );
}

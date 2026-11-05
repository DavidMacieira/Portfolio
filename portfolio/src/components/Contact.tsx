import { motion } from "framer-motion";
import type { Language } from "../types";

// Contactos
const email = "davidfloresmacieira@gmail.com";
const whatsappNumber = "351919241169";

const whatsappMessage = encodeURIComponent(
  "Olá David! Vi o teu portefólio e gostaria de falar contigo."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const linkedinUrl =
  "https://www.linkedin.com/in/david-macieira-5791a2321/";

const githubUrl = "https://github.com/DavidMacieira";

const formspreeUrl = "https://formspree.io/f/mjyyadyz";

export default function Contact({ language }: { language: Language }) {
  const english = language === "en";
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-content">
          <header className="contact-header">
            <span className="eyebrow">(05) {english ? "CONTACT" : "CONTACTO"}</span>

            <h2>{english ? "Let's talk." : "Vamos falar."}</h2>

            <p>
              Estou disponível para oportunidades, colaborações
              e novos desafios.
            </p>
          </header>

          <div className="contact-layout">
            {/* Informações de contacto */}
            <aside className="contact-details">

              <div>
                <span className="contact-label">EMAIL</span>

                <a href={`mailto:${email}`}>
                  {email} <span>↗</span>
                </a>
              </div>

              <div>
                <span className="contact-label">WHATSAPP</span>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +351 919 241 169 <span>↗</span>
                </a>
              </div>

              {/* Redes sociais */}
              <div
                className="contact-socials"
                aria-label="Redes sociais"
              >
                <a
                  className="contact-social-icon"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"
                    />
                  </svg>
                </a>

                <a
                  className="contact-social-icon"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 18H5V9h3ZM6.5 7.73a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19 18h-3v-4.38c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18h-3V9h2.88v1.23h.04a3.16 3.16 0 0 1 2.84-1.56C18.65 8.67 19 10.59 19 13.08Z"
                    />
                  </svg>
                </a>
              </div>
            </aside>

            {/* Formulário de contacto */}
            <form
              className="contact-form"
              action={formspreeUrl}
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="Novo contacto através do portefólio - David Macieira"
              />

              <label>
                <span>Nome</span>

                <input
                  name="name"
                  type="text"
                  placeholder="O teu nome"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                <span>Email</span>

                <input
                  name="email"
                  type="email"
                  placeholder="nome@empresa.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                <span>
                  Telefone <i>(opcional)</i>
                </span>

                <input
                  name="phone"
                  type="tel"
                  placeholder="+351 ..."
                  autoComplete="tel"
                />
              </label>

              <label className="contact-form-message">
                <span>Mensagem</span>

                <textarea
                  name="message"
                  placeholder="Conta-me um pouco sobre o teu projeto ou oportunidade."
                  required
                />
              </label>

              <button type="submit">
                Enviar mensagem <span>↗</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="contact-card-footer">
          <span>© 2026 DAVID MACIEIRA</span>

          <a href="#home">
            VOLTAR AO TOPO <span>↑</span>
          </a>
        </footer>
      </motion.div>
    </section>
  );
}

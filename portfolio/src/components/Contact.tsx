
import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from "react";

import { AnimatePresence, motion } from "framer-motion";

const email = "davidfloresmacieira@gmail.com";

// Configurar com os teus dados reais
const formspreeEndpoint = "https://formspree.io/f/mjyyadyz";
const whatsappNumber = "351919241169";
const linkedinUrl = "https://www.linkedin.com/in/david-macieira-5791a2321/";

type FormStatus = "idle" | "sending" | "success" | "error";

type ContactForm = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  company: "",
  subject: "Estágio curricular",
  message: "",
};

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState<ContactForm>(initialForm);

  // Fechar modal com Escape e bloquear scroll
  useEffect(() => {
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Atualizar campos do formulário
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  // Enviar formulário
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formspreeEndpoint.includes("TEU_ID") ||
      !formspreeEndpoint.startsWith("https://formspree.io/f/")
    ) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  // Abrir WhatsApp
  const openWhatsApp = () => {
    if (whatsappNumber.includes("X")) return;

    const message = encodeURIComponent(
      "Olá! Vi o teu portfolio e gostaria de entrar em contacto contigo."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Abrir modal
  const openModal = () => {
    setStatus("idle");
    setIsOpen(true);
  };

  // Fechar modal ao clicar no fundo
  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">(05) CONTACTO</span>

        <h2>
          Uma conversa
          <br />
          <em>pode ser o início.</em>
        </h2>

        <p className="contact-description">
          Procuro uma oportunidade de estágio curricular onde possa
          colocar os meus conhecimentos em prática, aprender com uma
          equipa e crescer enquanto programador.
        </p>

        <div className="contact-actions">
          <button
            type="button"
            className="contact-primary"
            onClick={openModal}
          >
            Vamos conversar
            <span>↗</span>
          </button>
        </div>

        <div className="contact-alternatives">
          <span>OU CONTACTA-ME DIRETAMENTE</span>

          <div>
            <a href={`mailto:${email}`}>{email}</a>

            <button type="button" onClick={openWhatsApp}>
              WhatsApp ↗
            </button>
          </div>
        </div>

        <div className="contact-socials">
          <a
            href="https://github.com/DavidMacieira"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className="contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={handleModalClick}
            >
              <button
                type="button"
                className="modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar formulário"
              >
                ×
              </button>

              <span className="eyebrow">( CONTACTO )</span>

              <h3 id="contact-modal-title">
                Vamos conversar<span>.</span>
              </h3>

              <p className="modal-description">
                Preenche o formulário e entrarei em contacto contigo
                assim que possível.
              </p>

              {status === "success" ? (
                <div className="form-feedback success">
                  <span>✓</span>

                  <h4>Mensagem enviada!</h4>

                  <p>
                    Obrigado pelo contacto. Responderei assim que possível.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label>
                      Nome *
                      <input
                        type="text"
                        name="name"
                        placeholder="O teu nome"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    <label>
                      Email *
                      <input
                        type="email"
                        name="email"
                        placeholder="email@exemplo.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>

                  <label>
                    Empresa
                    <input
                      type="text"
                      name="company"
                      placeholder="Nome da empresa (opcional)"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </label>

                  <label>
                    Assunto
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Mensagem *
                    <textarea
                      name="message"
                      placeholder="Escreve aqui a tua mensagem..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  {status === "error" && (
                    <p className="form-error">
                      Não foi possível enviar a mensagem.
                      Tenta novamente ou contacta-me por email.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending"
                      ? "A enviar..."
                      : "Enviar mensagem"}

                    <span>↗</span>
                  </button>

                  <p className="form-privacy">
                    Os teus dados serão utilizados apenas para responder
                    ao teu contacto.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

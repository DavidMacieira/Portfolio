
import { motion } from "framer-motion";

const email = "davidfloresmacieira@gmail.com";
const whatsappNumber = "351919241169";

const linkedinUrl =
  "https://www.linkedin.com/in/david-macieira-5791a2321/";

const whatsappMessage = encodeURIComponent(
  "Olá David! Vi o teu portfolio e gostaria de entrar em contacto contigo."
);

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">(05) CONTACTO</span>

        <h2>
          Vamos conversar
          <br />
          <em>e criar algo juntos.</em>
        </h2>

        <p className="contact-description">
          Procuro uma oportunidade de estágio curricular onde possa
          contribuir para projetos reais, aprender com uma equipa
          e continuar a crescer enquanto desenvolvedor de software.
        </p>

        <a
          href={`mailto:${email}?subject=${encodeURIComponent(
            "Contacto através do portfolio"
          )}`}
          className="contact-primary"
        >
          Enviar um email
          <span>↗</span>
        </a>

        <div className="contact-direct">
          <div className="contact-direct-info">
            <span>CONTACTA-ME DIRETAMENTE</span>

            <a href={`mailto:${email}`}>
              {email}
              <span>↗</span>
            </a>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp"
          >
            WhatsApp <span>↗</span>
          </a>
        </div>

        <div className="contact-bottom">
          <span>VAMOS MANTER O CONTACTO</span>

          <div className="contact-socials">
            <a
              href="https://github.com/DavidMacieira"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

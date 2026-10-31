
import { motion } from "framer-motion";

const email = "davidfloresmacieira@gmail.com";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="eyebrow">(05) CONTACTO</span>

        <h2>
          Vamos
          <br />
          <em>conversar?</em>
        </h2>

        <a href={`mailto:${email}`} className="email-link">
          {email}
          <span>↗</span>
        </a>

        <div className="contact-socials">
          <a href="https://github.com/DavidMacieira" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="O_TEU_LINKEDIN" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}

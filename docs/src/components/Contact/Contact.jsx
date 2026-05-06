// ================================================================
// components/Contact/Contact.jsx
// 📬 Seção de contato
// ✏️ EDITE: email e links sociais
// ================================================================

import { useState } from "react";
import styles from "./Contact.module.css";

// ✏️ EDITE — seu e-mail
const EMAIL = "rafael.pmr@hotmail.com";

// ✏️ EDITE — seus links sociais
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rafael-prado-de-melo-raimundo/",
  },
  {
    label: "GitHub",
    href: "https://github.com/RafaelPmr",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contato" className={styles.section}>
      <div className="container">

        <p className="section-label">[ 04 — CONTATO ]</p>

        <div className={styles.box}>
          {/* ✏️ EDITE — texto do bloco de contato */}
          <h2 className={styles.heading}>VAMOS CONVERSAR?</h2>
          <p className={styles.sub}>
            Estou aberto a oportunidades, projetos freelance e colaborações.
            Me manda uma mensagem!
          </p>

          {/* ── E-MAIL COM COPIAR ─────────────────────────────── */}
          <button
            className={styles.emailBtn}
            onClick={handleCopyEmail}
            title="Clique para copiar"
          >
            <span className={styles.emailText}>{EMAIL}</span>
            <span className={`${styles.copyLabel} ${copied ? styles.copied : ""}`}>
              {copied ? "✓ copiado!" : "[ copiar ]"}
            </span>
          </button>

          {/* ── BOTÕES SOCIAIS ────────────────────────────────── */}
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                {s.label} →
              </a>
            ))}

            {/* ✏️ Link do currículo — coloque o PDF em public/ */}
            <a href="./Rafael.pdf" download className="btn btn-accent">
              ↓ CURRÍCULO PDF
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

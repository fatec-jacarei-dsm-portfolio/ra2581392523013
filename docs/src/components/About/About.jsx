// ================================================================
// components/About/About.jsx
// 📖 Seção sobre — apresentação + cards de info
// ✏️ EDITE: parágrafos e dados pessoais
// ================================================================

import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className="container">

        {/* ── LABEL DA SEÇÃO ───────────────────────────────────── */}
        <p className="section-label">[ 01 — SOBRE ]</p>

        <div className={styles.grid}>

          {/* ── COLUNA ESQUERDA: texto ───────────────────────── */}
          <div className={styles.textCol}>
            {/* ✏️ EDITE — título e parágrafos */}
            <h2 className="section-title">
              Código com<br />propósito.
            </h2>
            <p className={styles.paragraph}>
              Sou estudante de <strong>Desenvolvimento de Software
              Multiplataforma</strong> na FATEC Jacareí, com foco em
              desenvolvimento full stack. Acredito que bom código
              resolve problemas reais de forma clara e eficiente.
            </p>
            <p className={styles.paragraph}>
              Já atuei em projeto real para o <strong>INPE</strong>,
              responsável pelo desenvolvimento front-end e organização
              de sprints com metodologia Scrum. Busco sempre evoluir
              técnica e profissionalmente.
            </p>
            <a href="#projetos" className={styles.cta}>
              &gt; ver projetos →
            </a>
          </div>

          {/* ── COLUNA DIREITA: info cards ───────────────────── */}
          <div className={styles.cardsCol}>

  {/* ✏️ ADICIONE ISSO — sua foto */}
  <img
    src="/rafaelmelos.png"        // coloque foto.jpg na pasta public/
    alt="Rafael Melo"
    style={{
      width: "100%",
      maxWidth: "3400px",
      borderRadius: "12px",
      border: "1px solid rgba(249,115,22,0.3)",
      marginBottom: "16px",
    }}
  />

  {/* ✏️ EDITE — formação */}
            <InfoCard
              icon="🎓"
              title="FATEC Jacareí"
              sub="Dev. de Software Multiplataforma"
              tag="2025 – 2028"
            />

            {/* ✏️ EDITE — idiomas */}
            <InfoCard
              icon="🌍"
              title="Idiomas"
              sub="Português nativo  ·  Inglês básico"
              tag="LANGUAGES"
            />

            {/* ✏️ EDITE — localização */}
            <InfoCard
              icon="📍"
              title="Jacareí, SP"
              sub="São Paulo, Brasil"
              tag="LOCATION"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sub-componente: card de info ─────────────────────────────
function InfoCard({ icon, title, sub, tag }) {
  return (
    <div className={styles.card}>
      <span className={styles.cardIcon}>{icon}</span>
      <div className={styles.cardBody}>
        <strong className={styles.cardTitle}>{title}</strong>
        <span className={styles.cardSub}>{sub}</span>
      </div>
      <span className={styles.cardTag}>{tag}</span>
    </div>
  );
}

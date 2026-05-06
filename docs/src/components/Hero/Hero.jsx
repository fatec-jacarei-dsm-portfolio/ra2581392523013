// ================================================================
// components/Hero/Hero.jsx
// 🎯 Seção principal — nome, título e CTAs
// ✏️ EDITE: textos, stats e links dos botões
// ================================================================

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">

        {/* ── STATUS BADGE ─────────────────────────────────────── */}
        {/* ✏️ EDITE — texto do badge */}
        <div className={`${styles.badge} fade-up`}>
          <span className={styles.badgeDot} />
          <span>&gt; DISPONÍVEL PARA OPORTUNIDADES</span>
        </div>

        {/* ── NOME / TÍTULO PRINCIPAL ──────────────────────────── */}
        {/* ✏️ EDITE — seu nome e título */}
        <h1 className={`${styles.name} fade-up d1`}>
          RAFAEL<br />
          <span className={styles.nameDim}>MELO</span>
          <br />
          <span className={styles.nameAccent}>DESENVOLVEDOR FULLSTACK</span>
        </h1>

        {/* ── SUBTÍTULO ────────────────────────────────────────── */}
        {/* ✏️ EDITE — sua descrição profissional */}
        <p className={`${styles.sub} fade-up d2`}>
          Desenvolvedor Full Stack em formação.
          <br />
          Apaixonado por criar interfaces modernas
          com <strong>React</strong>, <strong>Python</strong> e <strong>Node.js</strong>.
        </p>

        {/* ── BOTÕES DE AÇÃO ───────────────────────────────────── */}
        <div className={`${styles.buttons} fade-up d3`}>
          <a href="#projetos" className="btn btn-accent">
            &gt; VER PROJETOS
          </a>
          {/* 🗂️ Coloque curriculo.pdf na pasta public/ do projeto */}
          <a href="/Rafael.pdf" download className="btn">
            ↓ BAIXAR CURRÍCULO
          </a>
        </div>

        {/* ── STATS INFERIORES ─────────────────────────────────── */}
        {/* ✏️ EDITE — suas métricas/números */}
        <div className={`${styles.stats} fade-up d4`}>
          {[
            { num: "+1",  label: "Projeto real entregue" },
            { num: "4+",  label: "Tecnologias dominadas" },
            { num: "2025", label: "Início na FATEC" },
          ].map((item) => (
            <div key={item.label} className={styles.statItem}>
              <span className={styles.statNum}>{item.num}</span>
              <span className={styles.statLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

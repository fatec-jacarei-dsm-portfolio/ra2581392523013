// ================================================================
// components/Skills/Skills.jsx
// 🛠️ Grade de ícones de tecnologias (estilo da imagem de referência)
// ✏️ EDITE os dados em src/data/skills.js
// ================================================================

import { skillGroups, certifications } from "../../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="habilidades" className={styles.section}>
      <div className="container">

        {/* ── HEADER ───────────────────────────────────────────── */}
        <p className="section-label">[ 02 — HABILIDADES ]</p>
        {/* ✏️ EDITE — título e subtítulo */}
        <h2 className="section-title">Stack técnico</h2>
        <p className="section-sub">
          Tecnologias e ferramentas que venho utilizando na construção dos meus projetos.
        </p>

        {/* ── GRUPOS DE SKILLS ─────────────────────────────────── */}
        {skillGroups.map((group) => (
          <div key={group.category} className={styles.group}>

            {/* Título da categoria */}
            <h3 className={styles.groupTitle}>{group.category}</h3>

            {/* Grade de cards de ícones */}
            <div className={styles.grid}>
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}

        {/* ── CERTIFICAÇÕES ────────────────────────────────────── */}
        {/* ✏️ EDITE a lista em src/data/skills.js */}
        <div className={styles.certs}>
          <h3 className={styles.groupTitle}>Certificações</h3>
          <div className={styles.certTags}>
            {certifications.map((cert) => (
              <span key={cert} className={styles.certTag}>{cert}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ── Card individual de skill ─────────────────────────────────
function SkillCard({ skill }) {
  return (
    <div className={styles.card}>
      {/* Ícone vindo do devicon CDN */}
      <img
        src={skill.icon}
        alt={skill.name}
        className={styles.cardIcon}
        // Fallback visual se o ícone não carregar
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      {/* Fallback: inicial do nome em caso de erro no carregamento */}
      <span className={styles.iconFallback} style={{ display: "none" }}>
        {skill.name.charAt(0)}
      </span>
      <span className={styles.cardName}>{skill.name}</span>
    </div>
  );
}

// ================================================================
// components/Projects/Projects.jsx
// 📂 Cards de projetos
// ✏️ EDITE os dados em src/data/projects.js
// ================================================================

import { useState } from "react";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <div className="container">

        <p className="section-label">[ 03 — PROJETOS ]</p>
        {/* ✏️ EDITE — título e subtítulo */}
        <h2 className="section-title">Projetos</h2>
        <p className="section-sub">
          Projetos desenvolvidos durante minha trajetória — cada um
          representa um aprendizado real.
        </p>

        {/* ── LISTA DE CARDS ───────────────────────────────────── */}
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ── CTA GITHUB ───────────────────────────────────────── */}
        {/* ✏️ EDITE — link do GitHub */}
        <div className={styles.ghCta}>
          <a
            href="https://github.com/RafaelPmr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            &gt; VER MAIS NO GITHUB →
          </a>
        </div>

      </div>
    </section>
  );
}

// ── Card de projeto ──────────────────────────────────────────
function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${styles.card} ${hover ? styles.cardHover : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Badge "destaque" */}
      {project.featured && (
        <span className={styles.featBadge}>★ DESTAQUE</span>
      )}

      {/* Meta: role + período */}
      <p className={styles.meta}>
        {project.role} · {project.period}
      </p>

      {/* Título */}
      <h3 className={styles.title}>{project.title}</h3>

      {/* Descrição */}
      <p className={styles.desc}>{project.description}</p>

      {/* Tags de tecnologias */}
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.links}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub →
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Ver site →
          </a>
        )}
      </div>
    </div>
  );
}

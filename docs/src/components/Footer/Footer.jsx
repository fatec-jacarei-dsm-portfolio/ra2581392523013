// components/Footer/Footer.jsx
// ✏️ EDITE: nome e links

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ✏️ EDITE — texto do footer */}
        <span className={styles.copy}>
          © 2025 <span className={styles.accent}>Rafael Prado</span>. Feito com React + Vite.
        </span>
        <div className={styles.links}>
          {/* ✏️ EDITE — links do footer */}
          <a href="https://github.com/RafaelPmr" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rafael-prado-de-melo-raimundo/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

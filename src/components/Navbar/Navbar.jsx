// ================================================================
// components/Navbar/Navbar.jsx
// 🧭 Barra de navegação fixa com efeito de blur no scroll
// ✏️ EDITE: navLinks para mudar os itens do menu
// ================================================================

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

// ✏️ EDITE — links do menu
const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* ✏️ EDITE — seu logo/iniciais */}
        <span className={styles.logo}>
          RAFA<span className={styles.logoDot}>.DEV</span>
        </span>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

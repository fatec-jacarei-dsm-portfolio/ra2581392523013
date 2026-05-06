// ================================================================
// App.jsx — Componente raiz
// 🗂️ Aqui você adiciona/remove seções do portfólio
// ================================================================

import "./styles/globals.css";

import Navbar   from "./components/Navbar/Navbar";
import Hero     from "./components/Hero/Hero";
import About    from "./components/About/About";
import Skills   from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact  from "./components/Contact/Contact";
import Footer   from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* ── DIVISORES entre seções ─── */}
        <div className="divider" />
        <About />

        <div className="divider" />
        <Skills />

        <div className="divider" />
        <Projects />

        <div className="divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

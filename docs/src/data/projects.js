// ================================================================
// data/projects.js — Dados dos projetos
// ✏️ EDITE AQUI para adicionar/remover projetos
// ================================================================

export const projects = [
  {
    id: 1,
    featured: true,          // aparece com badge "DESTAQUE"
    title: "AgriRS Lab — INPE",
    description:
      "Website institucional para o laboratório AgriRS Lab do Instituto Nacional de Pesquisas Espaciais. Atuei como desenvolvedor front-end, criando protótipos, organizando sprints e participando ativamente do desenvolvimento com metodologia Scrum.",
    tags: ["React", "HTML", "CSS", "Scrum", "Prototipação"],
    role: "Front-end Developer",
    period: "2025",
    // ✏️ Troque pelos links reais:
    github: "https://github.com/KaimanByte/AgriRS-Lab",
    live: null,  // null = botão "Ver site" não aparece
  },

  // ── TEMPLATE PARA NOVOS PROJETOS ─────────────────────────────
  // Copie e cole o bloco abaixo para adicionar um novo projeto:
  //
  // {
  //   id: 2,
  //   featured: false,
  //   title: "Nome do Projeto",
  //   description: "Descrição do que foi feito, tecnologias e resultados.",
  //   tags: ["Python", "Flask", "PostgreSQL"],
  //   role: "Full Stack Developer",
  //   period: "2025",
  //   github: "https://github.com/RafaelPmr/nome-repo",
  //   live: "https://meu-projeto.com",
  // },
];

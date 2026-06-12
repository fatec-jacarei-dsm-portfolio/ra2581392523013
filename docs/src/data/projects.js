// ================================================================
// data/projects.js — Dados dos projetos
// ✏️ EDITE AQUI para adicionar/remover projetos
// ================================================================

export const projects = [
  {
    id: 1,
    featured: true,          // aparece com badge "DESTAQUE"
    title: "AgriRS Lab — INPE - 1 Semestre",
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
  {
     id: 2,
     featured: true,
     title: "Conecta Fatec Jacareí - 2 Semestre",
     description: "Projeto acadêmico desenvolvido em equipe para a Fatec Jacareí. Atuei no desenvolvimento de funcionalidades de gerenciamento de usuários, controle de documentos, visualização de evidências documentais e monitoramento de logs, além da modelagem de processos por meio de diagramas de sequência. O projeto foi desenvolvido com React, TypeScript, Node.js, Express, PostgreSQL e Docker.",
     tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
     role: "Full Stack Developer",
     period: "2026",
     github: "https://github.com/KaimanByte/Conecta-Fatec-Jacarei",
     live: null,
   },
];

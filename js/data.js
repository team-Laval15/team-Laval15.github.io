/* =========================================================================
   CONTENU DU PORTFOLIO
   -------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour changer le texte du site.
   Tout ce qui est marqué "TODO" est un contenu provisoire à remplacer.
   ========================================================================= */

const PORTFOLIO = {

  /* ---------- Identité ---------- */
  profil: {
    nom: "Elie Laval",
    accroche: "// étudiant en science des données",
    tagline: "Je transforme des données brutes en outils lisibles : requêtes SQL, pipelines Python et tableaux de bord. TODO : phrase d'accroche finale.",
    cv: "assets/cv/CV_Elie_Laval.pdf" // déposer le PDF à cet endroit
  },

  /* ---------- À propos ---------- */
  apropos: {
    paragraphes: [
      "TODO : présentation en 2-3 phrases (qui tu es, ce que tu fais en BUT SD).",
      "TODO : ce qui te plaît dans la data, ce que tu cherches (stage, alternance…)."
    ],
    faits: [
      { label: "Formation", valeur: "BUT Science des données — IUT d'Aurillac" },
      { label: "Localisation", valeur: "Aurillac, Cantal" },
      { label: "Recherche", valeur: "TODO : stage / alternance" }
    ]
  },

  /* ---------- Compétences ---------- */
  competences: [
    { categorie: "Langages",        items: ["Python", "R", "SQL", "JavaScript"] },
    { categorie: "Bases de données", items: ["Oracle", "PostgreSQL", "SQLite"] },
    { categorie: "BI & Visualisation", items: ["Power BI", "Qlik Sense"] },
    { categorie: "Data & outils",   items: ["Talend", "FastAPI", "Git", "VS Code"] }
  ],

  /* ---------- Projets ----------
     id       : identifiant unique (sert pour l'URL projet.html?id=...)
     tags     : utilisés pour les filtres de la section Projets
     image    : chemin vers une image dans assets/img/ (optionnel)
     liens    : { github: "...", demo: "..." } (optionnels)
     details  : sections affichées sur la page du projet
  */
  projets: [
    {
      id: "projet-1",
      titre: "TODO : Projet professionnel",
      contexte: "Stage / CDD",
      resume: "TODO : résumé court (1-2 phrases) affiché sur la carte.",
      tags: ["SQL", "BI"],
      image: "",
      liens: {},
      details: [
        { titre: "Contexte",   texte: "TODO" },
        { titre: "Ce que j'ai fait", texte: "TODO" },
        { titre: "Résultat",   texte: "TODO" }
      ]
    },
    {
      id: "projet-2",
      titre: "TODO : Projet universitaire",
      contexte: "IUT",
      resume: "TODO : résumé court.",
      tags: ["Python", "Analyse"],
      image: "",
      liens: {},
      details: [
        { titre: "Contexte", texte: "TODO" }
      ]
    },
    {
      id: "projet-3",
      titre: "TODO : Projet perso",
      contexte: "Personnel",
      resume: "TODO : résumé court.",
      tags: ["Python"],
      image: "",
      liens: {},
      details: [
        { titre: "Contexte", texte: "TODO" }
      ]
    }
  ],

  /* ---------- Parcours (du plus récent au plus ancien) ---------- */
  parcours: [
    { periode: "2024 — aujourd'hui", titre: "BUT Science des données", lieu: "IUT d'Aurillac", texte: "TODO" },
    { periode: "TODO",               titre: "TODO : expérience",       lieu: "TODO",            texte: "TODO" }
  ],

  /* ---------- Passions ----------
     icone : nom d'une icône définie dans main.js (ICONES)
  */
  passions: [
    { icone: "etoile",   titre: "Ciel de nuit",      texte: "TODO" },
    { icone: "montagne", titre: "Montagne & photo",  texte: "TODO" },
    { icone: "manette",  titre: "Jeux & game jam",   texte: "TODO" },
    { icone: "anime",    titre: "Anime",             texte: "TODO" }
  ],

  /* ---------- Contact ---------- */
  contact: {
    texte: "TODO : une phrase d'invitation (dispo pour un stage, une question…).",
    liens: [
      { label: "Email",    url: "mailto:TODO@exemple.fr" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/TODO" },
      { label: "GitHub",   url: "https://github.com/TODO" }
    ]
  }
};

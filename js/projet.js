/* Page de détail d'un projet : projet.html?id=<id du projet dans data.js> */
(function () {
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const id = new URLSearchParams(location.search).get("id");
  const p = PORTFOLIO.projets.find((x) => x.id === id);
  const root = document.getElementById("project-detail");
  document.getElementById("year").textContent = new Date().getFullYear();

  if (!p) {
    root.innerHTML = `<h1>Projet introuvable</h1>
      <p class="project-detail__resume">Ce projet n'existe pas ou a été renommé.</p>
      <a class="btn btn--primary" href="index.html#projets">Retour aux projets</a>`;
    return;
  }

  document.title = `${p.titre} — Elie Laval`;
  const liens = [];
  if (p.liens.github) liens.push(`<a class="btn btn--primary" href="${esc(p.liens.github)}" target="_blank" rel="noopener">Code sur GitHub</a>`);
  if (p.liens.demo)   liens.push(`<a class="btn btn--ghost" href="${esc(p.liens.demo)}" target="_blank" rel="noopener">Voir la démo</a>`);

  root.innerHTML = `
    <span class="project-detail__ctx">${esc(p.contexte)}</span>
    <h1>${esc(p.titre)}</h1>
    <p class="project-detail__resume">${esc(p.resume)}</p>
    <div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    ${liens.length ? `<div class="project-detail__links">${liens.join("")}</div>` : ""}
    ${p.image ? `<div class="project-detail__img"><img src="${esc(p.image)}" alt="${esc(p.titre)}"></div>` : ""}
    ${p.details.map((d) => `<section><h2>${esc(d.titre)}</h2><p>${esc(d.texte)}</p></section>`).join("")}
  `;
})();

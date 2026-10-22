/* =========================================================================
   Construit la page d'accueil à partir de PORTFOLIO (js/data.js)
   ========================================================================= */

const $ = (sel) => document.querySelector(sel);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Icônes des passions (SVG simples, trait) */
const ICONES = {
  etoile:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2.4 5.6L20 9.3l-4.3 3.9 1.2 5.8L12 16l-4.9 3 1.2-5.8L4 9.3l5.6-.7z"/></svg>',
  montagne: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 20l6-10 4 6 3-4 5 8z"/><circle cx="17" cy="6" r="2"/></svg>',
  manette:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r=".8" fill="currentColor"/><circle cx="18" cy="13.5" r=".8" fill="currentColor"/></svg>',
  anime:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
  photo:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  voiture:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 15l2-5 3-2h7l4 3 2 1v3H3z"/><circle cx="7" cy="16" r="1.8"/><circle cx="17" cy="16" r="1.8"/></svg>'
};

function chips(list) {
  return `<div class="chips">${list.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`;
}

/* ---------- Rendu des sections ---------- */
function renderHero(p) {
  $("#hero-kicker").textContent = p.accroche;
  $("#hero-name").textContent = p.nom;
  $("#hero-tagline").textContent = p.tagline;
  $("#hero-cv").href = p.cv;
}

function renderAbout(a) {
  $("#about-text").innerHTML = a.paragraphes.map((t) => `<p>${esc(t)}</p>`).join("");
  $("#about-facts").innerHTML = a.faits
    .map((f) => `<li><span>${esc(f.label)}</span>${esc(f.valeur)}</li>`).join("");
}

function renderSkills(list) {
  $("#skills").innerHTML = list.map((c) => `
    <div class="skill-card reveal">
      <h3>${esc(c.categorie)}</h3>
      ${chips(c.items)}
    </div>`).join("");
}

function renderProjects(list) {
  $("#projects").innerHTML = list.map((p) => `
    <a class="project-card reveal" href="projet.html?id=${encodeURIComponent(p.id)}" data-tags="${esc(p.tags.join("|"))}">
      <div class="project-card__img">
        ${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : "&lt;/&gt;"}
      </div>
      <div class="project-card__body">
        <span class="project-card__ctx">${esc(p.contexte)}</span>
        <h3>${esc(p.titre)}</h3>
        <p>${esc(p.resume)}</p>
        ${chips(p.tags)}
      </div>
    </a>`).join("");

  // Filtres générés automatiquement à partir des tags
  const tags = ["Tous", ...new Set(list.flatMap((p) => p.tags))];
  const filters = $("#filters");
  filters.innerHTML = tags.map((t, i) =>
    `<button class="filter${i === 0 ? " is-active" : ""}" data-tag="${esc(t)}" role="tab">${esc(t)}</button>`).join("");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    filters.querySelectorAll(".filter").forEach((b) => b.classList.toggle("is-active", b === btn));
    const tag = btn.dataset.tag;
    document.querySelectorAll(".project-card").forEach((card) => {
      const show = tag === "Tous" || card.dataset.tags.split("|").includes(tag);
      card.classList.toggle("is-hidden", !show);
    });
  });
}

function renderTimeline(list) {
  $("#timeline").innerHTML = list.map((e) => `
    <li class="reveal">
      <span class="timeline__date">${esc(e.periode)}</span>
      <h3>${esc(e.titre)}</h3>
      <span class="timeline__lieu">${esc(e.lieu)}</span>
      <p>${esc(e.texte)}</p>
    </li>`).join("");
}

function renderPassions(list) {
  $("#passions-list").innerHTML = list.map((p) => `
    <div class="passion reveal">
      ${ICONES[p.icone] || ICONES.etoile}
      <h3>${esc(p.titre)}</h3>
      <p>${esc(p.texte)}</p>
    </div>`).join("");
}

function renderContact(c) {
  $("#contact-text").textContent = c.texte;
  $("#contact-links").innerHTML = c.liens.map((l, i) => `
    <a class="btn ${i === 0 ? "btn--primary" : "btn--ghost"}" href="${esc(l.url)}"
       ${l.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`).join("");
}

/* ---------- Interactions ---------- */
function setupNav() {
  const nav = $(".nav"), toggle = $(".nav__toggle"), links = $(".nav__links");

  window.addEventListener("scroll", () => nav.classList.toggle("is-scrolled", window.scrollY > 20), { passive: true });

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { links.classList.remove("is-open"); toggle.setAttribute("aria-expanded", false); }
  });

  // Lien actif selon la section visible
  const navLinks = [...links.querySelectorAll("a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
}

function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .section__title").forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

/* ---------- Lancement ---------- */
renderHero(PORTFOLIO.profil);
renderAbout(PORTFOLIO.apropos);
renderSkills(PORTFOLIO.competences);
renderProjects(PORTFOLIO.projets);
renderTimeline(PORTFOLIO.parcours);
renderPassions(PORTFOLIO.passions);
renderContact(PORTFOLIO.contact);
setupNav();
setupReveal();
$("#year").textContent = new Date().getFullYear();

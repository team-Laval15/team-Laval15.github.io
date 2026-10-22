/* Ciel étoilé animé du hero (scintillement + étoile filante de temps en temps) */
(function () {
  const canvas = document.getElementById("stars");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let stars = [], shooting = null, w, h, dpr;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = canvas.offsetWidth; h = canvas.offsetHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.floor((w * h) / 4500);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h * 0.85,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      s: Math.random() * 0.015 + 0.003
    }));
  }

  function spawnShooting() {
    shooting = { x: Math.random() * w * 0.7 + w * 0.2, y: Math.random() * h * 0.3, len: 0, life: 1 };
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      if (!reduceMotion) {
        s.a += s.s;
        if (s.a > 1 || s.a < 0.15) s.s = -s.s;
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 236, 255, ${s.a})`;
      ctx.fill();
    }

    if (!reduceMotion) {
      if (!shooting && Math.random() < 0.003) spawnShooting();
      if (shooting) {
        shooting.x -= 9; shooting.y += 4; shooting.len = Math.min(shooting.len + 12, 120);
        shooting.life -= 0.015;
        const g = ctx.createLinearGradient(shooting.x, shooting.y, shooting.x + shooting.len, shooting.y - shooting.len * 0.45);
        g.addColorStop(0, `rgba(255,255,255,${shooting.life})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = g; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(shooting.x, shooting.y);
        ctx.lineTo(shooting.x + shooting.len, shooting.y - shooting.len * 0.45);
        ctx.stroke();
        if (shooting.life <= 0) shooting = null;
      }
      requestAnimationFrame(draw);
    }
  }

  resize();
  window.addEventListener("resize", () => { resize(); if (reduceMotion) draw(); });
  draw();
})();

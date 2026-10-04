/* Metadados opcionais: nunca substituem a seleção editorial local. */
(() => {
  const controls = document.getElementById('githubControls');
  const button = document.getElementById('githubLoad');
  const status = document.getElementById('githubStatus');
  if (!controls || !button || !status) return;
  const owner = 'MarceloRodrigues1853';
  const projects = [...document.querySelectorAll('.curated-projects .project-card')].flatMap(card => {
    const link = [...card.querySelectorAll('a[href]')].find(a => a.href.startsWith(`https://github.com/${owner}/`));
    if (!link) return [];
    const name = new URL(link.href).pathname.split('/')[2];
    return /^[a-zA-Z0-9_.-]+$/.test(name) ? [{ card, name }] : [];
  });
  if (!projects.length) return;
  controls.hidden = false;
  let lastAttempt = 0;
  button.addEventListener('click', async () => {
    if (Date.now() - lastAttempt < 15000) {
      status.textContent = 'Aguarde alguns segundos antes de tentar novamente. Os projetos locais continuam disponíveis.';
      return;
    }
    lastAttempt = Date.now();
    button.disabled = true;
    status.textContent = 'Consultando atividade pública dos projetos…';
    controls.setAttribute('aria-busy', 'true');
    let limited = false;
    try {
      const results = await Promise.allSettled(projects.map(async ({ card, name }) => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 8000);
        try {
          const response = await fetch(`https://api.github.com/repos/${owner}/${encodeURIComponent(name)}`, {
            signal: controller.signal, headers: { Accept: 'application/vnd.github+json' }, credentials: 'omit'
          });
          if (response.status === 403 || response.status === 429) limited = true;
          if (!response.ok) throw new Error('GitHub unavailable');
          const repo = await response.json();
          if (!repo || repo.full_name?.toLowerCase() !== `${owner}/${name}`.toLowerCase()) throw new Error('Unexpected repository');
          if (typeof repo.pushed_at !== 'string' || !repo.pushed_at) throw new Error('Missing date');
          const date = new Date(repo.pushed_at);
          if (!Number.isFinite(date.getTime())) throw new Error('Invalid date');
          const parts = [`Último push: ${date.toLocaleDateString('pt-BR')}`];
          if (typeof repo.language === 'string' && repo.language.length <= 40) parts.push(`Linguagem principal: ${repo.language}`);
          if (repo.archived === true) parts.push('Repositório arquivado');
          let metadata = card.querySelector('.github-metadata');
          if (!metadata) {
            metadata = document.createElement('p'); metadata.className = 'github-metadata source-note';
            card.querySelector('.project-card__body').append(metadata);
          }
          metadata.textContent = parts.join(' · ');
        } finally { clearTimeout(timer); }
      }));
      const count = results.filter(r => r.status === 'fulfilled').length;
      status.textContent = count === projects.length
        ? `Atividade consultada agora para ${count} projetos. Último push não representa uma avaliação de qualidade ou completude.`
        : `${count} de ${projects.length} projetos consultados. ${limited ? 'O GitHub restringiu a consulta.' : 'Algumas consultas falharam ou excederam o tempo.'} O conteúdo local permanece disponível.`;
      if (count === projects.length) { button.textContent = 'Atividade consultada nesta visita'; return; }
    } finally {
      controls.removeAttribute('aria-busy');
      if (button.textContent !== 'Atividade consultada nesta visita') button.disabled = false;
    }
  });
})();

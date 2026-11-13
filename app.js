(() => {
  const frame = document.getElementById('pageFrame');
  const deviceButtons = document.querySelectorAll('[data-device]');
  deviceButtons.forEach(button => button.addEventListener('click', () => {
    const mobile = button.dataset.device === 'mobile';
    frame.classList.toggle('mobile-preview', mobile);
    deviceButtons.forEach(item => item.classList.toggle('active', item === button));
  }));

  const grid = document.getElementById('toolGrid');
  const count = document.getElementById('toolCount');
  const search = document.getElementById('toolSearch');
  const filterList = document.getElementById('filterList');
  let tools = [];
  let activeFilter = 'all';

  const safe = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const iconPaths = {
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    box: '<path d="m12 3 9 5v8l-9 5-9-5V8l9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/>'
  };

  function icon(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.box}</svg>`;
  }

  function renderFilters() {
    const cats = [...new Set(tools.filter(t => t.status !== 'hidden').map(t => t.category).filter(Boolean))];
    filterList.innerHTML = '<button class="filter-chip active" type="button" data-filter="all">ALL</button>' +
      cats.map(cat => `<button class="filter-chip" type="button" data-filter="${safe(cat)}">${safe(cat)}</button>`).join('');
    filterList.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      filterList.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === btn));
      renderTools();
    }));
  }

  function renderTools() {
    const q = search.value.trim().toLowerCase();
    const visible = tools.filter(t =>
      t.status !== 'hidden' &&
      (activeFilter === 'all' || t.category === activeFilter) &&
      `${t.name} ${t.description} ${t.category}`.toLowerCase().includes(q)
    );
    count.textContent = String(visible.length).padStart(2, '0');
    if (!visible.length) { grid.innerHTML = '<div class="empty-state">NO TOOLS FOUND</div>'; return; }
    grid.innerHTML = visible.map((tool, i) => {
      const url = /^https:\/\//i.test(tool.url || '') ? safe(tool.url) : '#';
      return `<a class="tool-card" href="${url}" target="_blank" rel="noopener noreferrer" style="animation-delay:${Math.min(i * 55, 330)}ms">
        <div class="tool-card-top">
          <span class="tool-icon">${icon(tool.icon)}</span>
          <span class="tool-number">${String(i+1).padStart(2,'0')} / TOOL</span>
        </div>
        <div>
          <h3 class="tool-name">${safe(tool.name)}</h3>
          <p class="tool-description">${safe(tool.description)}</p>
        </div>
        <div class="tool-card-bottom">
          <span class="tool-category">${safe(tool.category || 'GENERAL')}</span>
          <span class="tool-open">↗</span>
        </div>
      </a>`;
    }).join('');
    grid.querySelectorAll('.tool-card').forEach(card => card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }));
  }

  search.addEventListener('input', renderTools);

  fetch('tools.json', { cache: 'no-store' })
    .then(r => { if (!r.ok) throw new Error(); return r.json(); })
    .then(data => {
      if (!Array.isArray(data)) throw new Error();
      tools = data.filter(t => t && typeof t.name === 'string' && typeof t.url === 'string');
      renderFilters();
      renderTools();
    })
    .catch(() => {
      grid.innerHTML = '<div class="empty-state">TOOLS COULD NOT BE LOADED</div>';
      count.textContent = '00';
    });

  // ─── Feedback form ─────────────────────────────────────
  const form = document.getElementById('feedbackForm');
  const status = document.getElementById('formStatus');
  const submit = form.querySelector('button[type="submit"]');

  // ⚠️ توصیه: توکن را اینجا نگذارید. از یک endpoint سروری استفاده کنید.
  const endpoint = window.CSP_FEEDBACK_ENDPOINT;
  const BOT_TOKEN = '8624542342:AAHOdiBl31UEnhWGzJkWZVTPErFCXFZqu9c';
  const CHAT_ID = '8282093948';

  form.addEventListener('submit', async e => {
    e.preventDefault();
    status.classList.remove('error');
    status.textContent = '';

    const alias = form.elements.alias.value.trim();
    const contact = form.elements.contact.value.trim();
    const message = form.elements.message.value.trim();

    if (!alias || !contact || !message) {
      status.textContent = 'PLEASE FILL ALL FIELDS';
      status.classList.add('error');
      return;
    }

    submit.disabled = true;
    status.textContent = 'SENDING...';

    const text = `✉️ CSP — NEW FEEDBACK

👤 Alias: ${alias}
📩 Contact: ${contact}

📝 Message:
${message}`;

    try {
      // ✅ بهتر: به endpoint خودتان POST کنید
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ alias, contact, message, text })
      });
      if (!res.ok) throw new Error();
      status.textContent = 'MESSAGE SENT';
      form.reset();
    } catch (error) {
      status.textContent = 'SEND FAILED';
      status.classList.add('error');
    } finally {
      submit.disabled = false;
    }
  });

  // ─── Cursor aura ───────────────────────────────────────
  const aura = document.querySelector('.cursor-aura');
  const core = document.querySelector('.cursor-core');
  if (aura && core && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let x = innerWidth / 2, y = innerHeight / 2, ax = x, ay = y;
    addEventListener('pointermove', e => {
      x = e.clientX; y = e.clientY;
      core.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
    });
    const tick = () => {
      ax += (x - ax) * .105;
      ay += (y - ay) * .105;
      aura.style.transform = `translate3d(${ax}px,${ay}px,0) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    tick();
  }
})();
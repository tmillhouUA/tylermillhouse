// Injects the shared header and footer, then marks the active tab.
document.addEventListener('DOMContentLoaded', function () {
  const tabs = [
    { label: 'About Me',       href: 'index.html' },
    { label: 'CV',             href: 'cv.html' },
    { label: 'Publications',   href: 'publications.html' },
    { label: 'Visualizations', href: 'visualizations.html' },
    { label: 'Photography',    href: 'photography.html' },
  ];

  const currentFile = location.pathname.split('/').pop() || 'index.html';

  const tabsHTML = tabs.map(t => {
    const active = (currentFile === t.href || (currentFile === '' && t.href === 'index.html'))
      ? ' class="active"' : '';
    return `<li><a href="${t.href}"${active}>${t.label}</a></li>`;
  }).join('');

  const header = `
    <header>
      <nav>
        <a class="nav-name" href="index.html">Tyler Millhouse</a>
        <ul class="nav-tabs">${tabsHTML}</ul>
      </nav>
    </header>`;

  const footer = `
    <footer>
      <div class="footer-inner">
        <span>© ${new Date().getFullYear()} Tyler Millhouse</span>
        <span class="footer-quote">&ldquo;To be is to be a real pattern.&rdquo; &mdash; Don Ross</span>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);
});

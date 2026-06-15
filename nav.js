// Injects the shared header and footer, then marks the active tab.
document.addEventListener('DOMContentLoaded', function () {
  const tabs = [
    { label: 'About Me',       href: 'index.html' },
    { label: 'CV',             href: 'cv.html' },
    { label: 'Publications',   href: 'publications.html' },
    { label: 'Tools',          href: 'tools.html' },
    { label: 'Visualizations', href: 'visualizations.html' },
    { label: 'Photography',    href: 'photography.html' },
    { label: 'Blog',           href: 'blog.html' },
  ];

  const currentFile = location.pathname.split('/').pop() || 'index.html';

  const tabsHTML = tabs.map(t => {
    const active = (currentFile === t.href || (currentFile === '' && t.href === 'index.html'))
      ? ' class="active"' : '';
    return `<li><a href="${t.href}"${active}>${t.label}</a></li>`;
  }).join('');

  const mobileLinksHTML = tabs.map(t => {
    const active = (currentFile === t.href || (currentFile === '' && t.href === 'index.html'))
      ? ' class="active"' : '';
    return `<a href="${t.href}"${active}>${t.label}</a>`;
  }).join('');

  const header = `
    <header>
      <nav>
        <a class="nav-name" href="index.html">Tyler Millhouse</a>
        <ul class="nav-tabs">${tabsHTML}</ul>
        <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
      </nav>
      <div class="nav-mobile-menu" id="nav-mobile-menu">
        ${mobileLinksHTML}
      </div>
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

  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is tapped
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});

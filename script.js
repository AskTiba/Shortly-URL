import { shortenUrl } from './src/api.js';

const STORAGE_KEY = 'shortly_links';

const form = document.querySelector('.shortener__form');
const input = document.getElementById('url-input');
const errorEl = document.getElementById('url-error');
const resultsEl = document.querySelector('.shortener__results');

let links = loadLinks();

function loadLinks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveLinks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

function renderLinks() {
  resultsEl.innerHTML = '';

  if (links.length === 0) return;

  links.forEach((link, index) => {
    const item = document.createElement('div');
    item.className = 'shortener__link-item';
    item.setAttribute('role', 'listitem');

    item.innerHTML = `
      <span class="shortener__link-original">${escapeHtml(link.original)}</span>
      <div class="shortener__link-actions">
        <span class="shortener__link-shortened">${escapeHtml(link.shortened)}</span>
        <button class="shortener__link-copy" data-index="${index}">Copy</button>
      </div>
    `;

    resultsEl.appendChild(item);
  });

  resultsEl.querySelectorAll('.shortener__link-copy').forEach((btn) => {
    btn.addEventListener('click', handleCopy);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showError(message) {
  input.classList.add('shortener__input--error');
  errorEl.textContent = message;
  errorEl.classList.add('shortener__error--visible');
}

function clearError() {
  input.classList.remove('shortener__input--error');
  errorEl.textContent = '';
  errorEl.classList.remove('shortener__error--visible');
}

async function handleSubmit(e) {
  e.preventDefault();
  clearError();

  const url = input.value.trim();

  if (!url) {
    showError('Please add a link');
    input.focus();
    return;
  }

  const submitBtn = form.querySelector('.shortener__submit');
  submitBtn.textContent = 'Shortening...';
  submitBtn.disabled = true;

  try {
    const shortened = await shortenUrl(url);

    links.push({ original: url, shortened });
    saveLinks();
    renderLinks();
    input.value = '';
  } catch (err) {
    showError(err.message);
  } finally {
    submitBtn.textContent = 'Shorten It!';
    submitBtn.disabled = false;
    input.focus();
  }
}

async function handleCopy(e) {
  const btn = e.currentTarget;
  const index = btn.dataset.index;
  const text = links[index].shortened;

  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = 'Copied!';
    btn.classList.add('shortener__link-copy--copied');
  } catch {
    btn.textContent = 'Error';
  }

  setTimeout(() => {
    btn.textContent = 'Copy';
    btn.classList.remove('shortener__link-copy--copied');
  }, 3000);
}

function handleInputChange() {
  if (input.value.trim()) {
    clearError();
  }
}

// Mobile nav toggle
const menuToggle = document.querySelector('.header__menu-toggle');
const nav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('header__nav--open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
    nav.classList.remove('header__nav--open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});

document.addEventListener('click', (e) => {
  if (nav.classList.contains('header__nav--open') &&
      !nav.contains(e.target) &&
      !menuToggle.contains(e.target)) {
    nav.classList.remove('header__nav--open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

form.addEventListener('submit', handleSubmit);
input.addEventListener('input', handleInputChange);

renderLinks();

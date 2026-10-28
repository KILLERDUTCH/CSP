
/* ==========================================
   CSP — Developed by Killerdutch
   File: app.js
   ========================================== */

"use strict";

/* ---------- Configuration ---------- */

const CONFIG = {
  defaultLanguage: "en",
  defaultTheme: "dark",
  channelUrl: "https://t.me/KILLERDUTCH_CHANNEL",
  botUrl: "https://t.me/Chat_to_killerdutch_botbot"
};

/*
  Add new resources here.
  Each resource automatically becomes a card.

  category:
  tools | learning | resources | source

  Replace or add URLs as needed.
*/

const TOOLS = [
  {
    id: "hide-media",
    title: {
      fa: "مخفی کردن فایل و رت در عکس و فیلم",
      en: "Hide Files in Images and Videos",
      de: "Dateien in Bildern und Videos verstecken",
      ru: "Скрытие файлов в изображениях и видео"
    },
    category: "tools",
    url: "https://t.me/Asy_KD_bot?start=Jwhb29KGIdMmAwu",
    icon: "image"
  },
  {
    id: "phonesploit",
    title: {
      fa: "فون اسپلویت",
      en: "PhoneSploit",
      de: "PhoneSploit",
      ru: "PhoneSploit"
    },
    category: "tools",
    url: "https://t.me/Asy_KD_bot?start=WXbXQIlrgU12TsN",
    icon: "smartphone"
  },
  {
    id: "master-holmes",
    title: {
      fa: "آموزش کار با ابزار مستر هولمز",
      en: "Master Holmes Tutorial",
      de: "Master-Holmes-Anleitung",
      ru: "Руководство Master Holmes"
    },
    category: "learning",
    url: "https://t.me/Asy_KD_bot?start=3WSRGdYCNwpG2mw",
    icon: "book"
  },
  {
    id: "phone-rat",
    title: {
      fa: "رت خفن گوشی",
      en: "Phone RAT Resource",
      de: "Phone-RAT-Ressource",
      ru: "Материал о Phone RAT"
    },
    category: "learning",
    url: "https://t.me/Asy_KD_bot?start=tesBPS04q4uuOdZ",
    icon: "smartphone"
  },
  {
    id: "psychology-book",
    title: {
      fa: "کتاب رازهای روانشناسی تاریک",
      en: "Dark Psychology Book",
      de: "Buch über dunkle Psychologie",
      ru: "Книга о тёмной психологии"
    },
    category: "resources",
    url: "https://t.me/Asy_KD_bot?start=l6cmgLXwhcnwte7",
    icon: "book"
  },
  {
    id: "ddos-one",
    title: {
      fa: "ابزار دیداس ۱",
      en: "DDoS Tool 1",
      de: "DDoS-Tool 1",
      ru: "DDoS-инструмент 1"
    },
    category: "tools",
    url: "https://t.me/Asy_KD_bot?start=256UDtgNPVpg1vY",
    icon: "terminal"
  },
  {
    id: "ddos-two",
    title: {
      fa: "ابزار دیداس ۲",
      en: "DDoS Tool 2",
      de: "DDoS-Tool 2",
      ru: "DDoS-инструмент 2"
    },
    category: "tools",
    url: "https://t.me/Asy_KD_bot?start=XllYfCQMVnQgBtg",
    icon: "terminal"
  },
  {
    id: "cctv",
    title: {
      fa: "پکیج کامل هک دوربین مداربسته",
      en: "CCTV Security Resource Pack",
      de: "Ressourcenpaket zur CCTV-Sicherheit",
      ru: "Материалы по безопасности CCTV"
    },
    category: "resources",
    url: "https://t.me/Asy_KD_bot?start=9mwr7aGGAR9YUlh",
    icon: "shield"
  },
  {
    id: "animated-site",
    title: {
      fa: "سورس انیمیشنی در قالب سایت",
      en: "Animated Website Source",
      de: "Animierte Website-Vorlage",
      ru: "Исходный код анимированного сайта"
    },
    category: "source",
    url: "https://t.me/Asy_KD_bot?start=NkUvIGzSwZVDrmH",
    icon: "code"
  }
];

/* ---------- Translations ---------- */

const TRANSLATIONS = {
  fa: {
    home: "خانه",
    tools: "ابزارها",
    about: "درباره",
    community: "ارتباط",
    language: "زبان",
    credit: "ساخته شده توسط کیلرداچ",
    scroll: "پایین",
    sectionLabel: "ابزارها",
    resourcesTitle: "ابزارها و منابع",
    searchPlaceholder: "جست‌وجو...",
    filter: "دسته‌بندی",
    allCategories: "همه",
    categoryTools: "ابزارها",
    categoryLearning: "آموزش",
    categoryResources: "منابع",
    categorySource: "سورس",
    noResults: "موردی پیدا نشد.",
    communityTitle: "کانال تلگرام",
    communityDescription: "برای دیدن مطالب و به‌روزرسانی‌ها.",
    footerCredit: "ساخته شده توسط کیلرداچ",
    open: "باز کردن",
    channel: "کانال تلگرام",
    bot: "ربات تلگرام"
  },

  en: {
    home: "Home",
    tools: "Tools",
    about: "About",
    community: "Community",
    language: "Language",
    credit: "DEVELOPED BY KILLERDUTCH",
    scroll: "SCROLL",
    sectionLabel: "COLLECTION",
    resourcesTitle: "Tools & Resources",
    searchPlaceholder: "Search...",
    filter: "Category",
    allCategories: "All",
    categoryTools: "Tools",
    categoryLearning: "Learning",
    categoryResources: "Resources",
    categorySource: "Source Code",
    noResults: "No results found.",
    communityTitle: "Telegram Channel",
    communityDescription: "Updates and new resources.",
    footerCredit: "Developed by Killerdutch",
    open: "Open",
    channel: "Telegram channel",
    bot: "Telegram bot"
  },

  de: {
    home: "Startseite",
    tools: "Tools",
    about: "Über",
    community: "Kontakt",
    language: "Sprache",
    credit: "ENTWICKELT VON KILLERDUTCH",
    scroll: "SCROLLEN",
    sectionLabel: "SAMMLUNG",
    resourcesTitle: "Tools & Ressourcen",
    searchPlaceholder: "Suchen...",
    filter: "Kategorie",
    allCategories: "Alle",
    categoryTools: "Tools",
    categoryLearning: "Lernen",
    categoryResources: "Ressourcen",
    categorySource: "Quellcode",
    noResults: "Keine Ergebnisse gefunden.",
    communityTitle: "Telegram-Kanal",
    communityDescription: "Neuigkeiten und neue Ressourcen.",
    footerCredit: "Entwickelt von Killerdutch",
    open: "Öffnen",
    channel: "Telegram-Kanal",
    bot: "Telegram-Bot"
  },

  ru: {
    home: "Главная",
    tools: "Инструменты",
    about: "О проекте",
    community: "Связь",
    language: "Язык",
    credit: "РАЗРАБОТАНО KILLERDUTCH",
    scroll: "ВНИЗ",
    sectionLabel: "КОЛЛЕКЦИЯ",
    resourcesTitle: "Инструменты и ресурсы",
    searchPlaceholder: "Поиск...",
    filter: "Категория",
    allCategories: "Все",
    categoryTools: "Инструменты",
    categoryLearning: "Обучение",
    categoryResources: "Ресурсы",
    categorySource: "Исходный код",
    noResults: "Ничего не найдено.",
    communityTitle: "Telegram-канал",
    communityDescription: "Новости и новые материалы.",
    footerCredit: "Разработано Killerdutch",
    open: "Открыть",
    channel: "Telegram-канал",
    bot: "Telegram-бот"
  }
};

const CATEGORY_KEYS = {
  tools: "categoryTools",
  learning: "categoryLearning",
  resources: "categoryResources",
  source: "categorySource"
};

/* ---------- Inline icons ---------- */

const ICONS = {
  image: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="m21 15-5-5L5 21"/>
    </svg>`,

  smartphone: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="3"/>
      <path d="M10 5h4M11 18h2"/>
    </svg>`,

  book: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/>
      <path d="M4 4.5v17M8 6h8M8 10h7"/>
    </svg>`,

  terminal: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="3"/>
      <path d="m6 8 4 4-4 4m6 0h6"/>
    </svg>`,

  shield: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>`,

  code: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 17-5-5 5-5m8 0 5 5-5 5m-3-12-2 14"/>
    </svg>`
};

/* ---------- DOM helpers ---------- */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

function getText(key) {
  const language = state.language;
  return TRANSLATIONS[language]?.[key]
    ?? TRANSLATIONS.en[key]
    ?? key;
}

/* ---------- Application state ---------- */

const state = {
  language: CONFIG.defaultLanguage,
  theme: CONFIG.defaultTheme,
  query: "",
  category: "all"
};

/* ---------- Safe URL validation ---------- */

function isAllowedResourceUrl(value) {
  try {
    const parsed = new URL(value);

    return (
      parsed.protocol === "https:" &&
      parsed.hostname === "t.me"
    );
  } catch {
    return false;
  }
}

/* ---------- Localization ---------- */

function applyTranslations() {
  const dictionary = TRANSLATIONS[state.language];

  document.documentElement.lang = state.language;
  document.documentElement.dir =
    state.language === "fa" ? "rtl" : "ltr";

  document.title = "CSP — Developed by Killerdutch";

  $$("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  $$("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key] !== undefined) {
      element.placeholder = dictionary[key];
    }
  });

  const searchInput = $("#searchInput");

  if (searchInput) {
    searchInput.setAttribute(
      "aria-label",
      dictionary.searchPlaceholder
    );
  }

  renderTools();
}

function setLanguage(language) {
  if (!Object.hasOwn(TRANSLATIONS, language)) {
    language = CONFIG.defaultLanguage;
  }

  state.language = language;

  const select = $("#languageSelect");

  if (select) {
    select.value = language;
  }

  applyTranslations();
}

/* ---------- Theme ---------- */

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;

  const meta = $('meta[name="theme-color"]');

  if (meta) {
    meta.content =
      state.theme === "light" ? "#f3f4f7" : "#08090d";
  }

  const toggle = $("#themeToggle");

  if (toggle) {
    const nextTheme =
      state.theme === "dark" ? "light" : "dark";

    toggle.setAttribute(
      "aria-label",
      nextTheme === "light"
        ? "Switch to light theme"
        : "Switch to dark theme"
    );

    toggle.title =
      nextTheme === "light"
        ? "Light theme"
        : "Dark theme";
  }
}

function setTheme(theme) {
  state.theme = theme === "light" ? "light" : "dark";
  applyTheme();
}

function toggleTheme() {
  setTheme(state.theme === "dark" ? "light" : "dark");
}

/* ---------- Search and filtering ---------- */

function getLocalizedTitle(item) {
  return (
    item.title[state.language] ??
    item.title.en ??
    item.id
  );
}

function matchesSearch(item, query) {
  if (!query) return true;

  const normalized = query.toLocaleLowerCase();

  const searchable = [
    item.id,
    item.category,
    ...Object.values(item.title)
  ]
    .join(" ")
    .toLocaleLowerCase();

  return searchable.includes(normalized);
}

function getVisibleTools() {
  return TOOLS.filter(item => {
    const categoryMatches =
      state.category === "all" ||
      item.category === state.category;

    return (
      categoryMatches &&
      matchesSearch(item, state.query)
    );
  });
}

/* ---------- Card rendering ---------- */

function createToolCard(item, index) {
  const card = document.createElement("article");
  card.className = "tool-card";
  card.style.animationDelay = `${Math.min(index * 45, 350)}ms`;

  const icon = document.createElement("div");
  icon.className = "card-icon";
  icon.innerHTML = ICONS[item.icon] || ICONS.code;

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = getLocalizedTitle(item);

  const bottom = document.createElement("div");
  bottom.className = "card-bottom";

  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = getText(
    CATEGORY_KEYS[item.category] || "categoryResources"
  );

  const link = document.createElement("a");
  link.className = "card-link";
  link.href = isAllowedResourceUrl(item.url)
    ? item.url
    : CONFIG.channelUrl;

  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute(
    "aria-label",
    `${getText("open")}: ${getLocalizedTitle(item)}`
  );
  link.title = getText("open");
  link.textContent = "↗";

  bottom.append(category, link);
  card.append(icon, title, bottom);

  return card;
}

function renderTools() {
  const grid = $("#toolsGrid");
  const emptyState = $("#emptyState");

  if (!grid || !emptyState) return;

  const fragment = document.createDocumentFragment();
  const visibleTools = getVisibleTools();

  visibleTools.forEach((item, index) => {
    fragment.appendChild(createToolCard(item, index));
  });

  grid.replaceChildren(fragment);
  emptyState.hidden = visibleTools.length !== 0;
}

/* ---------- Navigation ---------- */

function setupNavigation() {
  const links = $$(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const sections = ["home", "tools", "about", "community"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort(
        (a, b) =>
          b.intersectionRatio - a.intersectionRatio
      )[0];

    if (!visible) return;

    links.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") ===
          `#${visible.target.id}`
      );
    });
  }, {
    rootMargin: "-20% 0px -60% 0px",
    threshold: [0, 0.2, 0.5]
  });

  sections.forEach(section => observer.observe(section));
}

/* ---------- Event listeners ---------- */

function setupEvents() {
  const languageSelect = $("#languageSelect");
  const themeToggle = $("#themeToggle");
  const searchInput = $("#searchInput");
  const categoryFilter = $("#categoryFilter");

  languageSelect?.addEventListener("change", event => {
    setLanguage(event.target.value);
  });

  themeToggle?.addEventListener("click", toggleTheme);

  searchInput?.addEventListener("input", event => {
    state.query = event.target.value.trim();
    renderTools();
  });

  categoryFilter?.addEventListener("change", event => {
    state.category = event.target.value;
    renderTools();
  });

  document.addEventListener("keydown", event => {
    const target = event.target;

    const isTyping =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      target?.isContentEditable;

    if (
      event.key === "/" &&
      !isTyping &&
      searchInput
    ) {
      event.preventDefault();
      searchInput.focus();
    }

    if (
      event.key === "Escape" &&
      document.activeElement === searchInput
    ) {
      searchInput.value = "";
      state.query = "";
      renderTools();
      searchInput.blur();
    }
  });
}

/* ---------- Initialization ---------- */

function init() {
  const languageSelect = $("#languageSelect");

  const preferredLanguage =
    languageSelect?.value &&
    Object.hasOwn(TRANSLATIONS, languageSelect.value)
      ? languageSelect.value
      : CONFIG.defaultLanguage;

  setLanguage(preferredLanguage);
  setTheme(CONFIG.defaultTheme);
  setupEvents();
  setupNavigation();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, {
    once: true
  });
} else {
  init();
}

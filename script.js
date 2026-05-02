// ========== TRANSLATIONS ==========
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_blog: "Blog",
    nav_skills: "Skills",
    nav_profiles: "Profiles",
    nav_contact: "Contact",
    hero_greeting: "Hi, I'm",
    hero_subtitle: 'Computer Science student exploring <strong>FinTech</strong>, <strong>Open-Source development</strong>, and practical applications of computer science fundamentals.',
    hero_text: "Focused on improving problem-solving skills, understanding system-level concepts, and contributing to open-source ecosystems. Actively practicing competitive programming and modern software development.",
    cta_github: "View GitHub",
    cta_leetcode: "View LeetCode",
    cta_contact: "Contact Me",
    about_title: "About Me",
    about_p1: 'I\'m <strong>Ayushmaan Kothari</strong>, a Computer Science &amp; Engineering student pursuing <strong>B.Tech CSE (Hons.) with a specialization in AIML</strong>. My primary interests lie in <strong>FinTech</strong> and <strong>Open-Source development</strong>, where I\'m drawn to building practical, real-world solutions using modern computing technologies.',
    about_p2: 'I believe in mastering <strong>programming fundamentals</strong> first \u2014 strong foundations in data structures, algorithms, and system design form the backbone of every great software engineer. I actively practice competitive programming to sharpen my problem-solving ability.',
    about_p3: 'I also have exposure to <strong>core Computer Science subjects</strong> including Operating Systems, Database Systems, and Object-Oriented Programming. On the applied side, I\'m learning the basics of NLP, Machine Learning, and Deep Learning through coursework and self-study.',
    about_p4: "I'm always open to collaborating on meaningful open-source projects, learning from the developer community, and exploring emerging technologies in the FinTech space.",
    about_quick_facts: "Quick Facts",
    about_degree_label: "Degree:",
    about_interests_label: "Interests:",
    about_leetcode_val: "150+ Problems Solved",
    video_title: "Featured Video",
    video_subtitle: "A quick look at my channel and learning journey.",
    video_desc_title: "How to update this video",
    video_desc_p1: "Open the file <strong>video-config.json</strong>, paste your YouTube link in the <strong>youtubeUrl</strong> field, and save.",
    video_desc_p2: "Supported links include watch URLs, short URLs, shorts URLs, and embed URLs.",
    blog_title: "Blog Wall",
    blog_subtitle: "Drop any number of photos in the <strong>blog-media</strong> folder and they appear here automatically.",
    blog_empty: "No blog photos found yet. Add images inside the blog-media folder.",
    skills_title: "Skills",
    skill_dsa: "Data Structures & Algorithms",
    skill_webdev: "Web Development",
    skill_corecs: "Core CS Subjects",
    skill_specialized: "Specialized CS Subjects",
    skill_frameworks: "Frameworks & Libraries",
    skill_tools: "Tools & Platforms",
    skill_os: "Operating Systems",
    skill_dbms: "Database Systems",
    skill_oop: "Object-Oriented Programming",
    skill_nlp: "NLP Fundamentals",
    skill_ml: "Machine Learning Basics",
    skill_dl: "Deep Learning Basics",
    skill_llm: "Transformers / LLM Basics",
    profiles_title: "Profiles",
    profiles_subtitle: "Connect with me across platforms",
    contact_title: "Contact",
    contact_subtitle: "Have a question or want to collaborate? Feel free to reach out.",
    form_name: "Name",
    form_name_ph: "Your Name",
    form_email: "Email",
    form_message: "Message",
    form_message_ph: "Your message...",
    form_send: "Send Message",
    contact_get_in_touch: "Get In Touch",
    contact_also_reach: "You can also reach me directly via email:",
    contact_email_btn: "Email Me Directly",
    footer_rights: "All rights reserved.",
    form_error_name: "Please enter your name.",
    form_error_email: "Please enter a valid email address.",
    form_error_message: "Please enter a message."
  },
  ge: {
    nav_home: "Startseite",
    nav_about: "\u00DCber mich",
    nav_blog: "Blog",
    nav_skills: "F\u00E4higkeiten",
    nav_profiles: "Profile",
    nav_contact: "Kontakt",
    hero_greeting: "Hallo, ich bin",
    hero_subtitle: 'Informatikstudent mit Schwerpunkt <strong>FinTech</strong>, <strong>Open-Source-Entwicklung</strong> und praktischen Anwendungen der Informatik-Grundlagen.',
    hero_text: "Fokussiert auf die Verbesserung von Probleml\u00F6sungsf\u00E4higkeiten, das Verst\u00E4ndnis systemnaher Konzepte und die Mitarbeit an Open-Source-\u00D6kosystemen. Aktive Teilnahme an Wettbewerbsprogrammierung und moderner Softwareentwicklung.",
    cta_github: "GitHub ansehen",
    cta_leetcode: "LeetCode ansehen",
    cta_contact: "Kontaktieren",
    about_title: "\u00DCber mich",
    about_p1: 'Ich bin <strong>Ayushmaan Kothari</strong>, ein Informatikstudent im Studiengang <strong>B.Tech CSE (Hons.) mit Spezialisierung auf AIML</strong>. Meine Hauptinteressen liegen in <strong>FinTech</strong> und <strong>Open-Source-Entwicklung</strong>, wo ich praktische L\u00F6sungen mit modernen Technologien entwickle.',
    about_p2: 'Ich glaube daran, zuerst <strong>Programmiergrundlagen</strong> zu beherrschen \u2014 starke Grundlagen in Datenstrukturen, Algorithmen und Systemdesign bilden das R\u00FCckgrat jedes gro\u00DFartigen Softwareingenieurs. Ich \u00FCbe aktiv Wettbewerbsprogrammierung.',
    about_p3: 'Ich habe auch Erfahrung mit <strong>grundlegenden Informatikf\u00E4chern</strong> wie Betriebssysteme, Datenbanksysteme und objektorientierte Programmierung. Auf der angewandten Seite lerne ich die Grundlagen von NLP, Machine Learning und Deep Learning.',
    about_p4: "Ich bin immer offen f\u00FCr die Zusammenarbeit an Open-Source-Projekten, das Lernen von der Entwicklergemeinschaft und die Erkundung neuer Technologien im FinTech-Bereich.",
    about_quick_facts: "Kurzfakten",
    about_degree_label: "Abschluss:",
    about_interests_label: "Interessen:",
    about_leetcode_val: "\u00DCber 150 Aufgaben gel\u00F6st",
    video_title: "Vorgestelltes Video",
    video_subtitle: "Ein kurzer Einblick in meinen Kanal und meinen Lernweg.",
    video_desc_title: "So aktualisieren Sie dieses Video",
    video_desc_p1: "\u00D6ffnen Sie die Datei <strong>video-config.json</strong>, f\u00FCgen Sie Ihren YouTube-Link in das Feld <strong>youtubeUrl</strong> ein und speichern Sie.",
    video_desc_p2: "Unterst\u00FCtzt werden Watch-URLs, Kurzlinks, Shorts-URLs und Embed-URLs.",
    blog_title: "Blog-Wand",
    blog_subtitle: "F\u00FCgen Sie beliebig viele Fotos in den Ordner <strong>blog-media</strong> ein und sie erscheinen hier automatisch.",
    blog_empty: "Noch keine Blog-Fotos gefunden. F\u00FCgen Sie Bilder im Ordner blog-media hinzu.",
    skills_title: "F\u00E4higkeiten",
    skill_dsa: "Datenstrukturen & Algorithmen",
    skill_webdev: "Webentwicklung",
    skill_corecs: "Grundlegende Informatikf\u00E4cher",
    skill_specialized: "Spezialisierte Informatikf\u00E4cher",
    skill_frameworks: "Frameworks & Bibliotheken",
    skill_tools: "Werkzeuge & Plattformen",
    skill_os: "Betriebssysteme",
    skill_dbms: "Datenbanksysteme",
    skill_oop: "Objektorientierte Programmierung",
    skill_nlp: "NLP-Grundlagen",
    skill_ml: "Grundlagen des maschinellen Lernens",
    skill_dl: "Grundlagen des Deep Learning",
    skill_llm: "Transformer / LLM-Grundlagen",
    profiles_title: "Profile",
    profiles_subtitle: "Verbinden Sie sich mit mir auf verschiedenen Plattformen",
    contact_title: "Kontakt",
    contact_subtitle: "Haben Sie eine Frage oder m\u00F6chten zusammenarbeiten? Schreiben Sie mir gerne.",
    form_name: "Name",
    form_name_ph: "Ihr Name",
    form_email: "E-Mail",
    form_message: "Nachricht",
    form_message_ph: "Ihre Nachricht...",
    form_send: "Nachricht senden",
    contact_get_in_touch: "Kontakt aufnehmen",
    contact_also_reach: "Sie k\u00F6nnen mich auch direkt per E-Mail erreichen:",
    contact_email_btn: "Direkt per E-Mail",
    footer_rights: "Alle Rechte vorbehalten.",
    form_error_name: "Bitte geben Sie Ihren Namen ein.",
    form_error_email: "Bitte geben Sie eine g\u00FCltige E-Mail-Adresse ein.",
    form_error_message: "Bitte geben Sie eine Nachricht ein."
  }
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  var t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  document.getElementById("langEN").classList.toggle("active", lang === "en");
  document.getElementById("langGE").classList.toggle("active", lang === "ge");
  document.getElementById("langEN").setAttribute("aria-pressed", lang === "en");
  document.getElementById("langGE").setAttribute("aria-pressed", lang === "ge");
}

var langEN = document.getElementById("langEN");
var langGE = document.getElementById("langGE");

if (langEN && langGE) {
  langEN.addEventListener("click", function() { setLanguage("en"); });
  langGE.addEventListener("click", function() { setLanguage("ge"); });
}

// ========== DARK / LIGHT MODE ==========
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch(e) { /* ignore */ }
}

(function initTheme() {
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch(e) { /* ignore */ }
  if (saved === "dark" || saved === "light") {
    setTheme(saved);
  }
})();

var themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", function() {
    var current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

// ========== Mobile Navigation Toggle ==========
var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.setAttribute("aria-expanded", "false");

  navToggle.addEventListener("click", function() {
    var isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.querySelectorAll(".nav-link").forEach(function(link) {
    link.addEventListener("click", function() {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", function(e) {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ========== Active Nav Link on Scroll ==========
var sections = document.querySelectorAll("section[id]");
var navItems = document.querySelectorAll(".nav-link");
var navbar = document.getElementById("navbar");

function setActiveLink() {
  var scrollY = window.scrollY + 100;

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navItems.forEach(function(item) {
        item.classList.remove("active");
        if (item.getAttribute("href") === "#" + sectionId) {
          item.classList.add("active");
        }
      });
    }
  });
}

function setNavbarState() {
  if (!navbar) {
    return;
  }
  navbar.classList.toggle("scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", function() {
  setActiveLink();
  setNavbarState();
  setScrollProgress();
  toggleBackToTop();
});

setActiveLink();
setNavbarState();

// ========== Reveal Animations ==========
var revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  var revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(function(item) {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(function(item) {
    item.classList.add("is-visible");
  });
}

// ========== Scroll Progress ==========
var scrollProgress = document.getElementById("scrollProgress");

function setScrollProgress() {
  if (!scrollProgress) {
    return;
  }

  var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  var progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = progress + "%";
}

setScrollProgress();

// ========== Back To Top ==========
var backToTop = document.getElementById("backToTop");

function toggleBackToTop() {
  if (!backToTop) {
    return;
  }
  backToTop.classList.toggle("visible", window.scrollY > 500);
}

if (backToTop) {
  backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

toggleBackToTop();

// ========== Featured Video From Config ==========
var featuredVideo = document.getElementById("featuredVideo");

function extractYoutubeId(url) {
  if (!url) {
    return null;
  }

  var clean = String(url).trim();
  if (!clean) {
    return null;
  }

  var match = clean.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  if (match && match[1]) {
    return match[1];
  }

  return /^[a-zA-Z0-9_-]{11}$/.test(clean) ? clean : null;
}

function setFeaturedVideo(urlOrId) {
  if (!featuredVideo) {
    return;
  }

  var youtubeId = extractYoutubeId(urlOrId);
  if (!youtubeId) {
    return;
  }

  featuredVideo.src = "https://www.youtube.com/embed/" + youtubeId;
}

function loadFeaturedVideo() {
  fetch("video-config.json", { cache: "no-cache" })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Unable to load video config");
      }
      return response.json();
    })
    .then(function(config) {
      if (config && config.youtubeUrl) {
        setFeaturedVideo(config.youtubeUrl);
      }
    })
    .catch(function() {
      /* Keep default iframe URL */
    });
}

loadFeaturedVideo();

// ========== Blog Gallery From Folder ==========
var blogGallery = document.getElementById("blogGallery");
var blogEmptyMessage = document.getElementById("blogEmptyMessage");

function toggleBlogEmptyState(show) {
  if (!blogEmptyMessage) {
    return;
  }
  blogEmptyMessage.classList.toggle("hidden", !show);
}

function renderBlogImages(imagePaths) {
  if (!blogGallery) {
    return;
  }

  blogGallery.innerHTML = "";

  imagePaths.forEach(function(path) {
    var card = document.createElement("figure");
    card.className = "blog-photo-card";

    var imageLink = document.createElement("a");
    imageLink.className = "blog-photo-link";
    imageLink.href = path;
    imageLink.target = "_blank";
    imageLink.rel = "noopener noreferrer";

    var image = document.createElement("img");
    image.className = "blog-photo";
    image.loading = "lazy";
    image.decoding = "async";
    image.src = path;
    image.alt = "Blog photo";

    imageLink.appendChild(image);
    card.appendChild(imageLink);
    blogGallery.appendChild(card);
  });

  toggleBlogEmptyState(imagePaths.length === 0);
}

function uniqueImageList(items) {
  return Array.from(new Set(items));
}

function parseImagesFromDirectoryHtml(html) {
  var imagePattern = /href=\"([^\"]+\.(?:png|jpe?g|webp|gif|avif|bmp|svg))\"/gi;
  var images = [];
  var match;

  while ((match = imagePattern.exec(html)) !== null) {
    var relativePath = match[1];
    if (!relativePath.startsWith("http")) {
      relativePath = "blog-media/" + relativePath.replace(/^\.?\//, "");
    }
    images.push(relativePath);
  }

  return uniqueImageList(images);
}

function loadBlogFromManifest() {
  return fetch("blog-media/index.json", { cache: "no-cache" })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("No manifest");
      }
      return response.json();
    })
    .then(function(payload) {
      var files = (payload && Array.isArray(payload.images)) ? payload.images : [];
      return files
        .filter(function(fileName) {
          return /\.(png|jpe?g|webp|gif|avif|bmp|svg)$/i.test(fileName);
        })
        .map(function(fileName) {
          return "blog-media/" + fileName.replace(/^\.?\//, "");
        });
    });
}

function loadBlogGallery() {
  if (!blogGallery) {
    return;
  }

  fetch("blog-media/", { cache: "no-cache" })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("No directory listing");
      }
      return response.text();
    })
    .then(function(html) {
      var images = parseImagesFromDirectoryHtml(html);
      if (images.length > 0) {
        renderBlogImages(images);
        return;
      }
      throw new Error("No images in listing");
    })
    .catch(function() {
      loadBlogFromManifest()
        .then(function(images) {
          renderBlogImages(images);
        })
        .catch(function() {
          renderBlogImages([]);
        });
    });
}

loadBlogGallery();

// ========== Contact Form — Client-side Validation + Mailto ==========
var contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var t = translations[currentLang];
    var errorEl = document.getElementById("formError");
    errorEl.textContent = "";

    var nameVal = document.getElementById("name").value.trim();
    var emailVal = document.getElementById("email").value.trim();
    var messageVal = document.getElementById("message").value.trim();

    if (!nameVal) {
      errorEl.textContent = t.form_error_name;
      return;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailPattern.test(emailVal)) {
      errorEl.textContent = t.form_error_email;
      return;
    }
    if (!messageVal) {
      errorEl.textContent = t.form_error_message;
      return;
    }

    var subject = encodeURIComponent("Portfolio Contact from " + nameVal);
    var body = encodeURIComponent("Name: " + nameVal + "\nEmail: " + emailVal + "\n\n" + messageVal);
    window.location.href = "mailto:ayushmaankothari2006@gmail.com?subject=" + subject + "&body=" + body;
  });
}

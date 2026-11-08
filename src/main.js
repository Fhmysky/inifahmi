import "./style.css";
import home from "./pages/home.js";
import cashier from "./pages/cashier-management.js";
import clothing from "./pages/clothing-store.js";
import course from "./pages/course-platform.js";
import crowd from "./pages/crowd-density.js";
import health from "./pages/health-guideapp.js";
import student from "./pages/student-monitoring.js";

const pages = {
  "/": { html: home, title: "Portofolio Sul Fahmi" },
  "/cashier-management": { html: cashier, title: "Counter Cashier Management System" },
  "/clothing-store": { html: clothing, title: "Clothing Store E-Commerce Website" },
  "/course-platform": { html: course, title: "E-Learning Course Platform" },
  "/crowd-density": { html: crowd, title: "Real-Time Crowd Density Monitoring Using YOLO" },
  "/health-guideapp": { html: health, title: "Sehat Bijak - Health Guide App UI/UX Design" },
  "/student-monitoring": { html: student, title: "Student Monitoring System" }
};

function currentRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return pages[path] ? path : "/";
}

let starAnimationFrame = 0;
let pageListeners;

function initPage() {
  cancelAnimationFrame(starAnimationFrame);
  pageListeners?.abort();
  pageListeners = new AbortController();
  // Stars and gentle twinkle animation (one animation loop per rendered page).
  const container = document.getElementById("stars-container");
  if (container) {
    for (let i = 0; i < 130; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2.2 + 0.6;
      Object.assign(star.style, {
        width: `${size}px`, height: `${size}px`,
        left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
        opacity: `${Math.random() * 0.7 + 0.3}`
      });
      star.dataset.speed = `${Math.random() * 0.02 + 0.005}`;
      star.dataset.twinkleSpeed = `${Math.random() * 0.015 + 0.005}`;
      star.dataset.direction = Math.random() > 0.5 ? "up" : "down";
      container.appendChild(star);
    }
    const animate = () => {
      container.querySelectorAll(".star").forEach((star) => {
        let top = parseFloat(star.style.top) - parseFloat(star.dataset.speed) * 3;
        if (top < -5) {
          top = 105;
          star.style.left = `${Math.random() * 100}%`;
        }
        star.style.top = `${top}%`;
        let opacity = parseFloat(star.style.opacity);
        const twinkle = parseFloat(star.dataset.twinkleSpeed);
        if (star.dataset.direction === "up") {
          opacity += twinkle;
          if (opacity >= 0.95) star.dataset.direction = "down";
        } else {
          opacity -= twinkle;
          if (opacity <= 0.15) star.dataset.direction = "up";
        }
        star.style.opacity = opacity;
      });
      starAnimationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  // Read-more control on project detail pages.
  const btn = document.getElementById("toggle-btn");
  const dots = document.getElementById("dots");
  const more = document.getElementById("text-lanjutan");
  const detail = document.getElementById("detail-project");
  if (btn && dots && more && detail) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const open = more.style.display === "inline";
      dots.style.display = open ? "inline" : "none";
      more.style.display = open ? "none" : "inline";
      detail.style.display = open ? "none" : "block";
      btn.textContent = open ? "Lihat Selengkapnya" : "Sembunyikan";
    });
  }

  // Contact form captcha validation.
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      const captcha = form.querySelector('textarea[name="h-captcha-response"]');
      if (!captcha || !captcha.value.trim()) {
        event.preventDefault();
        alert("Silakan selesaikan verifikasi hCaptcha terlebih dahulu.");
      }
    });
  }

  // Keep the active navbar item synchronized with the visible section.
  const updateActiveNav = () => {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-link");
    let active = "";
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        active = section.id;
      }
    });
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `/#${active}` || link.getAttribute("href") === `#${active}`);
    });
  };
  window.addEventListener("scroll", updateActiveNav, { passive: true, signal: pageListeners.signal });
  updateActiveNav();

  // Restore section scrolling and active navigation after route changes.
  if (window.location.hash) {
    requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView();
    });
  } else {
    window.scrollTo(0, 0);
  }
}

window.showTab = function(tabId, button) {
  document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
  document.getElementById(tabId)?.classList.add("active");
  button?.classList.add("active");
};

function loadWeb3FormsCaptcha() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  // Hapus script lama agar dapat dijalankan ulang
  // ketika halaman Home dirender kembali.
  document
    .querySelectorAll('script[data-web3forms-captcha]')
    .forEach(script => script.remove());

  const script = document.createElement("script");

  script.src = "https://web3forms.com/client/script.js";
  script.async = true;
  script.defer = true;
  script.dataset.web3formsCaptcha = "true";

  document.body.appendChild(script);
}

function render() {
  const route = currentRoute();
  const page = pages[route];

  document.title = page.title;

  document.getElementById("app").innerHTML = page.html;

  initPage();

  // Jalankan CAPTCHA setelah formulir tersedia.
  loadWeb3FormsCaptcha();
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      link.target || link.hasAttribute("download")) return;

  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return;

  // Keep same-page section navigation native.
  if (url.pathname === window.location.pathname && url.hash) return;

  const route = url.pathname.replace(/\/+$/, "") || "/";
  if (pages[route]) {
    event.preventDefault();
    history.pushState({}, "", url.pathname + url.hash);
    render();
  }
});

window.addEventListener("popstate", render);
render();

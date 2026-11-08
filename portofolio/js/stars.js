// stars.js

const container = document.getElementById("stars-container");

if (container) {
  const starCount = 130;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 2.2 + 0.6;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    star.style.opacity = Math.random() * 0.7 + 0.3;

    star.dataset.speed = Math.random() * 0.02 + 0.005;
    star.dataset.twinkleSpeed = Math.random() * 0.015 + 0.005;
    star.dataset.direction = Math.random() > 0.5 ? "up" : "down";

    container.appendChild(star);
  }

  animateStars();
}
// Animasi bintang
function animateStars() {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    let top = parseFloat(star.style.top);
    const speed = parseFloat(star.dataset.speed);

    // Gerak ke atas
    top -= speed * 3;

    // Kalau sudah keluar layar, muncul lagi dari bawah
    if (top < -5) {
      top = 105;
      star.style.left = `${Math.random() * 100}%`;
    }

    star.style.top = `${top}%`;

    // Efek berkedip
    let opacity = parseFloat(star.style.opacity);
    const twinkle = parseFloat(star.dataset.twinkleSpeed);

    if (star.dataset.direction === "up") {
      opacity += twinkle;
      if (opacity >= 0.95) {
        star.dataset.direction = "down";
      }
    } else {
      opacity -= twinkle;
      if (opacity <= 0.15) {
        star.dataset.direction = "up";
      }
    }

    star.style.opacity = opacity;
  });

  requestAnimationFrame(animateStars);
}

animateStars();

// Active navbar saat scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (
      window.scrollY + window.innerHeight / 2 >= top &&
      window.scrollY + window.innerHeight / 2 < top + height
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`,
    );
  });
});

function showTab(tabId, button) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

  button.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-btn");
  const dots = document.getElementById("dots");
  const textLanjutan = document.getElementById("text-lanjutan");
  const detailProject = document.getElementById("detail-project");

  if (!btn || !dots || !textLanjutan || !detailProject) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const terbuka = textLanjutan.style.display === "inline";

    if (terbuka) {
      dots.style.display = "inline";
      textLanjutan.style.display = "none";
      detailProject.style.display = "none";
      btn.textContent = "Lihat Selengkapnya";
    } else {
      dots.style.display = "none";
      textLanjutan.style.display = "inline";
      detailProject.style.display = "block";
      btn.textContent = "Sembunyikan";
    }
  });
});

// Validasi hCaptcha sebelum form dikirim
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    const captcha = form.querySelector('textarea[name="h-captcha-response"]');

    if (!captcha || !captcha.value.trim()) {
      e.preventDefault();
      alert("Silakan selesaikan verifikasi hCaptcha terlebih dahulu.");
    }
  });
});

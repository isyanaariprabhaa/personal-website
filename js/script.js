// Existing functionality for navbar
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik dimana saja untuk menghilangkan nav
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Experience modal functionality
const experienceModal = document.getElementById("certificateModal");
const experienceModalImg = document.getElementById("enlargedCertificate");
const experienceImages = document.querySelectorAll(".certificate-img");
const experienceCloseBtn = experienceModal.querySelector(".close");

experienceImages.forEach((img) => {
  img.onclick = function () {
    experienceModal.style.display = "block";
    experienceModalImg.src = this.src;
  };
});

experienceCloseBtn.onclick = function () {
  experienceModal.style.display = "none";
};

// Portfolio modal functionality
const portfolioModal = document.getElementById("portfolioModal");
const portfolioModalImg = document.getElementById("enlargedPortfolioImage"); // Corrected
const portfolioCaption = document.getElementById("caption"); // Corrected
const portfolioImages = document.querySelectorAll(".portfolio-img");
const portfolioCloseBtn = portfolioModal.querySelector(".close");

portfolioImages.forEach((img) => {
  img.onclick = function () {
    portfolioModal.style.display = "block";
    portfolioModalImg.src = this.src;
    portfolioCaption.innerHTML = this.alt;
  };
});

portfolioCloseBtn.onclick = function () {
  portfolioModal.style.display = "none";
};

// Close modals when clicking outside the image
window.onclick = function (event) {
  if (event.target == portfolioModal) {
    portfolioModal.style.display = "none";
  }
};

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

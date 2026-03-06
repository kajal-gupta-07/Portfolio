
const text = "Creative Web Developer";
let index = 0;

function typeEffect() {
  const element = document.querySelector(".intro-text h2 span");

  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".intro-text h2 span").textContent = "";
  typeEffect();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
});

const hiddenElements = document.querySelectorAll(".section");

hiddenElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "12px 15px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Message Sent Successfully ✅");

  form.reset();

});



const skills = document.querySelectorAll(".work-card");

skills.forEach(card => {

  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.1)";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });

});

const darkBtn = document.createElement("button");
darkBtn.innerText = "🌙";
darkBtn.style.position = "fixed";
darkBtn.style.top = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "10px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.cursor = "pointer";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});
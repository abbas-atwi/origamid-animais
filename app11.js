// ao clicar na imgs aparece o texto
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
tabContent[0].classList.add("active");
function activeTab(index) {
  tabContent.forEach((item) => {
    item.classList.remove("active");
  });
  tabContent[index].classList.toggle("active");
}
tabMenu.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeTab(index);
  });
});

// faq
const faqDt = document.querySelectorAll(".faq-section dt");
function activeFaq(index) {
  faqDt.forEach((item) => {
    item.nextElementSibling.classList.remove("active");
  });
  faqDt[index].nextElementSibling.classList.toggle("active");
  setTimeout({}, 1000);
}

function removeDesc(index) {
  if (faqDt[index].nextElementSibling.hasAttribute("class")) {
    setTimeout(() => {
      faqDt[index].nextElementSibling.classList.remove("active");
    }, 6000);
  }
}
faqDt.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeFaq(index);
    removeDesc(index);
  });
});

// scroll suave
// ao clicar em cada menu e feito um scroll

const scrollMenu = document.querySelectorAll(".menu a[href^='#']");
const metadeHeight = window.innerHeight * 0.6;
scrollMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const href = item.getAttribute("href");

    const section = document.querySelector(href);
    console.log(section);
    console.log(metadeHeight);
    const sectionTop = section.getBoundingClientRect().top;
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ao fazer scroll ativar o conteudo
const sections = document.querySelectorAll(".js-scroll");
const metade = window.innerHeight * 0.6;

sections[0].classList.add("active");
window.addEventListener("scroll", () => {
  sections.forEach((item) => {
    const sectiontop = item.getBoundingClientRect().top - metade;
    if (sectiontop < 0) {
      item.classList.add("active");
    }
  });
});

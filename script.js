const animais = document.getElementById("animais");
console.log(animais);

const sectionHTML = document.getElementsByClassName("grid-section");
const sectionNODE = document.querySelectorAll(".grid-section");

console.log(sectionHTML);
console.log(sectionNODE);
sectionNODE.forEach((item, index) => {
  console.log(item, index);
});
// fazendo assim eu consigo iterar transformar em array
// transforma isso em um array
const arrayGrid = Array.from(sectionHTML);
arrayGrid.forEach((item, index) => {
  console.log(item, index);
});

const animaisIMG = document.querySelectorAll(".animais img");
animaisIMG.forEach((item) => {
  console.log(item);
});

const href = document.querySelectorAll('img[srcˆ="img/imagem"]');

console.log(href);

const animaisDescricaoH2 = document.querySelector(".animais-descricao h2");
console.log(animaisDescricaoH2);
const p = document.querySelector("p:last-child");
console.log(p);

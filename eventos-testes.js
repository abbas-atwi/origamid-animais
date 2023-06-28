const imgs = document.querySelector("img");

// function handleImg(e) {
//   console.log(e.target.getAttribute("src"));
// }
imgs.addEventListener("click", (e) => {
  console.log(e.target.getAttribute("src"));
});
// imgs.forEach((item) => {
//   item.addEventListener("click", handleImg);
// });

// const links = document.querySelectorAll("a");
// preciso iterar ja que é todos
// se quero falar com todos os links

// function active() {
//   links.forEach((item) => {
//     console.log(item);
//     item.classList.remove("ativo");
//   });
// }

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     active();
//     e.preventDefault();
//     e.target.classList.add("ativo");
//   });
// });

// vou iterar cada link , vou adicionar evento de click
// para cada link , e vou iterar cada link novamente
// e vou remover a classe ativo e dps adicionar ao target que eu clicar
// function handlevenetlink(event) {
//   event.preventDefault();

//   links.forEach((item) => {
//     item.classList.remove("ativo");
//   });
//   event.target.classList.add("ativo");
// }

const linkiNTERNO = document.querySelectorAll("a");

linkiNTERNO.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    // cada vez que eu clicar ele vai rodas
    // vai deletar todas as classes
    // e dps adicionar aonde eu cliquei
    linkiNTERNO.forEach((link) => {
      link.classList.remove("ativo");
    });
    e.target.classList.add("ativo");
  });
});
console.log(linkiNTERNO);

function handleElement(e) {
  // console.log(e.target.remove());
}

const elements = document.querySelectorAll("body *");
// console.log(elements.splice(2));
elements.forEach((elementAll) => {
  elementAll.addEventListener("click", handleElement);
});

// console.log(elements);

const tecla = document.querySelector("body");
const fontSizeAll = document.querySelectorAll("body *");
const tituloAnimais = document.querySelector("#animais h1");

// document estou falando com body
// documentElement estou falando com html
function enterT(e) {
  if (e.key === "t") {
    document.documentElement.classList.toggle("textoMaior");
  }
}

window.addEventListener("keydown", enterT);

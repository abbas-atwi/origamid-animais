// outerHTML todo o html do elemento
// innerHTML html interno
// innerText texto , sem a tag

const htmlElement = document.querySelector("h1");
const h1 = document.querySelector("h1");
console.log(htmlElement);
console.log(`outerHTML: ${htmlElement.outerHTML}`);
console.log(`innerHTML: ${htmlElement.innerHTML}`);
console.log(`innerText: ${htmlElement.innerText}`);

function text(e) {
  e.preventDefault();
  console.log(htmlElement.parentElement.parentElement.parentElement);
}
// troca o h1 e adiciona outro
// h1.outerHTML = "<h1>abbas</h1>";
window.addEventListener("keydown", text);
/*
// parentElement // pai
parentElement // pai do pai ezemplo
exemplo selecionei tag h1.parentElement me retorna o pai do h1, se colocar 2x parentElement me retorna o pai do pai ou seja que é o pai do pai 
// partentElementSibling elemento acima dele 
// nextElementSbling elemento abaixo dele 
*/

console.log(h1.parentElement);

const lista = document.querySelector(".animais-lista");

console.log(lista.children[5 - 1]);

const contato = document.querySelector("#contato");
const mapa = document.querySelector(".mapa");
const titulo = contato.querySelector(".titulo");
function pegarTop(e) {
  let h1Top = h1.getBoundingClientRect();
  if (h1Top.top < 0) {
    // segundo elemento tem que ser filho do contato
    // e o primeiro h1 seria o que quero mover aonde...
    contato.insertBefore(h1, titulo);
    console.log(contato);
  }
  // console.log(h1.offsetTop);
}

console.log(contato);

// appendChild ele adiciona no ultimo filho da lista
window.addEventListener("scroll", pegarTop);

// pegarTop();

const animais = document.querySelector(".animais");
const faq = document.querySelector(".faq");
const h1Animais = animais.querySelector("h1");
const h1Faq = faq.querySelector("h1");
console.log(h1Animais);
const h1AnimaisClone = h1Animais.cloneNode(true);
const h1FaqClone = h1Faq.cloneNode(true);
console.log(h1AnimaisClone);
h1Faq.innerHTML = h1AnimaisClone.innerHTML;
h1Animais.innerHTML = h1FaqClone.innerHTML;
// animais.replaceChild(h1Faq, h1Animais);
// console.log(h1Faq);

// travesing e manipulacao
// parentElement pai do elemento
// nextElementSibling o que tem abaixo dele apos o elemento
// proximo elemento
// previousElementSibling pega o elemento anterior acima dele

// children ou children[] pega o filho do elemento em si
// exemplo uma div tem ul children seria a ul
// children.lenght pegao o tamanho do elemento
// node pode ser texto o espacamento
// const lista = document.querySelectorAll("li");
const lista = document.querySelector(".animais-lista");
console.log(lista.firstChild);
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

lista.appendChild(titulo);

const animaisGrid = document.querySelector(".animais");
const animaisDescricao = document.querySelector(".animais-descricao");
const animaisGridClone = animaisGrid.cloneNode(true);
const animaisDescricaoClone = animaisDescricao.cloneNode(true);
// animaisGrid.insertBefore(animaisGrid.children[2].children[3], animaisDescricao);
let imgTop = animaisGrid.children[2].children[3];
animaisDescricao.innerHTML = imgTop.innerHTML;
function topImg(e) {
  let recTop = animaisDescricao.getBoundingClientRect();
  let el = e.target;
  console.log(el.path);
}
const menu = document.querySelector(".menu");
const menuUl = menu.querySelector("ul");
menu.replaceChild(imgTop, menuUl);
window.addEventListener("click", topImg);
const mapa = document.querySelector(".mapa");
// console.log(animaisDescricao.children[2].children[0]);

const novoh1 = document.createElement("h1");
novoh1.innerText = "novo titulo";

novoh1.classList.add("titulo");
mapa.appendChild(novoh1);
console.log(novoh1);

// cada elemento ele é unico
// clonar elemento duplicar
// true ele vai clonar o s filhos do elemento

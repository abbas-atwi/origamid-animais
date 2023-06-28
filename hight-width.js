// clientHight retorna height + padding
// offsetHeight retorna height + padding + border
// scrollHeight retorna height total

const listaAnimais = document.querySelector(".animais-lista");
const h2Raposa = document.querySelector("h2");
console.log(h2Raposa);
const rec = h2Raposa.getBoundingClientRect();
// getBoundingClientRect() retorna um objeto metodo posso acessar as propriedades dentro dele
// como se fosse criando um retangulo
console.log(rec.top);

// window , pegar tamanho da tela do usuario
// innerWidth
// se o topo for menor que zero ele passou dos elemento
if (rec.top <= 0) {
  console.log(rec.top + "passou");
}
console.log(
  window.innerWidth, // width da janela
  window.outerWidth, // pega o console que esta aberto dev tools
  window.outerHeight, // heigh da janela
  window.pageYOffset, // distancia total do scroll horizontal
  window.pageXOffset // distancia total do scroll veritical
);
// se a tela width for menor ou igual a 600px
if (window.innerWidth <= 600) {
  // alert("tELA MENOR QUE 600PX");
  // document.querySelector("body").style.background = "red";
}
// usando innerWidth nao é idieal pq depenede de cada telade usuario pode ser dififente
// existe o matchMedia mesma coisa que querie

const small = window.matchMedia("(max-width:600px)").matches;

// exercicios
const primeiraImg = document.querySelector("img");
const rectiMG = primeiraImg.offsetTop;
console.log(rectiMG);
// js retorna 82px de 2 imgs pois sempre carrega em primeiro o js dps as imagens , tenho que fazer refresh ao carregar
// se eu nao atribui um tamanho a imagen o javascript nao vai saber pois o js carrega primeiro e dps as imagens
// para concertar isso tenho que esperar que todas as imagens sejam carregadas para rodar o trecho de codigo
// ou seja se a imagen nao contem no css um tamanho
// e como o js carrega em primeiro , ele teria q esperar q as imagens carregam primeiro para poder puxar os tamanhos de todas as imagens

/*
para isso vamos usar o propriedade onload
significa apos ser carregado

*/

function imagenstamanho() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((item) => {
    let rectImg = item.getBoundingClientRect();
    soma += rectImg.width;
    console.log(soma);
  });
}

window.onload = () => {
  imagenstamanho();
};

const linkspagina = document.querySelectorAll("a");

linkspagina.forEach((links) => {
  const linkWidth = links.offsetWidth;
  const linkHeigth = links.offsetHeight;
  if (linkWidth >= 46 && linkHeigth >= 46) {
    console.log("Possui boa acessibilidade");
  } else {
    console.log("nao possui boa acessibilidade");
  }
});

const small2 = window.matchMedia("(max-width: 720px)").matches;

if (small2) {
  const menuMobile = document.querySelector(".menu");
  menuMobile.classList.add("menu-mobile");
}

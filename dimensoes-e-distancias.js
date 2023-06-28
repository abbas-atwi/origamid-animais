const imgs = document.querySelector("img");
// console.log(imgs);
// colocar uma class ao menu menu-mobile, se a imagem for imagem2
// pegar a largura da imagem
function imgTopo(img) {
  let topimg = img.getBoundingClientRect();

  if (topimg.top >= 100) {
    imgs.setAttribute("src", "img/imagem2.jpg");
    if (imgs.getAttribute("src") === "img/imagem2.jpg") {
      document.querySelector(".menu").classList.add("menu-mobile");
      if (topimg.width >= 282) {
        console.log("É maior", topimg.width);
      } else {
        console.log("nao é maior", topimg.width);
      }
    }
  } else {
    console.log("ok");
  }
  console.log(topimg.top);
}
console.log(imgTopo(imgs));

// retornar a soma da largura de todas as imagens

const imagensWidth = document.querySelectorAll("img");

// ao carregar a pagina
window.onload = () => {
  let soma = 0;
  imagensWidth.forEach((item) => {
    soma += item.offsetHeight;
  });
  console.log(soma);
};

// pegar o link da pagina

const links = document.querySelectorAll("a");

links.forEach((item) => {
  let link = item.getBoundingClientRect();
  if (link.width <= 46 && link.height <= 46) {
    console.log("sim");
  } else {
    console.log("nao");
  }
});
// 2 modos

const browser = window.matchMedia("(max-width: 720px)");

if (browser) {
  // document.querySelector("body").style.background = "red";
} else {
  document.querySelector("body").style.background = "blue";
}

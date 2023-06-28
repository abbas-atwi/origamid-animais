const menu = document.querySelector(".menu");

menu.classList.remove("azul");
// menu.classList.replace("azul", "ativo");
menu.classList.toggle("azul"); // remove e coloca remove e coloca
console.log(menu.classList);

if (menu.classList.contains("azul")) {
  console.log("Sim posssui azul");
} else {
  console.log("nao contem azul");
}

// antigamente era assim para remover e adicioanr uma classe
menu.className += " red";
console.log(menu.className);
console.log(menu.classList);

// atributos ele retorna um array

const animais = document.querySelector(".animais");
animais.className += " cachorro";
// attributes array like class id e etc
// class id etc
console.log(animais.attributes["data-texto"]);

const imagem = document.querySelector("img");
// busca o atributo dentro da img src
// let atributes = imagem.getAttribute("alt");

// setar novo texto no al ele é ao vivo
// let atributes = imagem.setAttribute("alt", "Ola aaa");

// verifico se tem atributte hasAttributr
if (!imagem.hasAttribute("alt")) {
  imagem.setAttribute("alt", "Agora tem alt");
} else {
  console.log(imagem.getAttribute("alt"));
}

// tem metodo removeAttribute()

// propriedades que nao permite mudance de valores , sao consiuderadas Read Only
// className = muda valor da propiedade
// attitbute = nao muda valor da propriedade
// significa que nao posso mudar o valor
let tentarMudarProrpiedade = imagem.attributes;
console.log(imagem.attributes.src);

const menuItemAll = document.querySelectorAll(".menu a");

menuItemAll.forEach((item) => {
  item.classList.add("ativo");
});

menuItemAll.forEach((item, index) => {
  if (item.classList.contains("ativo")) {
    // item.classList.remove("ativo");
  }
});

menuItemAll[0].classList.add("ativo");

console.log(menuItemAll);

const imagens = document.querySelectorAll("img");

imagens.forEach((item) => {
  if (!item.hasAttribute("alt")) {
    item.setAttribute("alt", "todos tem");
  }
  console.log(item.hasAttribute("alt"), item);
});

const href = document.querySelector('a[href="http"]');
console.log(href);

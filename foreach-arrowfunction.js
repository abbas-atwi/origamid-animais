const imgs = document.querySelectorAll("img");

console.log(imgs);

// primeiro parametro sempre o item
//segundo parametro é o index
// ultimo é o proprio array
imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// foreach é o metodo de array

const titulo = document.getElementsByClassName("titulo");
console.log(titulo);
// transformar em array list
let arrayTitulo = Array.from(titulo);

arrayTitulo.forEach((item) => {
  console.log(item);
});

// arrow functions
console.log("-----Arrow Functions------");
imgs.forEach((item) => console.log(item));

const paragrafo = document.querySelectorAll("p");

paragrafo.forEach((item) => console.log(item));
paragrafo.forEach((item) => console.log(item.innerText));

imgs.forEach((item, index) => {
  console.log(item);
});
let i = 0;
imgs.forEach(() => console.log(i++));

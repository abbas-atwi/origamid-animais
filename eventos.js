const img = document.querySelector("img");
console.log(img);
// event retorna um objeto que ocorreu
// diversos metodos e prpriedades
// pageX pageY aonde eu cliquei certinho na imagem
// consigo ver o target qual foi o elemento que clicou
let events = [];
function callBack(event) {
  events.push(event);
  if (event.clientX === 29) {
    console.log("sim");
  }
  console.log("clicou", event);
  // console.log(events.length);
}

// img.addEventListener("click", callBack);

// target e aonde eu cliquei exatamente
const imagenslista = document.querySelector(".animais-lista");

function callBackLista(event) {
  console.log(event.currentTarget); // retorna o propio nelemento completo nao especifico aonde cliquei
  console.log(event.target); // ele me retorna extamente aonde eu cliquei, se cliquei em ciam da foto ele me retorna a foto que eu cliquei
  // type retrona o tipo
  let srcimg = event.target.getAttribute("src");
  // console.log(srcimg + "  aaa");
  if (srcimg === "img/imagem1.jpg") {
    let time = 0;
    // setInterval(() => {
    //   // time += len.length;
    //   // console.log(time++);
    //   event.target.setAttribute("src", `img/imagem${time++}.jpg`);
    // }, 1000);
  }
  console.log(event.path);
}
imagenslista.addEventListener("click", callBackLista);

const imagens = document.querySelector("img");

function imagensEvent(event) {
  console.log(event.target, "abbas");
  // this to falando com o elemento q cliquei currentTarget
}
imagens.addEventListener("click", imagensEvent);

const h1 = document.querySelector("h1");
const modal = document.querySelector(".modal");
function handleEvent() {
  let eBounding = h1.getBoundingClientRect();
  if (eBounding.top <= 0) {
    h1.style.color = "white";
    h1.style.background = "blue";
    setTimeout(() => {
      modal.setAttribute("class", "modal2");
    }, 100);
  } else {
    console.log(eBounding.top);
  }
}

// return handleEvent(this);
window.addEventListener("scroll", handleEvent);

function handleKeyBoard(event) {
  if (event.key === "f") {
    img.classList.toggle("add");
  }
  console.log(window);
}

window.addEventListener("keydown", handleKeyBoard);
// qual tecla foi criada com event.key
// mousemove ele dispara milhares de eventos para cada vez que eu movimentar o mouse pra perfomace e horrivel
// resize

const todasImg = document.querySelectorAll("img");
function imgsHandle(e) {
  let el = e.getBoundingClientRect();
  console.log(el.top);
}
todasImg.forEach((imgs) => {
  imgs.addEventListener("click", imgsHandle);
});

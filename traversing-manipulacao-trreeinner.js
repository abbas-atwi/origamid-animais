const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
// copy.appendChild(menu);
const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

const faq = document.querySelector(".faq");
const firstDD = faq.querySelector("dt");
console.log(faq);
console.log(firstDD.nextElementSibling.innerText);
const animais = document.querySelector(".animais");
console.log(animais);

faq.innerHTML = animais.innerHTML;

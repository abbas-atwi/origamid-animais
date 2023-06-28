const menu = document.querySelectorAll(".menu li a");
console.log(menu);

// acada vez que eu clicar eu vou interar
// nos a remover a class active
// e depois adicionar onde eu clicar
function addhover(e) {
  e.preventDefault();
  menu.forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");
}

menu.forEach((item) => {
  item.addEventListener("click", addhover);
});

const faq = document.querySelector(".faq");
console.log(faq.children[1].children[0]);

const copy = document.querySelector(".copy");
const animais = document.querySelector(".animais");
console.log(animais);
const menuClone = menu.cloneNodes(true);
console.log(copy);
// animais.innerHTML = faq.innerHTML;

function initTabNav() {
  const menu = document.querySelectorAll(".animais-lista li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const span = document.querySelectorAll(".js-tabcontent p span");
  const h2 = document.querySelectorAll(".js-tabcontent section h2");

  if (menu.length && tabContent.length) {
    tabContent[0].classList.add("activemenu");
    // console.log(h2[1].innerText);

    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("activemenu");
      });
      tabContent[index].classList.add("activemenu");
      span[index].innerText = h2[index].innerText;
    }
    menu.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        activeTab(index);
      });
    });
  }
}
initTabNav();
const dt = document.querySelectorAll(".faq-lista dt");
const dd = document.querySelectorAll(".faq-lista dd");

function showDDs(index) {
  this.classList.toggle("showDD");
  this.nextElementSibling.classList.toggle("showDD");
}

dt.forEach((item, index) => {
  item.addEventListener("click", showDDs);
});

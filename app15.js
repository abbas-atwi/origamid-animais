function Dom(seletor) {
  const elementlist = document.querySelectorAll(seletor);
  this.element = elementlist;
  this.desativar = function (classe) {
    return elementlist.forEach((item) => {
      item.classlist.remove(classe);
    });
  };
  this.addClass = function (classe) {
    return elementlist.forEach((item) => {
      item.classlist.add(classe);
    });
  };
}
const li = new Dom(".js-tabmenu li");
const section = new Dom(".js-tabcontent section");
function showSection(id) {
  section.element.forEach((item) => {
    item.desativar("active");
  });
  section.element[id].addClass("active");
}
li.element.forEach((element, id) => {
  element.addEventListener("click", () => {
    showSection(id);
  });
});

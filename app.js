/* Created by Tivotal */

let tabs = document.querySelectorAll(".btn");
let indicator = document.querySelector(".indicator");
let contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    let width = indicator.offsetWidth;
    console.log(width);
    indicator.style.transform = `translateX(calc(${width}px * ${index}) )`;

    let refId = tab.getAttribute("data-id");

    contents.forEach((content) => {
      if (content.id == refId) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});

// desktop selectors
const dropdownHolder = document.querySelectorAll(".header__dropdownHolder");

// mobile selectors
const burgerBtn = document.querySelector("#burgerBtn");
const burgerMenu = document.querySelector(".burger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const burgerListHolder = document.querySelectorAll(".burger__list-holder");
const burgerListActive = document.querySelectorAll(".burger__ul-active");

// desktop event listeners

for (let i = 0; i < dropdownHolder.length; i++) {
  dropdownHolder[i].addEventListener("click", () => {
    dropdownHolder[i].children[1].classList.toggle("dropdownActive");

    let spanHolder = dropdownHolder[i].children[0];
    spanHolder.children[0].classList.toggle("rotate");
  });
}

// mobile event listeners
for (let i = 0; i < burgerListHolder.length; i++) {
  burgerListHolder[i].addEventListener("click", () => {
    burgerListHolder[i].children[1].classList.toggle("burgerMenuActive");

    let spanHolder = burgerListHolder[i].children[0];
    spanHolder.children[0].classList.toggle("rotate");
  });
}

burgerBtn.addEventListener("click", () => {
  line1.classList.toggle("move-left");
  line2.classList.toggle("opacity");
  line3.classList.toggle("move-right");

  burgerMenu.classList.toggle("burgerMenuActive");
});

const containerElement = document.querySelector(".container");
const papupElement = document.querySelector(".papup");

const btnElement = document.querySelector("#btn");
const btnIcon = document.querySelector(".close");

btnElement.addEventListener("click", () => {
  containerElement.classList.add("active");
  papupElement.classList.remove("active");
});

const emailElement = document.querySelector(".email");

btnIcon.addEventListener("click", () => {
  containerElement.classList.remove("active");
  papupElement.classList.add("active");
  emailElement.value = "";
});

let h1Element = document.querySelector("h1");
let buttonElementGreen = document.querySelector("#button-green");
let buttonElementRed = document.querySelector("#button-red");
let buttonElementRevert = document.querySelector("#button-revert");
let buttonElementBlack = document.querySelector("#button-black");
let buttonElementPink = document.querySelector("#button-pink");
let buttonElementBrown = document.querySelector("#button-brown");

console.log(buttonElementGreen);
function makeitgreen() {
  //  h1Element.style = "color: green;";
  h1Element.className = "green-text";
}
buttonElementGreen.addEventListener("click", makeitgreen);
console.log(buttonElementRed);
function makeitred() {
  h1Element.className = "red-text";
}
buttonElementRed.addEventListener("click", makeitred);
console.log(buttonElementRevert);
function makeitrevert() {
  h1Element.style = "color: wheat;";
}
buttonElementRevert.addEventListener("click", makeitrevert);
function makeitblack() {
  h1Element.classList.add("black-text");
}
buttonElementBlack.addEventListener("click", makeitblack);
function makeitpink() {
  h1Element.classList.add("pink-text");
}
buttonElementPink.addEventListener("click", makeitpink);
function makeitbrown() {
  h1Element.style = "color: brown";
}
buttonElementBrown.addEventListener("click", makeitbrown);

//II.handle the red color button:

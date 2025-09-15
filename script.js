let buttonElementGreen = document.querySelector("#button-green");

console.log(buttonElementGreen);

function makeitgreen() {
  let h1Element = document.querySelector("h1");
  h1Element.style = "color: green;";
}
buttonElementGreen.addEventListener("click", makeitgreen);

let buttonElementRed = document.querySelector("#button-red");

console.log(buttonElementRed);

function makeitred() {
  let h1Element = document.querySelector("h1");

  h1Element.style = "color: red;";
}
buttonElementRed.addEventListener("click", makeitred);

let buttonElementRevert = document.querySelector("#button-revert");

console.log(buttonElementRevert);

function makeitrevert() {
  let h1Element = document.querySelector("h1");
  h1Element.style = "color: wheat;";
}
buttonElementRevert.addEventListener("click", makeitrevert);

let buttonElementBlack = document.querySelector("#button-black");
function makeitblack() {
  let h1Element = document.querySelector("h1");
  h1Element.style = "color: black;";
}
buttonElementBlack.addEventListener("click", makeitblack);

let buttonElementPink = document.querySelector("#button-pink");
function makeitpink() {
  let h1Element = document.querySelector("h1");
  h1Element.style = "color: pink";
}
buttonElementPink.addEventListener("click", makeitpink);

let buttonElementBrown = document.querySelector("#button-brown");
function makeitbrown() {
  let h1Element = document.querySelector("h1");
  h1Element.style = "color: brown";
}
buttonElementBrown.addEventListener("click", makeitbrown);

//II.handle the red color button:

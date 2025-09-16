/*
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
*/
//get the current number element
let currentNumberEl = document.querySelector("#current-number");
let congratulationsEl = document.querySelector("#congratulations");
console.log(currentNumberEl);
console.log(congratulationsEl);
// get the button elements and store them for ease of  access
let buttonPlus = document.querySelector("#button-plus");
let buttonMinus = document.querySelector("#button-minus");
let number = 0;
//increase logic: Function increases the variable called number with +1
//and then displays that number in the textcontent property of and element called currentNumberEl
function increase() {
  number = number + 1;
  currentNumberEl.textContent = number;
  console.log("Number is: ", number);
}
function decrease() {
  number = number - 1;
  currentNumberEl.textContent = number;
  console.log("the number is: ", number);
}
buttonPlus.addEventListener("click", increase);
buttonMinus.addEventListener("click", decrease);
//set number to a value with the assignment operater (=)
//check if number is equal to with the comparison operator (==)
if (number == 5) {
  congratulationsEl.textContent = "great news, the number is 5!";
}

//mission get both buttons to work.

//I.handle the green color button:

//1. grab the button element with queryselcetor.
let buttonElementGreen = document.querySelector("#button-green");
//2. to see if it worked we can then console it.
console.log(buttonElementGreen);
//3.Try to use addeventlistener...
function makeitgreen() {
  //function shall change the color of the h1 element to green
  //1. grab h1 elemnt:
  let h1Element = document.querySelector("h1");
  //console.log(h1Element);
  h1Element.style = "color: green;";
}
buttonElementGreen.addEventListener("click", makeitgreen);

let buttonElementRed = document.querySelector("#button-red");
//2. to see if it worked we can then console it.
console.log(buttonElementRed);
//3.Try to use addeventlistener...
function makeitred() {
  //function shall change the color of the h1 element to green
  //1. grab h1 elemnt:
  let h1Element = document.querySelector("h1");
  //console.log(h1Element);
  h1Element.style = "color: red;";
}
buttonElementRed.addEventListener("click", makeitred);

//II.handle the red color button:

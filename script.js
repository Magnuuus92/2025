// how to select a html tag in js:
/* With css we would:
h1{
color: red;}

*/
//as above in js
document.querySelector("h1").style = "color: red;";
function something() {
  document.querySelector("h1").style = "color: green;";
  console.log("HEIHEI");
  //1 use the keyword function to declare a function
  //2 followed by a name of ur choice
  //3follwed by ()
  //4followed by {}
  //5function specific code goes inside the {}
}
//make h1 green w button
/*document.querySelector("button").addEventListener("click", function()){
console.log("hi")
}*/

let buttonElement = document.querySelector("button");
//gå inni buttonelement
//legg til event-listener
//parameter 1: type of event , in our case "click
// //parameter 2: proive some funtion to run"
buttonElement.addEventListener("click", something);

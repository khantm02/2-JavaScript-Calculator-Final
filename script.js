"use strict";

/* 1) 3 functions
    -appendToDisplay
    -clearDisplay
    -calculate 
  2) Error Handling

*/

const display = document.querySelector(".display");

function appendToDisplay(input) {
  display.value += input;
  // console.log(typeof display.value);
}

function clearDisplay() {
  display.value = "";
}

// function calculate() {
//   display.value = eval(display.value);
// }

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error!";
  }
}

//

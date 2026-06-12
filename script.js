function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

let num1 = "";
let num2 = "";
let operator = "";

const result = document.querySelector(".result");
const equalBtn = document.querySelector(".equalBtn");
const calculator = document.querySelector(".calculator");
const operatorBtn = document.querySelector(".operator");

calculator.addEventListener("click", updateNumberVariable);
equalBtn.addEventListener("click", operate);

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function updateNumberVariable(event) {
  const clickedButton = event.target;
  const value = clickedButton.textContent;

  if (Number.isInteger(Number(value))) {
    if (operator === "") {
      num1 += value;
      result.textContent = num1;
    } else {
      num2 += value;
      result.textContent = num1 + operator + num2;
    }
  } else if (["+", "-", "*", "/"].includes(value)) {
    if (num1 === "") return;
    if (num2 === "") {
      operator = value;
      result.textContent = num1 + operator;
    }
  }
}

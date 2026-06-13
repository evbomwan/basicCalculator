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
const calculator = document.querySelector(".calculator");
const operatorBtn = document.querySelector(".operator");
const equalBtn = document.getElementById("equalBtn");

calculator.addEventListener("click", updateNumberVariable);
equalBtn.addEventListener("click", updateUI);

function updateUI() {
  if (result.textContent === "") return;
  let currentResult = operate(num1, operator, num2);
  result.textContent = currentResult;
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

function operate(num1, operator, num2) {
  const a = Number(num1);
  const b = Number(num2);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

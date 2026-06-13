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
let justEvaluated = false;

const result = document.querySelector(".result");
const calculator = document.querySelector(".calculator");
const operatorBtn = document.querySelector(".operator");
const equalBtn = document.getElementById("equalBtn");

calculator.addEventListener("click", updateNumberVariable);
equalBtn.addEventListener("click", updateUI);

function updateUI() {
  if (num1 === "" || operator === "" || num2 === "") return;
  let currentResult = operate(num1, operator, num2);
  result.textContent = currentResult;

  num1 = String(currentResult);
  num2 = "";
  operator = "";

  justEvaluated = true
}

function updateNumberVariable(event) {
  const clickedButton = event.target;
  const value = clickedButton.textContent;

  if (Number.isInteger(Number(value))) {
    if (justEvaluated){
      num1 = "";
      result.textContent = "";
      justEvaluated = false;
    }

    if (operator === "") {
      num1 += value;
      result.textContent = num1;
    } else {
      num2 += value;
      result.textContent = num1 + operator + num2;
    }
  } else if (["+", "-", "*", "/"].includes(value)) {
    if (num1 === "") return;
    // user cotinues from the previous result after clicking =
    if (justEvaluated){
      justEvaluated = false;
    }
    // if full expression already exists
    if (num2 !== "") {
      const currentResult = operate(num1, operator, num2);
      num1 = String(currentResult);
      num2 = "";
    
    }
    operator = value;
    result.textContent = num1 + operator;
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

// each operator function
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
// declared variables
let num1 = "";
let num2 = "";
let operator = "";
let justEvaluated = false;

// fetching elements from document
const result = document.querySelector(".result");
const calculator = document.querySelector(".calculator");
const operatorBtn = document.querySelector(".operator");
const equalBtn = document.getElementById("equalBtn");
const clearBtn = document.getElementById("clearBtn");
const backSpaceBtn = document.getElementById("backSpaceBtn");

// various event listeners
calculator.addEventListener("click", updateNumberVariable);
equalBtn.addEventListener("click", updateUI);
clearBtn.addEventListener("click", clearCalculator);
backSpaceBtn.addEventListener("click", removeLastValue);

// function for updating the ui after computation
function updateUI() {
  if (num1 === "" || operator === "" || num2 === "") return;
  let currentResult = operate(num1, operator, num2);
  result.textContent = currentResult;

  num1 = String(currentResult);
  num2 = "";
  operator = "";

  justEvaluated = true;
}

// function for updating the number variables and adding operator, and also displaying the expression on the UI
function updateNumberVariable(event) {
  const clickedButton = event.target;
  const value = clickedButton.textContent;

  if (Number.isInteger(Number(value))) {
    if (justEvaluated) {
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
  } else if (value === "."){
    if (operator === ""){
      if (num1 === ""){
        num1 = "0.";
      } else if (!num1.includes(".")) {
        num1 += "."
      }
      result.textContent = num1;
    } else {
      if (num2 === ""){
        num2 = "0.";
      } else if (!num2.includes(".")){
        num2 += "."
      }
      result.text = num1 + operator + num2;
    }

  } else if (["+", "-", "*", "/"].includes(value)) {
    if (num1 === "") return;
    // user cotinues from the previous result after clicking =
    if (justEvaluated) {
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

// this holds the operator logic
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
      if(b === 0){
       alert("bro don't")
       return null
      }
      return divide(a, b);
  }
}

// clear function for clearing the display and varibles
function clearCalculator() {
  num1 = "";
  num2 = "";
  operator = "";
  result.textContent = "";
}
// backspace function to remove last added value
function removeLastValue(){
  if(num2 !== ""){
    num2 = num2.slice(0, -1);
    result.textContent = num1 + operator + num2;
  }
  else if(operator !== ""){
    operator = "";
    result.textContent = num1 + operator + num2;
} else if (num1 !== "") {
  num1 = num1.slice(0, -1);
  result.textContent = num1 + operator + num2;
}
}
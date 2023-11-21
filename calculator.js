let number1 = "";
let number2 = "";
let operator = "";

let currentInput = "";

const digitNodes = document.querySelectorAll(".digit");
const displayNode = document.querySelector(".display");

digitNodes.forEach ((digitNode) => digitNode.addEventListener("click", () => {
  //displayNode.textContent += digitNode.textContent;
  currentInput += digitNode.textContent;
  if (operator === "") {
    number1 = currentInput;
  } else {
    number2 = currentInput;
  }
  console.log(`${number1} ${operator} ${number2}`);
}))

const operatorNodes = document.querySelectorAll(".operator")

operatorNodes.forEach((operatorNode) => operatorNode.addEventListener("click", () => {
  currentInput = "";
  if (number2 !== "") {
    number1 = operate(number1, number2, operator);
  }
  operator = operatorNode.textContent;
  console.log(`${number1} ${operator}`);
}))

const equalsNode = document.querySelector(".equals");

equalsNode.addEventListener("click", () => {
  console.log(operate(number1, number2, operator));
})

const clearNode = document.querySelector(".clear");

clearNode.addEventListener("click", () => {
  displayNode.textContent = "";
  number1 = "";
  number2 = "";
  operator = "";
  currentInput = "";
})

function add(a, b) { return a + b };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };

function operate(num1, num2, operator) {
  switch (operator) {
    case "+": return add(num1, num2)
      break;
    case "-": return subtract(num1, num2)
      break;
    case "×": return multiply(num1, num2)
      break;
    case "÷": return divide(num1, num2)
      break;
    default: return "Unknown operation"
      break;
  }
}
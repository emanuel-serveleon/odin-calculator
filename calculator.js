const digitNodes = document.querySelectorAll(".digit");
const displayNode = document.querySelector(".display");

digitNodes.forEach ((digitNode) => digitNode.addEventListener("click", () => {
  displayNode.textContent += digitNode.textContent;
}))

const clearNode = document.querySelector(".clear");

clearNode.addEventListener("click", () => {
  displayNode.textContent = "";
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
// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number2 / number1;
}

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

//window.alert("The addition of your numbers equals " + add(number1, number2) + ".");
//window.alert("The subtraction of your second number from your first number equals " + subtract(number1, number2) + ".");
//window.alert("The multiplication of your numbers equals " + multiply(number1, number2) + ".");
//window.alert("The division of your second number by your first number equals " + divide(number1, number2) + ".");

window.alert(
  ("The result of adding your numbers is  " + add(number1,number2) + ", ") + 
  ("The result of subtracting your second number from your first is  " + subtract(number1, number2) + ", ") + 
  ("The result of multiplying your numbers is " + multiply(number1, number2) + ", ") + 
  ("The result of diving your second number by your first is " + divide(number1, number2) + ".")
);

window.alert(number2 + "+" + number1 + "=" + add(number1, number2) + ". " + number2 + "-" + number1 + "=" + subtract(number1, number2) + ". " + number2 + "*" + number1 + "=" + multiply(number1, number2) + ". " + number2 + "/" + number1 + "=" + divide(number1, number2) + ".");
//Define UI variables
const operator = document.querySelectorAll(".operator");
const calculate = document.querySelector("#calculate");
const number = document.querySelectorAll(".number");
const displayObj = document.querySelector("#display");

//getResultTask on clicking  '='
calculate.addEventListener("click", getResult);

//get Result from user input and display
function getResult(e) {
  let string = displayObj.value;
  //addition
  if (string.includes("+")) {
    //get the position of + sign
    let position = string.indexOf("+");
    //the input is a string, so add the numbers on the left and right of the sign
    let sum = addition(
      string.substring(0, [position - 1] + 1),
      string.substring([position + 1], string.length)
    );
    displayObj.value = sum;
  }
  //subtraction
  if (string.includes("-")) {
    let position = string.indexOf("-");
    let subtr = subtraction(
      string.substring(0, [position - 1] + 1),
      string.substring([position + 1], string.length)
    );
    displayObj.value = subtr;
  }
  //multiplication
  if (string.includes("x")) {
    let position = string.indexOf("x");
    let mult = multiplication(
      string.substring(0, [position - 1] + 1),
      string.substring([position + 1], string.length)
    );
    displayObj.value = mult;
  }

  //division
  if (string.includes("%")) {
    let position = string.indexOf("%");
    let div = division(
      string.substring(0, [position - 1] + 1),
      string.substring([position + 1], string.length)
    );
    displayObj.value = div;
  }
  e.preventDefault();
}

//addition function
function addition(num1, num2) {
  let sum;
  //the input is a string so convert it to a number
  sum = parseInt(num1) + parseInt(num2);
  return sum;
}
//subtraction function
function subtraction(num1, num2) {
  let sub;
  sub = parseInt(num1) - parseInt(num2);
  return sub;
}

//multiplication function
function multiplication(num1, num2) {
  let mult;
  mult = parseInt(num1) * parseInt(num2);
  return mult;
}

//division function
function division(num1, num2) {
  let div;
  div = parseInt(num1) / parseInt(num2);
  return div;
}

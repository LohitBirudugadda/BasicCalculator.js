// Calculator
function Calculator(){
  var Toggle = true;
  var result = 0;
  var num1 = NaN;
  var num2 = NaN;
  
  function Addition(a,b){
    var result = a + b;
    return "The result is: " + result;
  }
  
  function Subtraction(a, b) {
    var result = a - b;
    return "The result is: " + result;
  }
  
  function Multiplication(a, b) {
    var result = a * b;
    return "The result is: " + result;
  }
  
  function Division(a, b) {
    var result = a / b;
    return "The result is: " + result;
  }
  
  
  function Calculations(){
    while (Toggle) {
    var ArithmeticOperation = prompt("Which Arithmetic Operation Do You Want To Use: Addition(+), Subtraction(-), Multiplication(*), or Division(/)?");
  
    while (isNaN(num1)) {
      num1 = parseInt(prompt("What is the first number?"));
    }
    
    while (isNaN(num2)) {
      num2 = parseInt(prompt("What is the second number?"));
    }
  
    if(ArithmeticOperation.toLowerCase() == "addition" || ArithmeticOperation.toLowerCase() == "add" || ArithmeticOperation == "+"){
      result = Addition(num1, num2);
      break;
    }
  
    else if(ArithmeticOperation.toLowerCase() == "subtraction" || ArithmeticOperation.toLowerCase() == "subtract" || ArithmeticOperation == "-"){
      result = Subtraction(num1, num2);
      break;
    }
    
    else if(ArithmeticOperation.toLowerCase() == "multiplication" || ArithmeticOperation.toLowerCase() == "multiply" || ArithmeticOperation == "*"){
      result = Multiplication(num1, num2);
      break;
    }
    
    else if(ArithmeticOperation.toLowerCase() == "division" || ArithmeticOperation.toLowerCase() == "divide" || ArithmeticOperation == "/"){
      result = Division(num1, num2);
      break;
    }
  
    else {
      console.log("Invalid input. Please try again.");
      continue;
    }
  }
  console.log(result);
  }
  
  Calculations();
}

Calculator();
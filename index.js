//import { Readline } from 'readline/promises';

const displaymessage =
  "Welcome to the best calculator in the world! Made by Maina \nInstructions:";
//   + "\nkey in two numbers and an arithmeric operator from the list below:\nMultiplication: *\nDivision: /\nAddition: +\nSubtraction: -";

const terminalinputmess =
  "\nKey in two numbers, then select an arithmeric operator from the list below:\nMultiplication: *\nDivision: /\nAddition: +\nSubtraction: -";
console.log(displaymessage);

const calculationhistory = [];
const calchistoryobj = {};

calchistoryobj.operation = "+";
calchistoryobj.operands = "8,9";
calchistoryobj.result = "hello";

calchistoryobj.operation = "-";
calchistoryobj.operands = "8,9";
calchistoryobj.result = "hellllo";

calchistoryobj.operation = "-";
calchistoryobj.operands = "8,9";
calchistoryobj.result = "hello";

console.log(calchistoryobj);


const { debug } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//terminalinput();

function terminalinput() {
  console.log(terminalinputmess);
  rl.question("\nEnter first number: ", function (firstnumber) {
    rl.question("\nEnter second number:", function (secondnumber) {
      rl.question("\nEnter arithmetic operator: ", function (arithmeticop) {
        operationworkhere(
          parseInt(firstnumber),
          arithmeticop,
          parseInt(secondnumber),
        );
        rl.question(
          "\nSelect menu\n1) Calculator\n2) Calculation History\n :->  ",
          function (menuselection) {
            funcmenuselect(menuselection);
          },
        );
      });
    });
  });
}

function addnumbers(a, b) {
  let result = a + b;
  console.log(result);
  console.log(a, b);
  calchistoryobj.operation = "+";
  ((calchistoryobj.operands = toString(a)), toString(b));
  calchistoryobj.result = result;
  //calculationhistory.push(result);
  return console.log("\nResult is: " + result);
}

function subractnumber(a, b) {
  let result = a - b;
  calculationhistory.push(result);
  return console.log("\nResult is: " + result);
}

function dividenumber(a, b) {
  let result = a / b;
  calculationhistory.push(result);
  return console.log("\nResult is: " + result);
}

function multiplynumbers(a, b) {
  let result = a * b;
  calculationhistory.push(result);
  return console.log("\nResult is: " + result);
}

function operationworkhere(firstnum, arithmeticoperator, secondnum) {
  switch (arithmeticoperator) {
    case "Multiplication":
      multiplynumbers(firstnum, secondnum);
      break;

    case "*":
      multiplynumbers(firstnum, secondnum);
      break;

    case "multiplication":
      console.log("multiply here");
      multiplynumbers(firstnum, secondnum);
      break;

    case "Division":
      dividenumber(firstnum, secondnum);
      break;

    case "/":
      dividenumber(firstnum, secondnum);
      break;

    case "division":
      dividenumber(firstnum, secondnum);
      break;

    case "Addition":
      addnumbers(firstnum, secondnum);
      break;

    case "+":
      addnumbers(firstnum, secondnum);
      break;

    case "addition":
      addnumbers(firstnum, secondnum);
      break;

    case "Subtraction":
      subractnumber(firstnum, secondnum);
      break;

    case "-":
      subractnumber(firstnum, secondnum);
      break;

    case "subtraction":
      subractnumber(firstnum, secondnum);
      break;
    default:
      console.log("Input invalid, Try again!");
  }
}

function funcmenuselect(menuselection) {
  if (menuselection == 1) {
    return terminalinput();
  } else if (menuselection == 2) {
    console.log("\nCalculation history is\n ");
    console.log(calchistoryobj);
    console.log("\n ");
    terminalinput();
  } else {
    console.log("invalid input try again\n");
    terminalinput();
    return;
  }
}

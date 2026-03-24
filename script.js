const btncalculate = document.getElementById("btn1");
const paracalc = document.getElementById("outputArea");
const parainvalid = document.getElementById("invalidtxt");
const paracalchistory = document.getElementById("calculationhistory");
const btnhistory = document.getElementById("btncheckhist");
btncalculate.addEventListener("click", mainfunctioncontrol);
btnhistory.addEventListener("click", calchistory);
const calculationobject = [];
let checkhistorystate = false;

//Stores calculations in an array
function calculationfunc(user) {
  user.time = new Date().toLocaleString();
  calculationobject.push(user);
}

//function that calculates history
function calchistory() {
  if (!checkhistorystate) {
    paracalchistory.innerHTML = "";

    calculationobject.forEach((item) => {
      const entry = document.createElement("div");

      entry.textContent =
        "[" +
        item.time +
        "] " +
        "Operation: " +
        item.operation +
        " | Operands: " +
        item.operands +
        " | Result: " +
        item.result;

      paracalchistory.appendChild(entry);
    });

    btnhistory.textContent = "Hide History";
    checkhistorystate = true;
  } else {
    paracalchistory.innerHTML = "";
    btnhistory.textContent = "View Calculation History";
    checkhistorystate = false;
  }
}
//Where everything starts
function mainfunctioncontrol() {
  let firstnumbertxtbox = document.getElementById("firsttxtbox").value;
  let secondnumbertxtbox = document.getElementById("secondtxtbox").value;
  let arithmeticselect = document.getElementById("arithmeticoperator").value;
  if (firstnumbertxtbox == "" || secondnumbertxtbox == "") {
    parainvalid.innerHTML = "Enter numbers!";
  } else {
    parainvalid.innerHTML = "";
    operationworkhere(
      parseInt(firstnumbertxtbox),
      arithmeticselect,
      parseInt(secondnumbertxtbox),
    );
  }
}
//Functions for Arithmetic operators

function addnumbers(a, b) {
  let result = a + b;

  calculationfunc({
    operation: "+",
    operands: a + ", " + b,
    result: result,
  });

  return (paracalc.innerHTML = result);
}

function subtractnumber(a, b) {
  let result = a - b;

  calculationfunc({
    operation: "-",
    operands: a + ", " + b,
    result: result,
  });

  return (paracalc.innerHTML = result);
}

function dividenumber(a, b) {
  let result = a / b;

  calculationfunc({
    operation: "/",
    operands: a + ", " + b,
    result: result,
  });

  return (paracalc.innerHTML = result);
}

function multiplynumbers(a, b) {
  let result = a * b;

  calculationfunc({
    operation: "*",
    operands: a + ", " + b,
    result: result,
  });

  return (paracalc.innerHTML = result);
}

//function that takes three parameters numbers to be added and arthitmetic then passes them to the necessary functions

function operationworkhere(firstnum, arithmeticoperator, secondnum) {
  switch (arithmeticoperator) {
    case "multiplication":
      multiplynumbers(firstnum, secondnum);
      break;

    case "division":
      dividenumber(firstnum, secondnum);
      break;

    case "addition":
      addnumbers(firstnum, secondnum);
      break;

    case "subtraction":
      subtractnumber(firstnum, secondnum);
      break;

    default:
      console.log("Input invalid, Try again!");
  }
}

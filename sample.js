const btncalculate = document.getElementById("btn1");
const paracalc = document.getElementById("outputArea");
const paracalchistory = document.getElementById("calculationhistory");
const btnhistory = document.getElementById("btncheckhist");

btncalculate.addEventListener("click", mainfunctioncontrol);
btnhistory.addEventListener("click", calchistory);
const calculationobject = {};

function calculationfunc(id, user) {
  calculationobject[id] = user;
  //console.log(calculationobject);
}

function calchistory() {
  let displayvar;
  for (i = 0; i > calculationobject.length; i++) {
    let calcbjitems = calculationobject[i];
    let operation = calcbjitems.operation;
    let operands = calcbjitems.operands;
    let result = calcbjitems.result;

    displayvar =
      "\n Operations: " +
      operation +
      "Operands: " +
      operands +
      "Result: " +
      result +
      "\n";
  }

  console.log(displayvar);
  const entry = document.createElement("div");
  entry.textContent = JSON.stringify(displayvar) + "\n";
  paracalchistory.appendChild(entry);
}

function mainfunctioncontrol() {
  let firstnumbertxtbox = document.getElementById("firsttxtbox").value;
  let secondnumbertxtbox = document.getElementById("secondtxtbox").value;
  let arithmeticselect = document.getElementById("arithmeticoperator").value;
  

  operationworkhere(
    parseInt(firstnumbertxtbox),
    arithmeticselect,
    parseInt(secondnumbertxtbox),
  );
}

function addnumbers(a, b) {
  let result = a + b;
  calculationfunc("Addition", {
    operation: "+",
    operands: toString(a),
    result: result,
  });
  paracalc.innerHTML = result;
  //return (paracalc.innerHTML = result);
}

function subractnumber(a, b) {
  let result = a - b;
  calculationfunc("Subtraction", {
    operation: "-",
    operands: toString(a),
    result: result,
  });
  paracalc.innerHTML = result;
  //return (paracalc.innerHTML = result);
}

function dividenumber(a, b) {
  let result = a / b;
  calculationfunc("Division", {
    operation: "/",
    operands: toString(a),
    result: result,
  });
  paracalc.innerHTML = result;
  //return (paracalc.innerHTML = result);
}

function multiplynumbers(a, b) {
  let result = a * b;
  calculationfunc("Multiplication", {
    operation: "*",
    operands: toString(a),
    result: result,
  });
  paracalc.innerHTML = result;
  //return (paracalc.innerHTML = result);
}

function operationworkhere(firstnum, arithmeticoperator, secondnum) {
  switch (arithmeticoperator) {
    case "multiplication":
      console.log("multiply here");
      multiplynumbers(firstnum, secondnum);
      break;

    case "division":
      dividenumber(firstnum, secondnum);
      break;

    case "addition":
      addnumbers(firstnum, secondnum);
      break;

    case "subtraction":
      subractnumber(firstnum, secondnum);
      break;
    default:
      console.log("Input invalid, Try again!");
  }
}

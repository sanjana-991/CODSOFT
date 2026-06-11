let currentValue = "0";
let operator = "";
let previousValue = "";

const display = document.getElementById("display");
const operatorDisplay = document.getElementById("operator");


// Number buttons
function handleNumber(number) {

    if (currentValue === "0") {
        currentValue = number;
    } else {
        currentValue += number;
    }

    updateDisplay();
}


// Decimal button
function handleDecimal() {

    if (!currentValue.includes(".")) {
        currentValue += ".";
    }

    updateDisplay();
}


// Operator buttons
function handleOperator(op) {

    previousValue = currentValue;
    operator = op;

    currentValue = "0";

    operatorDisplay.innerText = previousValue + " " + operator;
}


// Calculate result
function calculate() {

    let result;

    let num1 = Number(previousValue);
    let num2 = Number(currentValue);


    if (operator === "+") {
        result = num1 + num2;
    }

    else if (operator === "-") {
        result = num1 - num2;
    }

    else if (operator === "*") {
        result = num1 * num2;
    }

    else if (operator === "/") {

        if(num2 === 0){
            result = "Error";
        }
        else{
            result = num1 / num2;
        }
    }


    currentValue = result.toString();

    operator = "";
    previousValue = "";

    operatorDisplay.innerText = "";

    updateDisplay();
}


// Clear button
function handleClear(){

    currentValue = "0";
    previousValue = "";
    operator = "";

    operatorDisplay.innerText = "";

    updateDisplay();
}


// Update screen
function updateDisplay(){

    display.innerText = currentValue;

}

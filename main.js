const inputScreen = document.getElementById("inputScreen");
const calculation = document.getElementById("calculationScreen");
const deci = document.getElementById("decimal");
const oprtr = document.querySelectorAll(".operator");
const equal = document.getElementById("equals");

oprtr.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

let currentOperator = "";
let currentNumber = "";
let nextNumber = "";
let result = "";


deci.addEventListener("onclick", decimal);
equal.addEventListener("click", operate);

function input(number){
    if(check()){
        inputScreen.textContent += number;
    } 
    else {
        console.log("false");
    }
}

function setOperation(operation) {
    currentOperator = operation;
    currentNumber = Number(inputScreen.textContent);
    calculation.textContent = `${currentNumber} ${currentOperator}`
    inputScreen.textContent = "0";
}

//not yet implemented
function decimal() {
    if(inputScreen.textContent === "0" || !(inputScreen.textContent.contains("."))){
        inputScreen.textContent += ".";
    }
}

function check(){
    if(inputScreen.textContent === "0"){
        inputScreen.textContent = "";
        return true;
    }

    return true;

}

function clearScreen(){ 
    
    inputScreen.textContent = "0";
    calculation.textContent = "";
    currentOperator = "";
    currentNumber = "";
    nextNumber = "";
    result = "";
}

function operate(){
    let temp = Number(inputScreen.textContent);
    nextNumber = currentNumber;
    currentNumber = temp;
    
    switch(currentOperator){
        case "+":
            result = currentNumber + nextNumber;
            changeScreen(result);
            break;
        case "-":
            result = currentNumber - nextNumber;
            changeScreen(result);
            break;
        case "*":
            result = currentNumber * nextNumber;
            changeScreen(result);
            break;
        case "/":
            result = currentNumber / nextNumber;
            changeScreen(result);
            break;
    }
}

function changeScreen(result){
    calculation.textContent = "";
    calculation.textContent = `${nextNumber} ${currentOperator} ${inputScreen.textContent}`;
    inputScreen.textContent = result;
}
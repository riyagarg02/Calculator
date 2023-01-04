let operator = "";
let previousNum = "";
let currentNum = "";


document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector('#clear-btn');
    let equals = document.querySelector('.equals');
    let decimal = document.querySelector('.decimal');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousNumber = document.querySelector('.previous-value');
    let currentNumber = document.querySelector('.current-value');

    numbers.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent);
        currentNumber.textContent = currentNum;
    }));

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent);
        previousNumber.textContent = previousNum + " " + operator;
        currentNumber.textContent = currentNum;
    }));

    clear.addEventListener("click", () => {
        currentNum = '';
        previousNum = '';
        operator = '';
        currentNumber.textContent = currentNum;
        previousNumber.textContent = previousNum;
    });

    decimal.addEventListener('click', function(){
        addDecimal();
        currentNumber.textContent = currentNum;
        previousNumber.textContent = previousNum;
    });

    equals.addEventListener('click', function(){
        calculate();
        previousNumber.textContent = '';

        if(previousNum.length <= 5){
            currentNumber.textContent = previousNum;
        }else{
            currentNumber.textContent = previousNum.slice(0, 5) + "...";
        }
    });

   
});

function handleNumber(number){
    if(number.length <= 5){
        currentNum += number;
    }
}

function handleOperator(op){
    operator = op;
    previousNum = currentNum;
    currentNum = '';
}
function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if(operator === '+'){
        previousNum += currentNum;
    } else if(operator === '-'){
        previousNum -= currentNum;
    } else if(operator === 'x'){
        previousNum *= currentNum;
    } else if(operator === '/'){
        previousNum /= currentNum;
    }

    previousNum = roundNumber(previousNum);

    previousNum = previousNum.toString();
    currentNum = previousNum.toString();

    // console.log(previousNum);
    // console.log(currentNum);
}

function roundNumber(number){
    return Math.round(number * 1000) / 1000;
}

function addDecimal(){
    // if theres not a decimal then add a decimal 
    if(!currentNum.includes(".")){
        currentNum += ".";
    }
    console.log(currentNum);
}
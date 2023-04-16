const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.buttons');
const display = document.querySelector('div.display');
let lastKeyIsOperator = false;

keys.addEventListener("click", e => {
    if (e.target.matches('button')) {
        const action = e.target.dataset.action;
        const keyContent = e.target.textContent;
        const displayNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        // Append number to display if button clicked is not an action
        if (!action) {
            if (displayNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayNum + keyContent;
            }

            calculator.dataset.previousKeyType = 'number';
        }

        // If decimal key is clicked
        if (action === 'decimal') {
            if (previousKeyType === 'operator') {
                display.textContent = '0.'
            } else if (!displayNum.includes('.')) {
                display.textContent = displayNum + '.';
            }

            calculator.dataset.previousKeyType = 'decimal';
        }
        
        // If operator is clicked
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayNum;

            if (firstValue && operator && previousKeyType != 'operator') {
                display.textContent = calculate(firstValue, secondValue, operator);
            }
            
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayNum;
            calculator.dataset.operator = action;
        } 
            

        if (action === 'calculate') {
            calculator.dataset.previousKeyType = 'calculate';

            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayNum;

            display.textContent = calculate(firstValue, secondValue, operator);
        }
    }
})


function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function multiply(x, y) {
    return parseFloat(x) * parseFloat(y);
}

function divide(x, y) {
    return parseFloat(x) / parseFloat(y);
}

function calculate(x, y, operator) {

    switch (operator) {
        case 'add':
            return add(x, y);

        case 'subtract':
            return subtract(x, y);
        
        case 'multiply':
            return multiply(x, y);
        
        case 'divide':
            return divide(x, y);
    }
}



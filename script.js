let num1 = 0;
let num2 = 0;
let operator = '';

const keys = document.querySelector('.buttons');
const display = document.querySelector('div.display');
let lastKeyIsOperator = false;

keys.addEventListener("click", e => {
    // console.log(e.target.dataset.action);
    // console.log(e.target.textContent);
    // console.log(display.textContent);

    if (e.target.matches('button')) {
        const action = e.target.dataset.action;
        const keyContent = e.target.textContent;
        const displayNum = display.textContent;

        // Append number to display if button clicked is not an action
        if (!action) {
            if (displayNum === '0' || lastKeyIsOperator === true) {
                display.textContent = keyContent;
                lastKeyIsOperator = false;
            } else {
                display.textContent = displayNum + keyContent;
            }
        }

        // If decimal key is clicked
        if (action === 'decimal') {
            display.textContent = displayNum + '.';
        }

        // If operator is clicked
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            num1 = displayNum;
            operator = action;
            lastKeyIsOperator = true;
        }

        if (action === 'calculate') {
            display.textContent = operate(num1, displayNum, operator);
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

function operate(x, y, operator) {

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



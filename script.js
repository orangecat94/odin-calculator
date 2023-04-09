let num1 = 0;
let num2 = 0;
let operator = '';

const keys = document.querySelector('.buttons');
const display = document.querySelector('div.display');

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
            if (displayNum === '0') {
                display.textContent = keyContent;
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
            displayNum = 0;
            operator = action;

        }
    }

    console.log(display.textContent);
    
})


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {

    switch (operator) {
        case '+':
            return add(x, y);

        case '-':
            return subtract(x, y);
        
        case '*':
            return multiply(x, y);
        
        case '/':
            return divide(x, y);
    }
}



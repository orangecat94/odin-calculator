let num1 = 0;
let num2 = 0;
let operator = '';

const keys = document.querySelector('.buttons');
keys.addEventListener("click", e => {
    console.log(e.target.dataset.action);
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



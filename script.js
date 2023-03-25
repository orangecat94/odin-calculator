let num1 = 0;
let num2 = 0;
let operator = '';

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

function operate(x, y, operator) {

    switch (operator) {
        case '+':
            return addition(x, y);

        case '-':
            return subtraction(x, y);
        
        case '*':
            return subtraction(x, y);
        
        case '/':
            return subtraction(x, y);
    }
}

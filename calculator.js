function simpleCalculator(number1 , number2 , operation){
    switch(operation){
        case 'sum':
            return number1 + number2
    }
}

const number1 = 8;
const number2 = 5;
const operation = 'sum'

const result = simpleCalculator (number1, number2, operation);

console.log(`${number1} ს რომ მივამატოთ ${number2} მივიღებთ ${result}`);
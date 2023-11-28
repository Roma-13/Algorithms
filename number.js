function getFirstNumber(arr){
    for (const element of arr){
        if (typeof element == 'number'){
            return element; // იპოვის პირველივე რიცხვს
        }
    }
}
const inputArray = [123, 23, 12, 33];
const firstNumber = getFirstNumber(inputArray);

const result = getFirstNumber(inputArray);

console.log (`პირველი რიცხვი მასივიდან არის ${firstNumber}`);

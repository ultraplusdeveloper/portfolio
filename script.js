function printName(name) {
  console.log(name);
}
printName("John Wick");

function addNumber(num1, num2) {
  return num1 + num2;
}
console.log(addNumber(4, 3));

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
console.log(multiplyNumbers(4, 3));

function OddOrEven(number) {
  if (number % 2 === 0) {
    return console.log("Odd");
  } else {
    return console.log("Even");
  }
}
OddOrEven(7);
OddOrEven(2);

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (i = 2; i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

function printElements(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

const myArray = [0, 2, 4, 7];
printElements(myArray);


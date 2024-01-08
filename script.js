'use strict';

// const numbers = [1, 2, 3, 4, 5];

// for (let num of numbers) {
//   console.log(num);
// }

// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log(numbers[i]);
// }

// function isPalindrome(word) {
//   // convert to lowercase
//   let str = word.toLowerCase();
//   // split the word into an array of the letters of the word
//   let strArray = str.split('');
//   // make a copy with .slice and reverse it with .reverse
//   const reversed = strArray.slice().reverse();
//   return strArray.join('') === reversed.join('');
// }

// console.log(isPalindrome('melody'));

// const myName = 'DJ wooster';
// const trial = myName.split();
// console.log(trial, myName);

// isPalindrome('hello!');

// let text = 'hi! How are u';

// const myArray = text.split('');
// console.log(myArray);

/*
function sumOfSquares(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let square = array[i] * array[i];
    sum += square;
  }
  return sum;
}

console.log(sumOfSquares([1, 2, 3]));

const arr = [1, 2, 3];


// de-structring 
const [x, y, z] = arr;
console.log(typeof x, y, z);



function calculateFactorial(number) {
  let multiplied = 1; //
  for (let i = number; i > 1; i--) {
    multiplied *= i;
  }
  console.log(multiplied);
  return multiplied;
}

calculateFactorial(5);

function countDigits(integer) {
  let counter = 0;
  for (let i = integer; i > 0; i / 10) {
    i = Math.floor(i / 10);
    counter++;
  }

  console.log(counter);
  return counter;
}

countDigits(6384850);

function sumOfDigits(digits) {
  let sum = 0;
  while (digits > 0) {
    sum += digits % 10; // gets the last digit
    digits = Math.floor(digits / 10); // removes the last digit from original number
  }
  console.log(sum);
  return sum;
}

sumOfDigits(456);

function reverseDigits(numero) {
  let reversed = 0;
  while (numero > 0) {
    const lastDigit = number % 10;
    reversed = reversed * 10 + numero;
  }
}

function isPalindromeNumber(numero) {
  let reversed = numero;
  while (numero > 0) {
    const lastDigit = reversed % 10;
    const removed = Math.floor(reversed / 10);
    reversed += last;
    reversed++;
  }
  console.log(reversed);
  return reversed;
}

function findMaximum(digits) {
  let max = digits[0];
  for (let i = 1; i < digits.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log(max);
  return max;
}

findMaximum([1, 2, 3, 4, 5]);

function calcAverage(numbers) {
  let arrayLength = 0;
  for (let i = 0; i > 0; i / 10) {
    const divide = arrayLength % 10;
    arrayLength++;
  }
  console.log(arrayLength);
  return arrayLength;
}

calcAverage([1, 2, 3, 4, 5]);

function calculateAverage(numbers) {
  // Check if the array is not empty
  if (numbers.length === 0) {
    return 0; // Handle the case of an empty array
  }

  // Initialize a variable to store the sum of numbers
  let sum = 0;

  // Iterate through the array and calculate the sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Calculate the average by dividing the sum by the count of numbers
  const average = sum / numbers.length;

  console.log(average);
  return average;
}

*/

function calculatePower(base, exponent) {
  let counter = exponent;
  let total = 1;
  for (let i = 1; counter > 0; i--) {
    total *= base;
    counter--;
  }
  console.log(total);
  return total;
}

calculatePower(4, 4);

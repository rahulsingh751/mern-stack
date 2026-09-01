// loops: are used to iterate over the same statement or group of statements over & over.

// print hello world 10 times

// let i = 1;

// while (i <= 50) {
//     document.write("Hello World<br>");
//     i = i + 1;
// }

// print 1 to 50

// let i = 1;

// while (i <= 50) {
//     document.write(`${i} <br>`);
//     i = i + 1;
// }


// print 50 to 1

// let i = 50;

// while (i >= 1) {
//     document.write(`${i} <br>`);
//     i--;
// }



// print the table of a no given by the user.

let num = Number(prompt("Enter a number here?"));

let i = 1;

while (i <= 10) {
    console.log(num * i);
    i++;
}

// print all the even no between 30 to 90

let number = 30;

while (number <= 90) {
    if (number % 2 == 0) {
        console.log(number);
    }
    number++;
}

// print the sum of all the even no between i to j

let i = Number(prompt("Enter the start? "));
let j = Number(prompt("Enter the end? "));

let total = 0;

while (i <= j) {
    if (i % 2 == 0) {
        total = total + i;
    }
    i++;
}

console.log(`Total of all the even numbers between i & j is ${total}`);

// print how many digits a no given by the user contains.

let number = Number(prompt("Enter a number? "));

let digits = 0;

while (number > 0) {
    number = Math.trunc(number / 10);
    digits++;
}

console.log(`There are ${digits} digits in the given number.`);

// print the no given by the user in reverse order.

let number = Number(prompt("Enter a number? "));

let reverse = 0;

while (number > 0) {
    let lastDigit = number % 10;
    number = Math.trunc(number / 10);
    reverse = reverse * 10 + lastDigit;
}

console.log(`The number given by the user is reversed to ${reverse}`);
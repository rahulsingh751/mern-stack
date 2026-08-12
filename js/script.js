// console.log("We are writing code in the JS file");

// variable? what? why?

// var num1 = 892;
// var num2 = 920;
// console.log(num1 + num2); 


// user input ??

// var name = prompt("What is your name?");
// console.log(name);
// console.log(name + " is a good person");


// var vs let & const

// let isWinter = false;
// console.log(isWinter);
// console.log(typeof isWinter);

// let age = 28;
// age = 33;

// console.log(age);
// console.log(typeof age)

// const PI = 3.14;
// // PI = 3.78; // error: not allowed
// console.log(PI);
// console.log(typeof PI);


// let name = "Lewis";
// console.log(name);
// console.log(typeof name);

// console.log("Lando" + "Norris"); // string concatenation

// console.log("80" + 33);


// // operators : symbols that perform some operations

// console.log(20 + 5);
// console.log(20 - 5);
// console.log(20 * 5);
// console.log(20 / 8);

// console.log(20 % 6);


// relational / comparision operators

// console.log(7 > 9);
// console.log(7 >= 9);
// console.log(7 < 9);
// console.log(7 <= 9);
// console.log(7 == 7);
// console.log(9 != 4);



// logical operators

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


// console.log(!true);
// console.log(!false);



// REAL LIFE EXAMPLE

// let age = Number(prompt("What is your age? "));

// console.log(age >= 18 && age < 100);
// console.log(!age >= 18);
// console.log(age >= 18 || age % 5 == 0);

// Q. find if the user can vote or not.

// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }

// Q. calculate the discount on purchase.
 // if total exceed 2000 provide a 15% discount.

// let totalBill = Number(prompt("What is the total bill?"));

// if (totalBill >= 2000) {
//     let discount = totalBill * 0.15;
//     console.log("You got a 15% discount, Congrats");
//     console.log("Kindly pay the remaining: " + (totalBill - discount));
// } else {
//     console.log("Kindly pay the bill of: " + totalBill);
// }


// Q. calculate the student grade using marks?

// let marks = Number(prompt("What is your marks? "));

// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 80) {
//     console.log("B");
// } else if (marks >= 65) {
//     console.log("C");
// } else if (marks >= 50) {
//     console.log("D");
// } else {
//     console.log("Fail");
// }



// switch statements

// rating = Number(prompt("Please provide your rating? ( 1- 5 ) "))

// switch (rating) {
//     case 1:
//         console.log("Very Bad");
//         break;
//     case 2:
//         console.log("Bad");
//         break;
//     case 3:
//         console.log("Average");
//         break;
//     case 4:
//         console.log("Good");
//         break;
//     case 5:
//         console.log("Very Good");
//         break;
//     default:
//         console.log("Incorrect option selected");
// }



// if (rating == 1) {
//     console.log("Very bad");
// } else if (rating == 2) {
//     console.log("Bad");
// } else if (rating == 3) {
//     console.log("Average");
// } else if (rating == 4) {
//     console.log("Good");
// } else if (rating == 5) {
//     console.log("Very good");
// } else {
//     console.log("Incorrect option selected");
// }


// ternary operator

// age = Number(prompt("What is your age?"));

// let result = (age >= 18) ? "Valid voter" : "Invalid voter";
// console.log(result)


// if (age >= 18) {
//     console.log("Valid voter");
// } else {
//     console.log("Invalid voter");
// }



// how to create a function.
function greetings(naam, age) {
    console.log(`Hello, ${naam} Age ${age}`);
    console.log("How are you doing?");
}

// how to call the function.
// greetings("John", 39);
// greetings("Ted", 27);
// greetings("Merry", 21);




function total(a, b, c) {
    return a + b + c;
    console.log("this code will not run");
}

// let answer = total(33, 91, 26);
// console.log(answer);

console.log(user("James", "Chicago"));

function user(naam = "User", location) {
    return naam + " is from " + location;
}

// console.log(user("Chicago"));
// console.log(user("James", "Chicago"));
// console.log(user("Mark", "San diego"));


const addition = function (a, b) {
    return a + b;
}

console.log(addition(3, 9));


// arrays

// let name1 = "john";
// let name2 = "ted";
// let name3 = "tony";

const names = ["john", "ted", "tony"];
names[0] = "peter";
// console.log(names);


// const hello = () => "Hello World";
// console.log(hello());

const multiply = (a, b, c) => a * b * c;

// console.log(multiply(12, 39, 8));


const car = {'brand':'tata', 'model':'tiago', 'price':540000};

// console.log(car['price']);

const person = {'name':'andy', 'age':29, 'gender':'male', 'career':'sales'};

console.log(person['career']);
console.log(typeof person);


const student = new Object({
    'student id' : 102,
    'student name' : 'james',
    'course' : 'machine learning'
});


console.log(typeof student);
console.log(student['course']);

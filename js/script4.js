let age = 29;
let naam = "John";
console.log(`${naam} is ${age}`);


let quote1 = `The "king" in the 'north'`;
let quote2 = "The \"king\" \nin the \tnorth";
console.log(quote1);
console.log(quote2);

document.getElementById('title').innerText = "JS is fun";

let sentence = `global warming
is a
great threat
to the
human
civilisation`;

console.log(sentence);


let name1 = new String("John");
let name2 = new String("John");

console.log(name1 == name2);
console.log(name1 === name2);

let sentence2 = `global warming is a great threat to the human civilisation`;

console.log(sentence2.length);
console.log(sentence2.charAt(2));
console.log(sentence2.charCodeAt(2));
console.log(sentence2.at(-7));


let fullname = naam.concat(" ", "Walker");
console.log(fullname);

let bigNumber1 = BigInt(999999999999999);
let bigNumber2= 999999999999999n;
console.log(bigNumber1);
console.log(bigNumber2);


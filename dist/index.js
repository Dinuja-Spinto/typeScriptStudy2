"use strict";
console.log('hello!');
let age = 10;
let studentName = 'Dinuja Pinto';
let isActive = true;
let myObject = null;
let undefinedData = undefined;
let animals = ['', ''];
let vehicals = ['', '', ''];
let student = { name: 'Dinuja', age: 20 };
let dog = { name: 'Rex', breed: 'Husky', age: 2 };
console.log(dog.name);
function getAgeAfter3Y(age, name) {
    return age + 3;
}
let myAge = getAgeAfter3Y(10);
console.log(myAge);
const rate = 1.5;
let myName = 'dinuja';
console.log(typeof myName);
let numbers = [10, 20, 30, 40];
console.log(numbers[0]);
let strings = ['', '', '', ''];
strings.push('10');
strings.pop();
let student2 = ['Dinuja', 20];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let temp of numbers) {
    console.log(temp);
}
function sayHello(message) {
    console.log(`Message: ${message}`);
}
sayHello('Hi Dinuja');
const hello = (msg) => {
    console.log(msg);
};
hello('World..!');

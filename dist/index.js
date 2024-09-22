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
function sum(numberOne, numberTwo = 10) {
    console.log(numberOne + numberTwo);
}
sum(10);
sum(10, 20);
function sum2(...values) {
    let count = 0;
    for (let temp of values) {
        count += temp;
    }
    return count;
}
console.log(`Rest Function sum: ${sum2(10, 20, 30, 40)}`);
const emp = {
    name: 'Dinuja',
    age: 20,
    address: {
        city: 'jaffna',
        postal: 1212
    }
};
console.log(emp);
console.log(emp.name);
console.log(emp.age);
console.log(emp.address);
console.log(emp.address.city);
const emp2 = {
    name: 'DinujaS',
    age: 20,
    address: {
        city: 'jaffna',
        postal: 1212
    }
};
console.log(emp2.name);
class AnimalWild {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const wildAnimal = new AnimalWild('Tiger', 90, { city: 'Yala', postal: 10 });
console.log(wildAnimal);
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setAge(age) {
        if (age < 0)
            return;
        this.age = age;
    }
}
const d1 = new Dog("Rex", 10);
d1.setAge(11);
console.log(d1);
const a1 = {
    name: 'Dog',
    isActive: true
};
const a2 = {
    name: 'Dog',
    age: 10,
    isActive: false
};
const ranil = { name: 'Ranil', age: 82, canEng: true, isTheif: true };
const anura = { name: 'Anura', age: 59, canEng: false };
class Animal10 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sound() {
        console.log(`${this.name} sound`);
    }
}
class Dog10 extends Animal10 {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
}
let animal10 = new Animal10('Animal', 20);
let dog10 = new Dog10('dog', 2, 'husky');
console.log(animal10);
console.log(dog10);
animal10.sound();
dog10.sound();

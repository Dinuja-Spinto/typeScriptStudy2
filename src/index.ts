console.log('hello!');
//variables =>>>
let age:number = 10;
let studentName:string='Dinuja Pinto';
let isActive:boolean=true;
let myObject:null=null;
let undefinedData: undefined = undefined;
let animals:Array<string>=['',''];
let vehicals:string[]=['','',''];
let student: {name:string, age:number} = {name:'Dinuja', age:20};
//-----------
interface Animal{
    name:string;
    breed:string;
    age:number;
}
let dog: Animal={name:'Rex', breed:'Husky', age:2}
console.log(dog.name);
//-------functions
function getAgeAfter3Y(age:number, name?:string){
    return age+3;
}
let myAge:number = getAgeAfter3Y(10);
console.log(myAge);
//-----------
const rate:number = 1.5;

//type inference
let myName = 'dinuja';
console.log(typeof myName);

//array
let numbers:number[] = [10,20,30,40];
console.log(numbers[0]);

let strings: Array<string>=['','','',''];
strings.push('10'); //add
strings.pop();//rid the last element

//==> tuple
let student2:[string,number]=['Dinuja', 20];

for(let i = 0; i< numbers.length; i++){
    console.log(numbers[i]);
}

for (let temp of numbers){
    console.log(temp);
}

//--> functions
function sayHello(message:string):void{
    console.log(`Message: ${message}`);
}

sayHello('Hi Dinuja');

//arrow function
const hello = (msg:string) :void =>{
    console.log(msg);
}
hello('World..!');

//defult parameter
function sum(numberOne:number, numberTwo:number =10):void{
    console.log(numberOne+numberTwo);
}

sum(10);
sum(10,20);

//rest parameters
function sum2(...values:number[]):number{
    let count:number = 0;
    for(let temp of values){
        count+=temp;
    }
    return count;
}

console.log(`Rest Function sum: ${sum2(10,20,30,40)}`);

//objects ===>
//literals
const emp={
    name:'Dinuja',
    age:20,
    address:{
        city:'jaffna',
        postal:1212
    }
}

console.log(emp);
console.log(emp.name);
console.log(emp.age);
console.log(emp.address);
console.log(emp.address.city);

//interface
interface Emp{
    name:string;
    age:number;
    address:{
        city:string;
        postal:number
    };
}

const emp2: Emp ={
    name:'DinujaS',
    age:20,
    address:{
        city:'jaffna',
        postal:1212
    }
}
console.log(emp2.name);

//Class
class AnimalWild{
    name:string;
    age:number;
    address:{
        city:string;
        postal:number;
    }

    constructor(name:string, age:number, address:{city:string, postal:number}){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

const wildAnimal = new AnimalWild('Tiger', 90, {city:'Yala', postal:10});
console.log(wildAnimal);

//encapsulation
class Dog{
    private name:string;
    private age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age =age;
    }
    public setAge(age:number){
        if(age<0)
            return;
        this.age = age;
    }
}
const d1 = new Dog("Rex", 10);
d1.setAge(11);
console.log(d1);

//optional
//readOnly
interface Animal2{
    name:string;
    age?:number;//optional
    readonly isActive:boolean;
}
const a1:Animal2={
    name:'Dog',
    isActive:true
}
const a2:Animal2={
    name:'Dog',
    age:10,
    isActive: false
}
//a1.isActive =false; --> can not assign cause readOnly
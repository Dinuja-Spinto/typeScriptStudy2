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
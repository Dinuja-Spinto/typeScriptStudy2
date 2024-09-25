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

//extends
interface Person{
    name:string;
    age:number;
    canEng:boolean;
}
interface Ranil extends Person{
    isTheif:boolean;
}
interface Anura extends Person{
}

const ranil:Ranil = {name:'Ranil',age:82,canEng:true,isTheif:true}
const anura:Anura = {name:'Anura',age:59,canEng:false}

//Inheritance
class Animal10{
    private name:string;
    private age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    public sound(): void {
        console.log(`${this.name} sound`);
    }
}
class Dog10 extends Animal10{
    private breed:string;
    constructor(name:string, age:number, breed:string){
        super(name,age);
        this.breed = breed;
    }
}
let animal10 = new Animal10('Animal', 20);
let dog10 = new Dog10('dog', 2, 'husky');
console.log(animal10);
console.log(dog10);
animal10.sound();
dog10.sound();


//abstraction
abstract class phone1{
    private displaySize:number;
    constructor(dpSize:number){
        this.displaySize = dpSize;
    }
    call():void{
        console.log('Calling!...');
        
    }
    message():void{
        console.log('messaging..');
    }
    abstract fileTransfer():void;
}
abstract class phone2 extends phone1{
    dance():void{
        console.log('Dance..!');
        
    }
}
class phone3 extends phone2{
    fileTransfer(): void {
        console.log('FTP..!');
        
    }
}

//generics
function getData<T>(value:T):T{
    return value;
}
let numberVal=getData<number>(10);
let stringVal=getData<string>('Dinuja');
console.log(numberVal);
console.log(stringVal);

interface shape<T>{
    type:T;
}
let s1:shape<string>={type:'hello'}
let s2:shape<number>={type:12}
let s3:shape<boolean>={type:true}

//generic constrain
interface elementLength{
    length:number;
}
function showLength<T extends elementLength>(value:T){
    console.log(value.length);
    console.log(value);
}
showLength([10,20,30]);
showLength('Muthu');

//exceptions
function dev(num1:number, num2:number){
    if(num2==0)
        throw new Error('wrong INput!');
    return num1/num2;
}
try{
    let answer = dev(10,10);
    console.log(answer);
}catch(error){
    console.log(error);
}finally{
    console.log('finally');
}

//type guards -> type of
function setStringData(value:string):void{
    console.log(typeof value);
}
function setNumberData(value:number):void{
    console.log(typeof value);
}

setStringData('hello');
setNumberData(10);

function setData(value: string | number){
    console.log(typeof value);
}

setData('hello');
setData(10);

//type guards -> instanceof
class Dog9{
    sound():void{
        console.log('Baw Baw');
    }
}
class Cat{
    walk():void{
        console.log('run');
    }
}

function execute(value: Cat | Dog9){
    if(value instanceof Cat){
        value.walk();
    }else{
        value.sound();
    }
}
execute(new Dog9());
execute(new Cat());

//type guards -> in
class Dog8{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Cat8{
    age:number;
    constructor(age:number){
        this.age = age;
    }
}
function collectData(value: Dog8 | Cat8){
    if('name' in value){
        console.log(value.name);
    } else{
        console.log(value.age);
    }
}

//assertion (typeCasting)
interface Vehical{
    type:string;
}
interface Car extends Vehical{
    drive():void;
}
interface Can extends Vehical{
    start():void;
}
interface Bus extends Vehical{
    stop():void;
}
function executeV(vehical : Vehical){
    (vehical as Bus)
}
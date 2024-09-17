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
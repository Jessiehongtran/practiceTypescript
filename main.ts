export {}
let message = 'Welcome back';
console.log(message);

let x = 10;
let y = 20;

let sum = 0;
const title = 'Title';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Hong';

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence)

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Hong';
console.log(randomValue);

let myVariable: any = 10;

let anotherVar: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj && 
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(anotherVar)){
    console.log(anotherVar.name)
}

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1?: number, num2?: number){
    if (num1 && num2){    
        return num1 + num2;
    } else {
        return null
    }
}

function addAgain(num1?: number, num2: number = 10){
    if (num1 && num2){    
        return num1 + num2;
    } else {
        return null
    }
}

add(5, 10);

add()

console.log(addAgain(5, 15))

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}


fullName(p);

class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName} `)
    }
}

let emp1 = new Employee('Vishnu');
console.log(emp1.employeeName)
emp1.greet()

class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`)
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName)
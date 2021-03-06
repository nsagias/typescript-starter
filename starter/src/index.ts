// Basic Types
let id: number = 3;
let appName: string = "Hello World";
let isForKids: boolean = true;
let x: any = "Set to either anything";

// Arrays
let arrNumsOnly: number[] = [1,2,3,4,5];
let arrStringsOnly: string[] = ['name', 'lastName', 'Hello'];
let arrAny     : any [] = [1, true, "hello world"];

// Tuple
let person: [number, string, boolean] = [1, 'name', true];

// Tuple Array/ Nested Array with tuple
let people: [number, string][];

people =  [
  [1, 'Bingo'],
  [2, 'Dingo'],
  [3, 'Lingo'],
];

// Unions
let people_id: string | number = 42;

// Enum values
enum DirectionsValues {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

// Enum Strings
enum DirectionsStrings {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

// Objects

// const user : {
//   id: number,
//   name: string;
// } = {
//   id: 1,
//   name: "Dingo"
// };

type User = {
  id: number,
  name: string;
}

const user: User = {
  id: 1,
  name: "Dingo"
}

// Type Assertion
let customer: any = 1;
// Two ways to do type assertions
let customerID = <number>customer;
let anotherCustomerID = customer as number;

// Functions
function addNum(x:number, y:number): number {
  return x + y;
}

// Function that doesn't return anything Void
function log(message: string | number): void {
  console.log(message);
}


// Interfaces
// note: cannot use interface with primitives and unions
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: "Dingo",
}
// user1.id = 5

// Function interface
// Generic two imput math interface
interface MathFunc {
  (x: number, y: number): number
}

const add:      MathFunc = (x: number, y: number) : number => x + y;
const subtract: MathFunc = (x: number, y: number) : number => x - y;
const multiply: MathFunc = (x: number, y: number) : number => x * y;
const divide:   MathFunc = (x: number, y: number) : number => x / y;


// Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const dingo = new Person(1, "Dingo");
const bingo = new Person(2, "Bingo");


// Private Classes
class Person2 {
  private id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const dingo2 = new Person2(1, "Dingo");
const bingo2 = new Person2(2, "Bingo");

// dingo2.id = 5
// console.log(dingo2.id)



// Protected Classes
class Person3 {
  protected id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const dingo3 = new Person3(1, "Dingo");
const bingo3 = new Person3(2, "Bingo");

// dingo3.id = 5
// console.log(dingo3.id)
// console.log(dingo3.register());



interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// PersonInterface example Classes
// note private and protect cause interface error
class Person4 implements PersonInterface{
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const dingo4 = new Person4(1, "Dingo");
const bingo4 = new Person4(2, "Bingo");


interface PersonInterface2 {
  id: number;
  name: string;
  register(): string;
}

// PersonInterface example Classes Extend
class Person5 implements PersonInterface2{
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const dingo5 = new Person5(1, "Dingo");
const bingo5 = new Person5(2, "Bingo");


// Subclass
class Player extends Person5 {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position;
  }
}


const player = new Player(1, "Player", "Position")


// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4,5]);
let strArray = getArray<string>(['a', 'b', 'c','d','e']);




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
};

// Enum Strings
enum DirectionsStrings {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
};

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
};

const user: User = {
  id: 1,
  name: "Dingo"
};

// Type Assertion
let customer: any = 1;
// Two ways to do type assertions
let customerID = <number>customer;
let anotherCustomerID = customer as number;

// Functions
function addNum(x:number, y:number): number {
  return x + y;
};

// Function that doesn't return anything Void
function log(message: string | number): void {
  console.log(message);
};


// Interfaces
// note: cannot use interface with primitives and unions
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number
};

const user1: UserInterface = {
  id: 1,
  name: "Dingo",
};
// user1.id = 5

// Function interface
// Generic two imput math interface
interface MathFunc {
  (x: number, y: number): number
};

const add:      MathFunc = (x: number, y: number) : number => x + y;
const subtract: MathFunc = (x: number, y: number) : number => x - y;
const multiply: MathFunc = (x: number, y: number) : number => x * y;
const divide:   MathFunc = (x: number, y: number) : number => x / y;
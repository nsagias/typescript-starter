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
} 

const user: User = {
  id: 1,
  name: "Dingo"
};
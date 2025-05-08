const userName: string = "JohnDoe";
const userAge: number = 30;
const isEnabled: boolean = false;
const uniqueNull: null = null;
const noValueVar: undefined = undefined;

// Object
const user: { name: string; age: number; isEnabled: boolean } = {
  name: "JohnDoe",
  age: 30,
  isEnabled: false,
};
// Array
const userNames: string[] = ["Alice", "Bob", "Charlie"];
const userAges: Array<number> = [25, 30, 35];
const userDetails: (string | number)[] = ["Alice", 25, "Bob", 30];
const userDetails2: Array<string | number> = ["Alice", 25, "Bob", 30];



// function
function sommer(a: number, b: number): number {
  return a + b;
}
const result = sommer(5, 10);
console.log(result);

// function with optional parameter
function add(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b;
}
const result2 = add(5, 10);
console.log(result2);

class User {
  private name: string;
  private age: number;
  private isEnabled: boolean;

  constructor
}
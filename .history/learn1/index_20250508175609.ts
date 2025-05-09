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
function sumNumbers(a: number, b: number): number {
  return a + b;
}
const result = sumNumbers(5, 10);
console.log(result);

// function with optional parameter
function addN(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b;
}
const result2 = add(5, 10);
console.log(result2);

class User {
  private readonly name: string;
  private readonly age: number;
  private readonly isEnabled: boolean;

  constructor(name: string, age:  number, isEnabled: boolean) {
    this.name = name;
    this.age = age;
    this.isEnabled = isEnabled;
  }


  public getName(): string{
    return `Name : ${this.name}, Age : ${this.age}, isEnabled : ${this.isEnabled}`;
  }

  public getInfos():string{
    return this.name + " " + this.age + " " + this.isEnabled;   
  }
}

const user1 = new User("John", 30, true);
console.log(user1.getName());
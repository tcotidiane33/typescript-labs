var userName = "JohnDoe";
var userAge = 30;
var isEnabled = false;
var uniqueNull = null;
var noValueVar = undefined;
// Object
var user = {
    name: "JohnDoe",
    age: 30,
    isEnabled: false,
};
// Array
var userNames = ["Alice", "Bob", "Charlie"];
var userAges = [25, 30, 35];
var userDetails = ["Alice", 25, "Bob", 30];
var userDetails2 = ["Alice", 25, "Bob", 30];
// function
function sommer(a, b) {
    return a + b;
}
var result = sommer(5, 10);
console.log(result);
// function with optional parameter
function add(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
var result2 = add(5, 10);
console.log(result2);
var User = /** @class */ (function () {
    function User(name, age, isEnabled) {
        this.name = name;
        this.age = age;
        this.isEnabled = isEnabled;
    }
    User.prototype.getName = function () {
        return "Name : ".concat(this.name, ", Age : ").concat(this.age, ", isEnabled : ").concat(this.isEnabled);
    };
    User.prototype.getInfos = function () {
        return this.name + " " + this.age + " " + this.isEnabled;
    };
    return User;
}());
var user1 = new User("John", 30, true);
console.log(user1.getName());

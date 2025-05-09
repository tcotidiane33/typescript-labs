var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyApp;
(function (MyApp) {
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
    function sumNumbers(a, b) {
        return a + b;
    }
    var result = sumNumbers(5, 10);
    console.log(result);
    // function with optional parameter
    function addNumber(a, b, c) {
        if (c) {
            return a + b + c;
        }
        return a + b;
    }
    var result2 = addNumber(5, 10);
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
    var Employer = /** @class */ (function (_super) {
        __extends(Employer, _super);
        function Employer(name, age, isEnabled, companyName) {
            var _this = _super.call(this, name, age, isEnabled) || this;
            _this.companyName = companyName;
            return _this;
        }
        Employer.prototype.getInfos = function () {
            return _super.prototype.getInfos.call(this) + " " + this.companyName;
        };
        return Employer;
    }(User));
    var user1 = new User("John", 30, true);
    console.log(user1.getName());
    var user2 = new Employer("Jane", 28, false, "Tech Corp");
    console.log(user2.getInfos());
})(MyApp || (MyApp = {}));

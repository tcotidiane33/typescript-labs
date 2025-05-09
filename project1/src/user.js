"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age, isEnabled) {
        this.name = name;
        this.age = age;
        this.isEnabled = isEnabled;
    }
    User.prototype.getInfos = function () {
        return "".concat(this.name, " ").concat(this.age);
    };
    return User;
}());
exports.User = User;

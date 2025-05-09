"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age, isEnabled) {
        this.name = name;
        this.age = age;
        this.isEnabled = isEnabled;
    }
    getInfos() {
        return `${this.name} ${this.age}`;
    }
}
exports.User = User;

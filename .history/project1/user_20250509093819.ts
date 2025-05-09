class User {

    constructor(
        public name: string,
        public age: number,
        public isEnabled: boolean
    ) {}

    getInfos(): string {
        return `${this.name} ${this.age}`;
    }
}
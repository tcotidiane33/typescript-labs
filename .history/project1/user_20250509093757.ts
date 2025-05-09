class User {

    constructor(
        public name: string,
        public age: number,
        public isEnabled: boolean,

        getInfos: () {
            return `${this.name} ${this.age} ${this.isEnabled}`;    
        }
    )
}
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
module.exports = person;
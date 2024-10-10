const person = require('./person');

class Student extends person{
    constructor(name,age,math,physical,chemistry){
        super(name, age);
        this.math = math;
        this.physical = physical;
        this.chemistry = chemistry;
        this.calculateAverage();
    }
    calculateAverage(){
        this.AVG = (this.math + this.physical + this.chemistry) / 3;
        if (this.AVG >= 8) {
            this.RANK = "Gioi";
        } else if (this.AVG >= 6.5) {
            this.RANK = "Kha";
        } else if (this.AVG >= 5.0) {
            this.RANK = "Trung Binh";
        } else {
            this.RANK = "Yeu";
        }
    }
    toString(){
        return `Name: ${this.name}, Age: ${this.age}, Math: ${this.math}, Physical: ${this.physical}, Chemistry: ${this.chemistry}, AVG: ${this.AVG.toFixed(2)}, Rank: ${this.RANK}`;
    }
}

module.exports = Student;
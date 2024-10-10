const Student = require('../model/student');

class ManagerStudent{
    constructor(){
        this.students = [];
    }
    addStudent(student){
        this.students.push(student);
    }
    getAllStudent(){
        return this.students;
    }
    findStudent(name){
        return this.students.find(student => student.name.includes(name));
    }
    getAvgRank(rank){
        return this.students.filter(student => student.RANK === rank);
    }
    sortAlphaB(){
        return this.students.sort((a,b) => {
            if(a.name === b.name){
                return a.AVG - b.AVG;
            }
            return a.name.localeCompare(b.name);
        })
    }
}

const manager = new ManagerStudent();

manager.addStudent(new Student("Tuan", 18, 6.5, 6, 6.5));
manager.addStudent(new Student("Tuan", 18, 6.5, 6, 2));
manager.addStudent(new Student("Binh", 18, 6, 6.5, 6));
manager.addStudent(new Student("Chi", 18, 5, 4.5, 6));
manager.addStudent(new Student("Duc", 18, 8.5, 9, 9));
manager.addStudent(new Student("Huy", 18, 4, 5, 5));
manager.addStudent(new Student("Linh", 18, 7, 6.5, 8));
manager.addStudent(new Student("Trang", 18, 9, 9, 9.5));
manager.addStudent(new Student("An", 18, 9, 8.5, 7));

module.exports = manager;
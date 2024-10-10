const express = require('express');
const router =express.Router();
const manager = require('../controller/studentController');

router.get('/', (req,res)=>{
    res.json(manager.getAllStudent());
});

router.get('/search/:name', (req,res)=>{
    const name = req.params.name;
    const student = manager.findStudent(name);
    if(student){
        res.json(student);
    }
    else{
        res.status(404).json({message: 'Student not found'});
    }
});

router.get('/goodRank', (req, res) => {
    const students = manager.getAvgRank("Gioi");
    if(students.length > 0) {
        res.json(students);
    }
    else{
        res.status(404).json({message: 'No students found with good rank'});
    }
});

router.get('/sort',(req, res) => {
    const students = manager.sortAlphaB();
    res.json(students);
});
module.exports = router;
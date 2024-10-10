const express = require('express');
const bodyParser = require('body-parser');
const ArrIntManager = require('./arrIntManager');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/sum',(req,res) => {
    const {arrInt} = req.body;
    const sumArr = new ArrIntManager(arrInt);
    const sum = sumArr.sumArr();
    res.json({sum});
});

app.post('/sumPrime',(req,res) => {
    const {arrInt} = req.body;
    const sumArr = new ArrIntManager(arrInt);
    const sum = sumArr.sumPrime();
    res.json({sum});
});

app.post('/printfBoBa',(req,res) => {
    const {arrInt} = req.body;
    const manager = new ArrIntManager(arrInt);
    const result = manager.printfBoBa();
    res.json({result: result});
});

app.post('/printLongest',(req,res) => {
    const {arrInt,s} = req.body;
    const manager = new ArrIntManager(arrInt);
    const result = manager.printLongest(s);
    res.json({result: result});
});

app.post('/findLongestBitonicSubarray',(req,res) => {
    const {arrInt} = req.body;
    const manager = new ArrIntManager(arrInt);
    const result = manager.findLongestBitonicSubarray();
    res.json({result: result});
});

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});
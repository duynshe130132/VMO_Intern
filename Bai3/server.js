const express = require('express');
const bodyParser = require('body-parser');
const MyString = require('./myString');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/sumASCII', (req, res) => {
    const {inputString} = req.body;
    const myString = new MyString(inputString);
    const sum = myString.SumASCII();
    res.json({result: sum });
});

app.post('/sumASCIIPrime', (req, res) => {
    const {inputString} = req.body;
    const myString = new MyString(inputString);
    const sum = myString.SumASCIIPrime();
    res.json({result: sum });
});

app.post('/listCharacterCount', (req, res) => {
    const {inputString, n} = req.body;
    const myString = new MyString(inputString);
    const result = myString.ListCharacterCount(n);
    res.json({result });
});

app.post('/longestCommonSubstring', (req, res) => {
    const {string1, string2} = req.body;
    const myString = new MyString(string1);
    const result = myString.longestCommonSubstring(string1,string2);
    res.json({longestCommonSubstring: result });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
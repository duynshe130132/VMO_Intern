const express = require('express');
const  bodyParser = require('body-parser');
const sumExpression = require('./sumExpression');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/caculate', (req, res) => {
    const {x, n} = req.body;
    if(typeof x !== 'number' || typeof n !== 'number'){
        return res.status(400).json({error: 'Invalid input. Both x and n should be numbers.'});
    }
    const sumExp = new sumExpression(x,n);
    const sum = sumExp.caculator();
    res.json({result: sum});
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
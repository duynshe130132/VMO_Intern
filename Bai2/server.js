const express = require('express');
const bodyParser = require('body-parser');
const Draw = require('./draw');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/draw', (req, res) => {
    const height = req.body.height

    const draw = new Draw();
    const drawShape = draw.drawShape(height);
    res.status(200).send(drawShape);
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
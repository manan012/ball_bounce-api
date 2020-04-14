const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.post('/calculate', (error, req, res) => {
    console.log(error);
    let height = req.body.height;
    let restitution = re.body.restitution;
    return restitution + height;
});
app.listen(process.env.PORT || 3000);
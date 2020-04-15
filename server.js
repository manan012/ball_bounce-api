const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const apiroutes = require('./routes/apiroutes');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// fs.readFile('./data.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("File read failed:", err)
//         return
//     }
//     console.log('File data:', jsonString)
// })

app.use('/api', apiroutes);


// app.post('/calculate', (req, res) => {
//     console.log(req.body.height);
//     const velocity = Math.sqrt(req.body.height * 2 * 9.8);
//     console.log(velocity);
//     console.log(req.body.restitution);



// const jsonString = JSON.stringify(customer);

// fs.writeFile('./data.json', jsonString, err => {
//     if (err) {
//         console.log('Error writing file', err)
//     } else {
//         console.log('Successfully wrote file');
//         console.log(jsonString);
//         res.sendFile('/home/mutant/edu/data.json');
//     }
// });

// });
app.listen(3000);
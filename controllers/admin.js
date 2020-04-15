const fs = require('fs');
exports.calculate = (req, res) => {

    const h = req.body.height;
    const e = req.body.restitution;

    if (e > 1 || e < 0) {
        res.status(201).json({
            'message': 'Invalid restitution value'
        });
    }


    const vel = Math.sqrt(2 * 9.8 * h); // velocity


    let height = h * 1.0;
    const heights = [];

    let i = 0


    while (height != 0) {
        // console.log(height);
        height = (Math.pow(e, 2 * i) * h).toFixed(3);
        if (height == 0)
            break;
        heights.push(parseFloat(height));
        heights.push(0);
        i = i + 1;
    }
    const len = heights.length;
    // console.log(len);
    let j = 0;
    const time = [];
    const ra = Math.sqrt((2 * h) / 9.8).toFixed(3);
    time.push(0);

    let ti = ra * 1.0;
    time.push(ti);

    for (j = 2; j < len;) {


        let ti2 = ((Math.pow(e, j)) * 2 * ti).toFixed(3);
        let tii = (parseFloat(ti2) / parseFloat(2)).toFixed(3);
        time.push(parseFloat((parseFloat(ti) + parseFloat(tii)).toFixed(3)));
        time.push(parseFloat((parseFloat(ti) + parseFloat(ti2)).toFixed(3)));
        j = j + 2;
        ti = (parseFloat(ti) + parseFloat(ti2)).toFixed(3);

    }
    const len1 = time.length;

    console.log(len);
    console.log(len1);
    // console.log(ar);
    res.status(201).json({
        heights,
        time
    });
    const arr = ["height: " + heights, "time: " + time];
    var jsonString = JSON.stringify(arr);

    console.log(jsonString);


    fs.appendFile('../data.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file');
            console.log(jsonString);
        }
    });

};

exports.history = (req, res) => {
    fs.readFile('../data.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString)
        res.status(201).json({
            jsonString
        });

    })
};

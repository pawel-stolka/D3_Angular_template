var express = require('express'),
    cors = require('cors'),
    fs = require('fs'),
    morgan = require('morgan')

var app = express(),
    port = process.env.PORT || 9900

// use morgan to log requests to the console
app.use(morgan('dev'));
app.use(cors())

app.get('/', function (req, res) {
    res.send('Server works fine, dude!');
})

app.get('/data', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');

    var obj = JSON.parse(fs.readFileSync('public/data/data.json'));
    res.send(JSON.stringify(obj));
})

app.listen(port, function (err) {
    console.log('running server on port ' + port);
    console.log('CORS-enabled web server listening on port  ' + port);
});
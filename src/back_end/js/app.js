var express = require('express');
var bodyParser = require('body-parser');

var data = require('./mocks/DataMock.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/data', function (req, res) {
    res.send(data);
});

app.post('/model/:id', function (req, res) {
    var savedData = req.body;
    savedData.id = data.length + 1;
    res.send(req.body);
});

app.put('/model/:id', function (req, res) {
    res.send(req.body);
});

app.get('/model/:id', function (req, res) {
    
});

app.delete('/model/:id', function (req, res) {
    res.send(req.body);
});

app.listen(3000, function () {
  console.log('App started 3000!');
});
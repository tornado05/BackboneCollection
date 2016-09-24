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

app.listen(3000, function () {
  console.log('App started 3000!');
});
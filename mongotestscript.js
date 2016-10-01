var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
  
  // Connection URL 
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  var collection = db.collection('new test collection');
  collection.find({}).toArray(function (err, data) { 
      for(var i = 0; i < data.length; ++i) {
          console.log(data[i]);
      }
  });
  db.close();
});
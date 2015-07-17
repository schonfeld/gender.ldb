var levelup = require('levelup');
var async = require('async');
var db = levelup('./gender.ldb');
var data = require('./data');

async.eachSeries(data, function iterator(item, callback) {
  db.put(item["name"].toLowerCase() + ":" + item["country"].toLowerCase(), item["gender"].toLowerCase(), callback);
}, function done(err) {
  if(err) {
    console.log("Oops: ", err);
  }

  console.log("Done.");
});

var levelup = require('levelup');
var async = require('async');
var db = levelup('./gender.ldb');
var data = require('./data');

var allowedValues = ["MALE", "MOSTLY_MALE", "FEMALE", "MOSTLY_FEMALE", "UNISEX", "UNKNOWN"];

async.eachSeries(data, function iterator(item, callback) {
  var value = item["gender"].toUpperCase();
  if(allowedValues.indexOf(value) === -1) {
    console.warn("Value not allowed for [" + item["name"] + ":" + item["country"] + "]: " + value);
    return callback();
  }
  db.put(item["name"].toLowerCase() + ":" + item["country"].toLowerCase(), value, callback);
}, function done(err) {
  if(err) {
    console.log("Oops: ", err);
  }

  console.log("Done.");
});

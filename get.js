var levelup = require('levelup');
var db = levelup('./gender.ldb');
var name = process.argv[2].toLowerCase();
var country = process.argv[3].toLowerCase();

console.log("Getting [" + name + "] in [" + country + "]");
db.get(name + ":" + country, function (err, value) {
  if (err) return console.log('Ooops!', err)

  console.log('gender=' + value)
})


var path       = require('path');
var fs         = require('fs');
var dbHelper   = require(__dirname+'/database');
var PowerPurse = require(path.join(__dirname, '/../../../'));

module.exports = new PowerPurse({
  signingPublicKey: fs.readFileSync(__dirname+'/../../../src/test/helpers/rsa-public.pem'),
  bookshelf : dbHelper.bookshelf,
  knex      : dbHelper.knex  
});


"use strict";

var Account = require(__dirname + "/../models/account");

module.exports = function (bookshelf) {
  var Accounts = bookshelf.Collection.extend({
    model: Account
  });

  return Accounts;
};
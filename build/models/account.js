"use strict";

var Balance = require(__dirname + "/balance");

module.exports = function (bookshelf) {
  var Account = bookshelf.Model.extend({
    balances: function () {
      return this.hasMany(Balance);
    }
  });

  return Account;
};
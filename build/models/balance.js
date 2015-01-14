"use strict";

module.exports = function (bookshelf) {
  var Balance = bookshelf.Model.extend({
    account: function () {}
  });

  return Balance;
};
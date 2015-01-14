"use strict";

module.exports = function (bookshelf, models) {
  return bookshelf.Collection.extend({
    model: models.Debit
  });
};
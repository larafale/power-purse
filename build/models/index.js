"use strict";

module.exports = function (bookshelf) {
  return {
    Account: require(__dirname + "/account")(bookshelf),
    Balance: require(__dirname + "/balance")(bookshelf)
  };
};
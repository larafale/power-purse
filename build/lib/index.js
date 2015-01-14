"use strict";

module.exports = function (collections, models) {
  return {
    Accounts: require(__dirname + "/accounts")(collections, models)
  };
};
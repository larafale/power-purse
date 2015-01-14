"use strict";

var Promise = require("bluebird");

module.exports = function (collections, models) {
  var AccountsLib = (function () {
    var AccountsLib = function AccountsLib() {};

    AccountsLib.prototype.register = function () {
      return new Promise(function () {});
    };

    AccountsLib.prototype.find = function () {
      return new Promise(function () {});
    };

    return AccountsLib;
  })();

  return AccountsLib;
};
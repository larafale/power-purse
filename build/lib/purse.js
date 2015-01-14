"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

function validateOptions(options, key) {
  if (!options[key]) {
    throw new Error("options." + key + " is required");
  }
}

var PowerPurse = (function () {
  var PowerPurse = function PowerPurse(options) {
    validateOptions(options, "signingPublicKey");
    validateOptions(options, "bookshelf");
    validateOptions(options, "knex");
    this._bookshelf = options.bookshelf;
    this._models = require(__dirname + "/../models")(this._bookshelf);
    this._collections = require(__dirname + "/../collections")(this._bookshelf, this._models);
    this._lib = require(__dirname)(this._bookshelf);
  };

  _classProps(PowerPurse, null, {
    accounts: {
      get: function () {
        return new this._lib.Accounts();
      }
    }
  });

  return PowerPurse;
})();

module.exports = PowerPurse;
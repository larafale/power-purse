"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Accounts = require(__dirname + "/accounts");

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
  };

  _classProps(PowerPurse, null, {
    accounts: {
      get: function () {
        console.log("get new accouts", Accounts);
        console.log("get new accouts", new Accounts());
        return new Accounts();
      }
    }
  });

  return PowerPurse;
})();

module.exports = PowerPurse;
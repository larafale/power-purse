"use strict";

function validateOptions(options, key) {
  if (!options[key]) {
    throw new Error("options." + key + " is required");
  }
}

var PowerPurse = function PowerPurse(options) {
  validateOptions(options, "signingPublicKey");
  validateOptions(options, "bookshelf");
  validateOptions(options, "knex");
};

module.exports = PowerPurse;
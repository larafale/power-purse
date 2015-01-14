"use strict";

var Accounts = require(__dirname + "/../../lib/accounts");
var PowerPurse = require(__dirname + "/../../");
var fs = require("fs");
var path = require("path");
var dbHelper = require(__dirname + "/../helpers/database");
var assert = require("assert");

describe("purse.accounts", function () {
  var purse;

  before(function () {
    purse = new PowerPurse({
      signingPublicKey: fs.readFileSync(path.join(__dirname, "/../../../src/test/helpers/rsa-public.pem")),
      bookshelf: dbHelper.bookshelf,
      knex: dbHelper.knex
    });
  });

  it("purse should have an accounts module", function () {
    console.log("accounts", new Accounts());
    console.log(purse.accounts);
    assert(purse.accounts instanceof Accounts);
  });
});
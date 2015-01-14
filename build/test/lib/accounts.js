"use strict";

var PowerPurse = require(__dirname + "/../../../");
var fs = require("fs");
var path = require("path");
var dbHelper = require(__dirname + "/../helpers/database");
var assert = require("assert");
var purse = require(__dirname + "/../helpers/purse");

describe("purse.accounts", function () {
  it("purse should have an accounts module", function () {
    assert(purse.accounts);
  });

  it("should have a register method", function () {
    assert(purse.accounts.register instanceof Function);
  });

  it("should have a register method", function () {
    assert(purse.accounts.find instanceof Function);
  });
});
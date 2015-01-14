"use strict";

var knex = require("knex");
var bookshelf = require("bookshelf");

module.exports.knex = knex({
  dialect: "sqlite3" });

module.exports.bookshelf = bookshelf(module.exports.knex);
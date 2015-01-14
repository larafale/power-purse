
module.exports = function(bookshelf, models) {

  return {
    Accounts : require(__dirname+'/accounts')(bookshelf, models),
    Balances : require(__dirname+'/balances')(bookshelf, models)
  }
}


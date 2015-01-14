
module.exports = function(bookshelf, models) {

  return bookshelf.Collection.extend({
    model: models.Credit
  })
}


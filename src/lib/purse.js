
function validateOptions(options, key) {
  if (!options[key]) { throw new Error('options.'+key+' is required') }
}

class PowerPurse {

  constructor(options) {
    validateOptions(options, 'signingPublicKey')
    validateOptions(options, 'bookshelf')
    validateOptions(options, 'knex')
    this._bookshelf   = options.bookshelf
    this._models      = require(__dirname+'/../models')(this._bookshelf)
    this._collections = require(__dirname+'/../collections')(this._bookshelf, this._models)
    this._lib         = require(__dirname)(this._bookshelf)
  }

  get accounts() {
    return new this._lib.Accounts()
  }
}

module.exports = PowerPurse


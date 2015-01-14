var Accounts = require(__dirname+'/accounts');

function validateOptions(options, key) {
  if (!options[key]) { throw new Error('options.'+key+' is required') }
}

class PowerPurse {

  constructor(options) {
    validateOptions(options, 'signingPublicKey')
    validateOptions(options, 'bookshelf')
    validateOptions(options, 'knex')
  }

  get accounts() {
    return new Accounts()
  }
}

module.exports = PowerPurse


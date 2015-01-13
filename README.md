#Power of the Purse
SUPER ALPHA, HUGE CHUNKS MISSING
================================

Javascript embedded database for maintaining
accounts with balances of fungible assets.

## Installation

    npm install -g power-purse

### Build from source

    git clone https://github.com/stevenzeiler/power-purse.git
    cd power-purse

    npm run build

### Running the Tests

    npm run test

## Usage

PowerPurse can be used both within a javascript
application or as a standalong application with
an http rest interface.

### Within Javascript

Purse connects to its database using knex.js and
bookshelf.js. All records must be signed by the
signing key.

    var purse = new PowerPurse({
      signingKey: '<RSA512 SIGNING PUBLIC KEY>',
      bookshelf : bookshelfJsObject,
      knex      : knexDbConnection
    })

    Promise<Account> purse.registerAccount({
      uid: '13lkjl2k34jlk3j4jijzlij'
    })

    Promise<Account> purse.getAccount({
      uid: '13lkjl2k34jlk3j4jijzlij'
    })
    
    Purse<Balances> purse.account.getBalances()

    Purse<Balance> purse.account.getBalance({
      currency: 'BTC'
    })

    Promise<Debit> purse.account.debit({
      amount    : 150,
      currency  : 'BTC',
      uid       : '<SOME_PAYMENT_HASH>',
      network   : 'ripple',
      nonce     : 12344,
      datetime  : '<TIMESTAMP>',
      signature : '<JSON_WEB_TOKEN>'
    })

    Promise<Credit> purse.account.credit({
      amount    : 100,
      currency  : 'BTC',
      uid       : '<SOME_PAYMENT_HASH>',
      network   : 'ripple'
      nonce     : 12345,
      datetime  : '<TIMESTAMP>',
      signature : '<JSON_WEB_TOKEN>'
    })

    Promise<Overdraft> purse.account.credit({
      amount    : 250,
      currency  : 'BTC',
      uid       : '<SOME_PAYMENT_HASH>',
      network   : 'ripple',
      nonce     : 123456,
      datetime  : '<TIMESTAMP>',
      signature : '<JSON_WEB_TOKEN>'
    })

#### Events

    purse.on('credit', function(credit) {
      credit.account.fetch()
    });

    purse.on('debit', function(debit) {
      debit.account.fetch()
    });

    purse.on('overdraft', function(attemptedDebit) {
      attemptedDebit.account.fetch()
    });

    purse.on('account:created', function(account) {

    });

### Standalone HTTP Server

For use outside of Javascript run Power Purse as
a standalone daemon process

    power-purse start

To run from source code downloaded from github:

    cd power-purse/
    npm run start

#### REST Interface

    POST /v1/accounts/:uid

    GET /v1/accounts/:uid

    POST /v1/accounts/:uid/debits

    GET /v1/accounts/:uid/debits

    GET /v1/accounts/:uid/debits/:uid

    POST /v1/accounts/:uid/credits

    GET /v1/accounts/:uid/credits

    GET /v1/accounts/:uid/credits/:uid

#### Event Notification

To receive event notifications via HTTP specify the
notification url on startup

    power-purse --notificationUrl=$URL



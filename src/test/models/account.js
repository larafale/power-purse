var UUID  = require('uuid');
var path  = require('path');
var purse = require(path.join(__dirname, '/../helpers/purse'));

describe('Account', function() {

  var uuid = UUID.v4();

  it('should be persisted with a uid', function() {

    purse.accounts.register({
      uid: uuid
    })
    .then(function(account) {
      assert(account.uuid, uuid);
      done();
    })
  });

  it('should maintain uniqueness amount uuids', function() {
    purse.accounts.register({
      uid: uuid
    })
    .error(function(error) {
      assert(error.message, 'uid must be unique');
      done();
    })
  });

  it('should have balances, but none to begin', function(done) {
    purse.accounts.register({
      uid: UUID.v4()
    })
    .then(function(account) {
      account.getBalances().then(function(balances) {
        assert.strictEqual(balances.length, 0);
        done();
      });
    });
  });
});


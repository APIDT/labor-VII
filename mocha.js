const assert = require('assert');
const { checkPass, hashPassword, checkPasswordMatch, password  } = require('./password.js');

var describe = ('Password functions', function() {
  it('checkPass should return true for a valid password length', function() {
    assert.strictEqual(checkPass('password'), true);
  });

  it('checkPass should return false for a password with less than 9 characters', function() {
    assert.strictEqual(checkPass('pass'), false);
  });

  it('hashPassword should hash a valid password', async function() {
    const hashedPassword = await hashPassword('hashPassword');
    assert.ok(hashedPassword);
  });

  it('checkPasswordMatch should return true for matching passwords', async function() {
    const hashedPassword = await hashPassword(hashPassword);
    const isMatch = await checkPasswordMatch(password, hashedPassword);
    assert.strictEqual(isMatch, true);
  });

  it('checkPasswordMatch should return false for non-matching passwords', async function() {
    const hashedPassword = await hashPassword(hashPassword);
    const isMatch = await checkPasswordMatch(password, hashedPassword);
    assert.strictEqual(isMatch, false);
  });
});

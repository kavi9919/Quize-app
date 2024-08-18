const crypto = require('crypto');

/**creating secreate key */
const secreateKey =crypto.randomBytes(32).toString('hex');

module.exports = {secreateKey : secreateKey};
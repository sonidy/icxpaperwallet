var EthUtil = require('ethereumjs-util');
var crypto = require('crypto')
var sha3_256 = require('js-sha3').sha3_256;
var Wallet = require('ethereumjs-wallet');

window.toIcxWif = function (a, bits) {
 a = EthUtil.toBuffer(a)
 if (!bits) bits = 256
 return 'hx'+sha3_256.update(a).hex().slice(-40);
}

window.random256BytesHex = function()
{
  //can be used as icx private key
  return crypto.randomBytes(32).toString('hex');
}

window.getIcxPublicKey = function(privateKey)
{
  const publicKeyBuffer = EthUtil.privateToPublic('0x'+privateKey);
  return toIcxWif(publicKeyBuffer)
}

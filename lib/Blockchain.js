// const SHA256 = require('crypto-js/sha256');
var Block = require('./Block');

class Blockchain {
  constructor () {
    this._chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(blockObject = Block){
    return new blockObject(0, '18/01/18', 'Genesis block', '0');
  }

  getLatestBlock(){
    return 'last block'
  }
}

module.exports = Blockchain;

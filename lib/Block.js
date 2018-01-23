// const SHA = require('crypto-js/sha256');

// index - tells where blockchain sits in the  chain
// timestamp - when the block was created
// data - type of tada to associate with the block / details of transaction  sender/recever
// previousHash - a unique string that contains previous block hash, ensures the integrity of blockchain system

class Block {
  constructor (index, timeStamp, data, previousHash = '') {
    this._index = index;
    this._timeStamp = timeStamp;
    this._data = data;
    this._previousHash = previousHash;
    this._hash = '';
  }

  calculateHash(){
    return 0;
  }
}


module.exports = Block;

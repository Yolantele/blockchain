'use strict';

var Block = require('./Block');

class Blockchain {
	constructor () {
		this._chain = [this.createGenesisBlock()];
	}

	createGenesisBlock(blockObject = Block){
		return new blockObject(0, '01/01/18', 'Genesis block', '0');
	}

	getLatestBlock(){
    var lastBlock = this._chain.length - 1;
		return this._chain[lastBlock];
	}
}

module.exports = Blockchain;

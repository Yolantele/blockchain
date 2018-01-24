var Block = require('./Block');

class Blockchain {
	constructor () {
		this._chain = [this.createGenesisBlock()];
	}

	createGenesisBlock(blockObject = Block){
		return new blockObject(0, '01/01/18', 'Genesis block', '0');
	}

	getLatestBlock(){
		return 'last block';
		// return this.chain[this.chain.length - 1]
	}
}

module.exports = Blockchain;

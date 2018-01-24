//_____BLOCKCHAIN CLASS _____:

describe('Blockchain', () => {
	var Blockchain = require('../lib/Blockchain');
	var blockchain;
	var blockDummy;

	function BlockDummy () {
	}

	beforeEach(() => {
		blockchain = new Blockchain();
		blockDummy = new BlockDummy();
	});

	describe('initialize', () => {
		it('is an instance of blockchain', () => {
			expect(blockchain).toEqual(new Blockchain());
		});
	});
	describe('createGenesisBlock', () => {
		it('returns new Block', () => {
			expect(blockchain.createGenesisBlock(BlockDummy)).toEqual(new BlockDummy);
		});
	});
	describe('getLatestBlock', () => {
		it('returns the last object in the chain ', () => {
      blockchain._chain.push('Object 1');
      blockchain._chain.push('Object 2');
			expect(blockchain.getLatestBlock()).toEqual('Object 2');
		});
	});
});


// _____ TEMPLATES _____

// describe('', () => {
//   it('', () => {
//     expect().
//   });
// });

//_____BLOCKCHAIN CLASS _____:

describe('Blockchain', () => {
  var Blockchain = require('../lib/Blockchain');
  var blockchain;
  var blockDummy;

  var counter = 0;

  function BlockDummy () {
    // counter += 1;
    // this.counter = counter;
  };

  beforeEach(() => {
    blockchain = new Blockchain();
    blockDummy = new BlockDummy();
  })

  describe('initialize', () => {
    it('is an instance of blockchain', () => {
      expect(blockchain).toEqual(new Blockchain())
    });
  });
  describe('createGenesisBlock', () => {
    it('returns new Block', () => {
      expect(blockchain.createGenesisBlock(BlockDummy)).toEqual(new BlockDummy)
    });
  });
  describe('getLatestBlock', () => {
    it('returns the last object in the chain ', () => {
      expect(blockchain.getLatestBlock()).toEqual('last block')
    });
  });
});




// _____ TEMPLATES _____

// describe('', () => {
//   it('', () => {
//     expect().
//   });
// });

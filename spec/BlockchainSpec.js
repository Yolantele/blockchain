//_____BLOCKCHAIN CLASS _____:

describe('Blockchain', () => {
  var Blockchain = require('../lib/Blockchain');
  var blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  })

  describe('initialize', () => {
    it('is an instance of blockchain', () => {
      expect(blockchain).toEqual(new Blockchain ())
    });
  });
});




// _____ TEMPLATES _____

// describe('', () => {
//   it('', () => {
//     expect().
//   });
// });

describe('Block', () => {
  var Block = require("../lib/Block");
  var block;
  var index;

  beforeEach(() => {
    block = new Block(index);
  });

  describe('initialize', () => {
    it('has basic property assigned to empty array', () => {
      expect(block.constructor._index).toEqual(index);
    });
  });

  describe('calculateHash', () => {
    it('calculates hash for the block', () => {
      expect(block.calculateHash()).toEqual(0)
    });
  });
});



// _____ TEMPLATES _____

// describe('', () => {
//   it('', () => {
//     expect().
//   });
// });

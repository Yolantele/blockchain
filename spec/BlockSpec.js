// _____BLOCK CLASS_____ :

describe('Block', () => {
  var Block = require("../lib/Block");
  var block;
  var index;
  var that;

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
      var hash = block.calculateHash()
      expect(hash).toEqual(jasmine.any(String));
    });
  });
});

describe('Block', function(){
  var Block = require("../lib/Block");
  var block;
  var index;

  beforeEach(function() {
    block = new Block(index);
  });

  describe('initialize', function() {
    it('has basic property assigned to empty array', function() {
      expect(block.constructor._index).toEqual(index);
    });
  });
});

describe('Block', function(){
  var block;

  beforeEach(function() {
    block = new Block();
  });

  describe('initialize', function() {
    it('should have an empty array property', function() {
      expect(block._property).toEqual([]);
    });
  });
});

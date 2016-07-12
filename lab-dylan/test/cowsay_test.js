const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');
describe('cow says', function(){
  it('should make the cow say', function() {
    expect(cowsay('mooo').eql(''));
  });

});

const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');
describe('cow says', function(){
  it('should make the cow say moo', function() {
    var e = ' ___ \n< moo >\n --- \n         \\    ^__^ \n          \\   (oo)\\_______ \n              (__) \\      )\\/\\ \n                   ||----W | \n                   ||     ||';

    expect(cowsay('moo')).to.equal(e);
  });

});

const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');
describe('cow says', function(){
  it('should make the cow say moo', function() {
    var expected = ' _____ \n < moo > \n ----- \n         \\    ^__^ \n          \\   (oo)\\_______ \n             (__) \\      )\\/\\ \n                  ||----W | \n                   ||     ||';
    var e = ' _____ \n< moo >\n ----- \n         \\    ^__^ \n          \\   (oo)\\_______ \n              (__) \\      )\\/\\ \n                   ||----W | \n                   ||     ||';
    console.log(e);
    expect(cowsay('moo').to.equal(e));
  });

});

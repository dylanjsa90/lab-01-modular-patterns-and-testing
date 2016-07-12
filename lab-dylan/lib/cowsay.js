module.exports = function(cowsay) {
  var header = ' _' + '_'.repeat(cowsay.length) + '_ ';
  var botBorder = ' -' + '-'.repeat(cowsay.length) + '- ';
  var says = '< ' + cowsay + ' >';
  var theCow = '\n' +
  '         \\    ^__^ \n' +
  '           \\   (oo)\\_______ \n' +
  '              (__) \\      )\\/\\ \n' +
  '                   ||----W | \n' +
  '                   ||     ||';

  var cow = '
  |
  |
  |
                      ';
  // cow.cowsays = cow.top + '\n' + cow.says + '\n' + cow.bot + '\n' + cow.one + '\n' + cow.two + '\n' + cow.thr + '\n' + cow.fou + '\n' + cow.fiv;
  // return cow;
};

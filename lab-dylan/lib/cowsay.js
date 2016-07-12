var cowsay = exports = module.exports = function(cowsays) {
  var topBorder = ' _' + '_'.repeat(cowsay.length) + '_ \n';
  var botBorder = ' -' + '-'.repeat(cowsay.length) + '- ';
  var says = '< ' + cowsays + ' >\n';
  const theCow = '\n' +
  '         \\    ^__^ \n' +
  '          \\   (oo)\\_______ \n' +
  '              (__) \\      )\\/\\ \n' +
  '                   ||----W | \n' +
  '                   ||     ||';

  return topBorder + says + botBorder + theCow;
};

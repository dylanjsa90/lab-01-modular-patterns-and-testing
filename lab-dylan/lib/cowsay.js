module.exports = function(cowsay) {
  var cow = {};
  var length = cowsay.length;
  cow.top = ' _';
  cow.bot = ' -';
  for (var i = 0; i < length; i++) {
    cow.top += '_';
    cow.bot += '-';
  }
  cow.top += '_ ';
  cow.says = '< ' + cowsay + ' >';
  cow.bot += '- ';
  cow.one = '         \\    ^__^';
  cow.two = '          \\   (oo)\\_______';
  cow.thr = '              (__) \\      )\\/\\';
  cow.fou = '                   ||----W |';
  cow.fiv = '                   ||     ||';

  console.log(cow.top);
  console.log(cow.says);
  console.log(cow.bot);
  console.log(cow.one);
  console.log(cow.two);
  console.log(cow.thr);
  console.log(cow.fou);
  console.log(cow.fiv);
  // cow.cowsays = cow.top + '\n' + cow.says + '\n' + cow.bot + '\n' + cow.one + '\n' + cow.two + '\n' + cow.thr + '\n' + cow.fou + '\n' + cow.fiv;
  // return cow;
};

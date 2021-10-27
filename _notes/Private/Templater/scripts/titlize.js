function titlize(title) {
  var i, frags = title.split('-');
  for (i=0; i<frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(' ');
}
module.exports = titlize;

function kebabCase(string) {
  return string.replace(/\s+/g, '-').toLowerCase();
}
module.exports = kebabCase;

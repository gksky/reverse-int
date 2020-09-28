module.exports = function reverse (n) {
  n = Math.abs(n);
  n = n.toString().split('').reverse().join('');
  return parseInt(n);
}

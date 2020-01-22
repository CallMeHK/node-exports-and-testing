// trying to stub over the readonly node export, this does not work
function f1() {
  return "f1";
}
function f2() {
  return f1();
}

module.exports = {
  f1,
  f2
};

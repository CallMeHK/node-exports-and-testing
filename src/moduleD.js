// stubbing over a class
class F {
  static f1() {
    return 'f1'
  }
  static f2() {
    return this.f1()
  }
}

module.exports = {
  F
}
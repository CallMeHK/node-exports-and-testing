// using a class with a way to new up the class
class FClass {
  static of() {
    return new FClass()
  }
  f1() {
    return 'f1'
  }
  f2() {
    return this.f1()
  }
}

const F = FClass.of()

module.exports = F
// Importing the module to stub
const moduleB = require('./moduleB')

const f2 = () => moduleB.f1()

module.exports = {
  f2
}
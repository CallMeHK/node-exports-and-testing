// importing the module into its self to stub
const moduleB = require('./moduleB')

const f1 = () => 'f1'
const f2 = () => moduleB.f1()

module.exports.f1 = f1
module.exports.f2 = f2

// cant use this syntax to export
// module.exports = {
//   f1,
//   f2
// }
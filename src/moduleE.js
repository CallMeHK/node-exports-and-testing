// using rewire, this does work where it would not work without
// you have to use functions or let to declare the variables you want to stub
let f1 = () => 'f1'
const f2 = () => f1()

module.exports = {
  f1,
  f2
}
// exporting an object and using the object references, this works
const f1 = () => 'f1'
const f2 = () => F.f1()

const F = {
  f1,
  f2
}

module.exports = F
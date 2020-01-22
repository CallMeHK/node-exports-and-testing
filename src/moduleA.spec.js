const moduleA = require('./moduleA')
const moduleB = require('./moduleB')

test('moduleA', () => {
  spyOn(moduleB, 'f1').and.returnValue('dsf')
  expect(moduleA.f2()).toBe('dsf')
})
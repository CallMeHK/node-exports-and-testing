const moduleB = require('./moduleB')

test('moduleB', () => {
  spyOn(moduleB,'f1').and.returnValue('wfe')
  expect(moduleB.f2()).toBe('wfe')
})
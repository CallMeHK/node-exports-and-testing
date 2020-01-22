const moduleC = require('./moduleC')

test('moduleC', () => {
  spyOn(moduleC,'f1').and.returnValue('wfe')
  expect(moduleC.f2()).toBe('f1')
})
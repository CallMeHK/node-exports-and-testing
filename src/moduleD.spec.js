const { F } = require('./moduleD')

test('moduleD', () => {
  spyOn(F, 'f1').and.returnValue('sdf')
  expect(F.f2()).toBe('sdf')
})
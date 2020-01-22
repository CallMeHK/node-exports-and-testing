const  F  = require('./moduleF')

test('moduleF', () => {
  spyOn(F, 'f1').and.returnValue('sdf')
  expect(F.f2()).toBe('sdf')
})
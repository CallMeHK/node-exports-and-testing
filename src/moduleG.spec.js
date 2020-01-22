const  F  = require('./moduleG')

test('moduleG', () => {
  spyOn(F, 'f1').and.returnValue('sdf')
  expect(F.f2()).toBe('sdf')
})
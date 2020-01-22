const rewire = require('rewire')
const moduleE = rewire('./moduleE')

test('moduleB', () => {
  let f1Stub = jest.fn(() => 'wfe')
  moduleE.__set__('f1',f1Stub)
  expect(moduleE.f2()).toBe('wfe')
  expect(f1Stub).toHaveBeenCalled()
})
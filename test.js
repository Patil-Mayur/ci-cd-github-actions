
const add = require('./helper')

function runTest () {
  console.log('Running Test')
  console.log('Test Ran Successfully')
}

runTest()

test('should add 2 numbers', () => {
  add(4, 5)

  expect(add(7, 6)).toBe(13)
})

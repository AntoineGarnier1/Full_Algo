import { When, Then } from '@cucumber/cucumber'
import { strict as assert } from 'assert'
import { fizzBuzz } from '../../src/fizzbuzz'

let result: string[]
let error: Error | null = null

/**
 * When I launch FizzBuzz with {int}
 * @param n - The number to apply FizzBuzz to
 */
When('I launch FizzBuzz with {int}', function (n: number) {
  try {
    result = fizzBuzz(n)
    error = null
  } catch (e) {
    error = e as Error
  }
})

/**
 * Then I should see the array {string}
 * @param expectedStr - The expected array as a string
 */
Then('I should see the array {string}', function (expectedStr: string) {
  const expected = JSON.parse(expectedStr)
  assert.deepEqual(result, expected)
})

/**
 * Then I should see an error {string}
 * @param message - The expected error message
 */
Then('I should see an error {string}', function (message: string) {
  assert(error)
  assert.equal(error.message, message)
})

#!/usr/bin/env node

import { fizzBuzz } from '../src/fizzbuzz'

const args = process.argv.slice(2)
const n = parseInt(args[0])

if (isNaN(n)) {
  console.error('Error: Please provide a valid number')
  process.exit(1)
}

try {
  const result = fizzBuzz(n)
  console.log(result.join('\n'))
} catch (error) {
  console.error(`Error: ${error}`)
  process.exit(1)
}

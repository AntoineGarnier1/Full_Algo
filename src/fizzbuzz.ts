/**
 * FizzBuzz function which returns an array of strings :
 * - "Fizz" if the number is divisible by 3
 * - "Buzz" if the number is divisible by 5
 * - "FizzBuzz" if the number is divisible by both 3 and 5
 * - The number itself if none of the above conditions are ok
 *
 * @param n - The number to apply FizzBuzz to
 * @returns An array of strings
 */
export function fizzBuzz(n: number): string[] {
  if (n < 1) {
    throw new Error('The number must be greater than 0')
  }

  return Array.from({ length: n }, (_, i) => i + 1).map((num) => {
    const isDivisibleBy3 = num % 3 === 0
    const isDivisibleBy5 = num % 5 === 0

    if (isDivisibleBy3 && isDivisibleBy5) return 'FizzBuzz'
    if (isDivisibleBy3) return 'Fizz'
    if (isDivisibleBy5) return 'Buzz'
    return num.toString()
  })
}

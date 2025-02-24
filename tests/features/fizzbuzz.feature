Feature: FizzBuzz
  In order to demonstrate my understanding of the problem
  As a developer
  I want to implement FizzBuzz

  Scenario: Normal numbers
    When I launch FizzBuzz with 2
    Then I should see the array '["1", "2"]'

  Scenario: Numbers divisible by 3
    When I launch FizzBuzz with 3
    Then I should see the array '["1", "2", "Fizz"]'

  Scenario: Numbers divisible by 5
    When I launch FizzBuzz with 5
    Then I should see the array '["1", "2", "Fizz", "4", "Buzz"]'

  Scenario: Numbers divisible by 3 and 5
    When I launch FizzBuzz with 15
    Then I should see the array '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]'

  Scenario: Negative numbers
    When I launch FizzBuzz with -1
    Then I should see an error "The number must be greater than 0"

@TopUp
Feature: TopUp

  Background:
    Given User is on Login Page
    And User input phone number "811123321" on phone number field
    And User input password "Pass@123" on password field
    And User click Sign In button on Login Page
    And User is on Home Page
    And User tap Top Up Button on Home Page

  @Valid
  Scenario: User top up valid amount with Alfamart Payment Method
    Given User is on Top Up page
    When  User input nominal "1000" on top up nominal text field on Top Up Page
    And  User tap Top Up button on Top Up Page
    And  User tap Change button on Payment Method Pop Up
    And  User tap Alfamart on Payment Method List
    And  User tap Pay Button on Payment Method Pop Up
    Then  User is on Top Up Result Page

  Scenario: User top up valid amount with Bank Transfer Payment Method
    Given User is on Top Up page
    When  User input nominal "10000" on top up nominal text field on Top Up Page
    And  User tap Top Up button on Top Up Page
    And  User tap Change button on Payment Method Pop Up
    And  User tap Bank Transfer on Payment Method List
    And  User tap Pay Button on Payment Method Pop Up
    Then  User is on Top Up Result Page

  Scenario: User top up valid amount with BRI Debit Card Payment Method
    Given User is on Top Up page
    When  User input nominal "10000" on top up nominal text field on Top Up Page
    And  User tap Top Up button on Top Up Page
    And  User tap Change button on Payment Method Pop Up
    And  User tap BRI Debit Card on Payment Method List
    And  User tap Pay Button on Payment Method Pop Up
    Then  User is on Top Up Result Page

  @Invalid
  Scenario Outline: User top up with invalid amount
    Given User is on Top Up page
    When  User input nominal "<nominal>" on top up nominal text field on Top Up Page
    Then  User see error message "<errorMessage>" on Top Up Page
    Examples:
      |nominal    |errorMessage                                     |
      |999        |Available Transaction only Rp 1.000 to 1.000.000!|
      |1000001    |Available Transaction only Rp 1.000 to 1.000.000!|
      |qwertyuiop |Input number only!                               |
      |!@#$%^&*,.;|Input number only!                               |
      |qwerty12345|Input number only!                               |
      |!@#$1234,.;|Input number only!                               |
      |🙃🙃🙃🙃🙃🙃 |Input number only!                               |
      |           |Nominal cannot be empty!                         |

  @ExceedLimitBalance
  Scenario: User top up valid amount exceed limit balance with BRI Debit Card Payment Method
    Given User is on Top Up page
    When  User input nominal "1000000" on top up nominal text field on Top Up Page
    And  User tap Top Up button on Top Up Page
    And  User tap Pay Button on Payment Method Pop Up
    And  User is on Top Up Result Page
    Then User see error message "Your balance already reach maximum amount!" on Failed Top Up Result Page

  @TopUpButton
  Scenario: User tap Top Up Button with valid amount format
    Given User is on Top Up page
    When  User input nominal "1000" on top up nominal text field on Top Up Page
    When  User tap Top Up button on Top Up Page
    Then  User see Payment Method Pop Up on Top Up Page

  @BackButton
  Scenario: User validate the functional of Back Button on Top Up Page
    Given User is on Top Up page
    When  User tap Back Button on Top Up Page
    Then  User is on Home Page

  @PaymentMethod
  Scenario: User validate the functional of Close Button on Payment Method Pop Up
    Given User is on Top Up page
    When  User input nominal "1000" on top up nominal text field on Top Up Page
    When  User tap Top Up button on Top Up Page
    When  User see Payment Method Pop Up on Top Up Page
    When  User tap Close button on Payment Method Pop Up
    Then  User is on Top Up page

  Scenario: User validate the functional of Pay Button on Payment Method Pop Up
    Given User is on Top Up page
    When  User input nominal "1000" on top up nominal text field on Top Up Page
    When  User tap Top Up button on Top Up Page
    When  User see Payment Method Pop Up on Top Up Page
    When  User tap Pay Button on Payment Method Pop Up
    Then  User is on Top Up Result Page

  Scenario: User validate the functional of Change Button on Payment Method Pop Up
    Given User is on Top Up page
    When  User input nominal "1000" on top up nominal text field on Top Up Page
    When  User tap Top Up button on Top Up Page
    When  User see Payment Method Pop Up on Top Up Page
    When  User tap Change button on Payment Method Pop Up
    Then  User see all Payment Method on Payment Method Pop Up

  Scenario: User validate the top up amount on Payment Method Pop Up
    Given User is on Top Up page
    When  User input nominal "1000" on top up nominal text field on Top Up Page
    When  User tap Top Up button on Top Up Page
    Then  User see top up amount is "1.000" on Payment Method Pop Up
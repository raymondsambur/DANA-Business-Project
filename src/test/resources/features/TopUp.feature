#@TopUp
#Feature: TopUp
#
#  Background:
#    Given User is on Login Page
#    And User input phone number "8123456789" on phone number field
#    And User input password "Password@123" on password field
#    And User click Sign In button on Login Page
#    And User is on Home Page
#    And User tap Top Up Button on Home Page
#
#  @Valid
#  Scenario Outline: User top up with valid amount
#    Given User is on Top Up page
#    When  User input nominal "<nominal>" on top up nominal text field on Top Up Page
#    When  User tap Pay button on Top Up Page
#    Then  User is on Success Payment Result Page
#    Examples:
#      |nominal|
#      |1000   |
#      |100000 |
#      |1000000|
#
#  @Invalid
#  Scenario Outline: User top up with invalid amount
#    Given User is on Top Up page
#    When  User input nominal "<nominal>" on top up nominal text field on Top Up Page
#    When  User tap Pay button on Top Up Page
#    Then  User is on Failed Payment Result Page
#    Examples:
#      |nominal|
#      |999    |
#      |1000001|
#
#  @InvalidFormat
#  Scenario Outline: User top up with invalid format amount
#    Given User is on Top Up page
#    When  User input nominal "<nominal>" on top up nominal text field on Top Up Page
#    When  User tap Pay button on Top Up Page
#    Then  User see error message "Input Number Only!" on Top Up Page
#    Examples:
#      |nominal    |
#      |qwertyuiop |
#      |!@#$%^&*,.;|
#      |qwerty12345|
#      |!@#$1234,.;|
#      |🙃🙃🙃🙃🙃🙃 |
#
#  @Empty
#  Scenario : User top up with empty amount
#    Given User is on Top Up page
#    When  User input nominal " " on top up nominal text field on Top Up Page
#    When  User tap Pay button on Top Up Page
#    Then  User see error message "Amount Field Cannot be Empty!" on Top Up Page
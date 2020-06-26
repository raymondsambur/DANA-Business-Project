@TopUpResult
  Feature: TopUpResult

    Background:
      Given User is on Login Page
      And User input phone number "811123321" on phone number field
      And User input password "Pass@123" on password field
      And User click Sign In button on Login Page
      And User is on Home Page
      And User tap Top Up Button on Home Page

  @BackButtonTopUpResult
  Scenario Outline: User validate the functional of Back to Home Button on Top Up Result Page
    Given User is on Top Up page
    When  User input nominal "<nominal>" on top up nominal text field on Top Up Page
    And   User tap Top Up button on Top Up Page
    And   User tap Pay Button on Payment Method Pop Up
    And   User is on Top Up Result Page
    And   User tap Back to Home Button on Top Up Result Page
    Then  User is on Home Page
    Examples:
    |nominal|
    |1000   |
    |1000000|

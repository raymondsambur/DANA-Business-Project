@ForgotPassword
Feature: Forgot Password

  Background:
    Given User is on Login Page
    And User click Forgot Password button

  @EmailFieldForgotPassword
    @SmokeTest
    Scenario: FP-01-01 : User input valid email
      Given User is on forgot password page
      When User input email "boboy@gmail.com" on Email Field
      Then There's no error message

    @NegativeEmailField
    Scenario Outline: FP-01-02 - FP-01-07 : User input invalid email
      Given User is on forgot password page
      When User input email "<email>" on Email Field
      Then User see error message "Wrong Email Format! Example : email123@gmail.com!"
      Examples:
        |         email         |
        | boboy😭@gmail.com     |
        | @gmail.com            |
        | boboygmail.com        |
        | boboy@.com            |
        | boboy@gmail.          |
        | boboy @gmail.com      |

    Scenario: FP-01-08 : User Input empty email
      Given User is on forgot password page
      When User input email "" on Email Field
      Then User see error message "Email cannot be empty!"

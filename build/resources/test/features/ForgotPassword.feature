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
      Then User see error message on field "Wrong Email Format! Example : email123@gmail.com"
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
      Then User see error message on field "Email cannot be empty!"

  @ButtonSendForgotPassword
    @SmokeTest
    Scenario: FP-02-01 : User input registered email
      Given User is on forgot password page
      When User input email "boboy@gmail.com" on Email Field
      And User click send button
      Then User is on change password page

    @NegativeButtonSend
    Scenario: FP-02-02 : User input not registered email
      Given User is on forgot password page
      When User input email "yeyeye@gmail.com" on Email Field
      And User click send button
      Then User see error message on bottom "Email doesn't exist!"

    Scenario Outline: FP-02-03 - FP-02-08 : User input invalid email
      Given User is on forgot password page
      When User input email "<email>" on Email Field
      Then User can not click send button
      Examples:
        |         email         |
        | boboy😭@gmail.com     |
        | @gmail.com            |
        | boboygmail.com        |
        | boboy@.com            |
        | boboy@gmail.          |
        | boboy @gmail.com      |

    Scenario: FP-02-09 : User Input empty email
      Given User is on forgot password page
      When User input email "" on Email Field
      Then User can not click send button

    @BackButtonForgotPassword
    Scenario: FP-03-01 : User Back to Login Page by click Back Arrow Button
      Given User is on forgot password page
      When User Click back button on Forgot Password page
      Then User is on Login Page



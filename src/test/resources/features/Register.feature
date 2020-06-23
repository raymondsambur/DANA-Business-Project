@Register
Feature: Register

  Background:
    Given User is on Login Page
    And User click Register button

# Register Button
  @RegButtonPositive
  Scenario: 1. Register new user with Valid name, Valid email, Valid Phone number, Valid Password, Valid Confirmation
    Given User is on DANA bussiness Register Page
    When User input name "Agung" on name text field
    And User input email "emaildummy@gmail.com" on email text field
    And User input phone number "81212341234" on phone number text field
    And User input Password "P@ssw0rd" on password text field
    And User input Password "P@ssw0rd" on password confirmation text field
    And User Tap Register button
    Then User directed to the Login Page

  @RegButtonNegativeBecauseAlreadyRegistered
  Scenario: 2. Register new user with already registered email
    Given User is on DANA bussiness Register Page
    When User input name "Agung" on name text field
    And User input email "emaildummy@gmail.com" on email text field
    And User input phone number "81212341235" on phone number text field
    And User input Password "P@ssw0rd" on password text field
    And User input Password "P@ssw0rd" on password confirmation text field
    And User Tap Register button
    Then User see register error message "Email already exist!"

  Scenario: 3. Register new user with already registered phone number
    Given User is on DANA bussiness Register Page
    When User input name "Agung" on name text field
    And User input email "emaildummy2@gmail.com" on email text field
    And User input phone number "81212341234" on phone number text field
    And User input Password "P@ssw0rd" on password text field
    And User input Password "P@ssw0rd" on password confirmation text field
    And User Tap Register button
    Then User see register error message "Phone Number already exist!"

  @RegButtonNegativeOnly
  Scenario: 2. Register new user with Valid name, Valid email, Valid Phone number, Invalid Password (no symbol), Valid Confirmation
    Given User is on DANA bussiness Register Page
    When User input name "Agung" on name text field
    And User input email "emaildummy@gmail.com" on email text field
    And User input phone number "81212341234" on phone number text field
    And User input Password "Passw0rd" on password text field
    And User input Password "Passw0rd" on password confirmation text field
    Then User see Register button is unclickable

  @RegButtonNegativeWithScenarioOutline
  Scenario Outline: 2-x Register new user with at least one field is invalid
    Given User is on DANA bussiness Register Page
    When User input name "<name>" on name text field
    And User input email "<email>" on email text field
    And User input phone number "<phone>" on phone number text field
    And User input Password "<password>" on password text field
    And User input Password "<confirmation>" on password confirmation text field
    Then User see Register button is unclickable
    Examples:
      | name | email | phone | password | confirmation |


# Name Field
  @NameFieldPositive
  Scenario: 1. User input valid name format on name text field
    Given User is on DANA bussiness Register Page
    When User input name "Agung" on name text field
    Then User see no error message

  @NameFieldNegativeEmpty
  Scenario: 1. User didnt input name on name text field
    Given User is on DANA bussiness Register Page
    When User input name "" on name text field
    Then User see name field error message "Name Field cannot be empty!"


# Email Field
  @EmailFieldPositive
  Scenario: 1. User input valid email format on email text field
    Given User is on DANA bussiness Register Page
    When User input email "emaildummy@gmail.com" on email text field
    Then User see no error message

  @EmailFieldNegativeEmpty
  Scenario: User input didnt input email on email text field
    Given User is on DANA bussiness Register Page
    When User input email "" on email text field
    Then User see email field error message "Email Field cannot be empty"

# Phone Field
  @PhoneFieldPositive
  Scenario: 1. User input valid Phone number format on Phone number text field
    Given User is on DANA bussiness Register Page
    When User input phone number "81212341234" on phone number text field
    Then User see no error message

  @PhoneFieldNegativeEmpty
  Scenario: User didnt input Phone number on Phone number text field
    Given User is on DANA bussiness Register Page
    When User input phone number "81212341234" on phone number text field
    Then User see phone field error message "Phone Number Field cannot be empty!"

# Password Field
  @PasswordFieldPositive
  Scenario: 1. User input valid password format on password text field
    Given User is on DANA bussiness Register Page
    When User input Password "P@ssw0rd" on password text field
    Then User see no error message

  @PasswordFieldNegativeEmpty
  Scenario: User didnt input password on password text field
    Given User is on DANA bussiness Register Page
    When User input Password "" on password text field
    Then User see password field error message "Password Field cannot be empty!"

# Confirmation Field
  @ConfirmationPositive
  Scenario: 1. User input valid password format on confirmation password text field
    Given User is on DANA bussiness Register Page
    When User input Password "P@ssw0rd" on password text field
    And User input Password "P@ssw0rd" on password confirmation text field
    Then User see no error message

  @ConfirmationNegativeEmpty
  Scenario: 1. User didnt re-type password confirmation password text field
    Given User is on DANA bussiness Register Page
    When User input Password "P@ssw0rd" on password text field
    And User input Password "" on password confirmation text field
    Then User see confirmaion field error message "Please Re-enter your password!"

# Back Button
  @BackButton
  Scenario: Verify Back Button functionality
    Given User is on DANA bussiness Register Page
    When User tap Back button on Register Page
    Then User is on Login Page
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
      | name                            | email                  | phone            | password              | confirmation |
      | Agung                           | emaildummy@gmail.com   | 81212341234      | P@ssw0rd              | P@ssw0rd     |
      | Agung                           | emaildummy@gmail.com   | 81212341234      | Passw0rd              | Passw0rd     |
      | Agung                           | emaildummy@gmail.com   | 081212341234     | P@ssw0rd              | P@ssw0rd     |
      | Agung                           | emaildummy@gmail.com   | 6281212341234    | P@SSW0RD              | P@SSW0RD     |
      | Agung                           | emaildummy@gmail       | 81212341234      | P@ssw0rd              | P@ssw0rd     |
      | Agung                           | emaildummy@.com        | 81212341234      | PASSW0RD              | PASSW0RD     |
      | Agung                           | emaildummy@            | 81212341234      | P@ssw0rd              | P@ssw0rd     |
      | Agung                           | emaildummygmail.com    | 0812123412345678 | p@ssw0rd              | p@ssw0rd     |
      | Agung1&😭                       | emaildummy@gmail.com   | 81212341234      | P@ssw0rd              | P@ssw0rd     |
      | Agung2                          | emaildummy@gmail.com   | 81212341234      | passw0rd              | passw0rd     |
      | 461_1176                        | emaildummy@gmail.com   | +6281212341234   | P@ssw0rd              | P@ssw0rd     |
      | 😭agung                         | emaildummy@gmail.com   | 628123           | 8@553020              | 8@553020     |
      | agung12345678901234567890123456 | emaildummygmail        | 81212341234      | P@ssw0rd              | P@ssw0rd     |
      | agungaaaaaaaaaaaaaaaaaaaaaaaaaa | emaildummy.com         | 81212341234      | 12345678              | 12345678     |
      | !!!!!!!!!!!!!!!!!!!!12345678901 | emaildummy             | 081212341234     | P@ssw0rd              | P@ssw0rd     |
      | Agung1                          | @gmail.com             | 6281212341234    | P@ssword              | P@ssword     |
      | Agung                           | emaildummy@gmail.com   | 81212341234      | P@ssw0rd              | P@ssw0rd1    |
      | Agung                           | emaildummy@gmail.com   | 81212341234      | Password              | P@ssw0rd2    |
      | Agung                           | emaildummy@gmail.com   | 81212341234      | P@ssw0rd              | P@ssw0rd3    |
      | Agung                           | emaildummy@gmail.com   | 0812123412345678 | P@SSWORD              | P@ssw0rd4    |
      | Agung                           | @gmail                 | 81212341234      | P@ssw0rd              | P@ssw0rd5    |
      | Agung                           | @.com                  | 81212341234      | PASSWORD              | P@ssw0rd6    |
      | Agung                           | @                      | +6281212341234   | P@ssw0rd              | P@ssw0rd7    |
      | Agung                           | gmail.com              | 628123           | p@ssword              | P@ssw0rd8    |
      | Agung1&😭                       | emaildummy@gmail.com   | 81212341234      | P@ssw0rd              | P@ssw0rd9    |
      | Agung2                          | emaildummy@gmail.com   | 81212341234      | password              | P@ssw0rd10   |
      | 461_1176                        | emaildummy@gmail.com   | 081212341234     | P@ssw0rd              | P@ssw0rd11   |
      | 😭agung                         | emaildummy@gmail.com   | 6281212341234    | @@@@@@@@              | P@ssw0rd12   |
      | agung12345678901234567890123456 | gmail                  | 81212341234      | P@ssw0rd              | P@ssw0rd13   |
      | agungaaaaaaaaaaaaaaaaaaaaaaaaaa | .com                   | 81212341234      | P@ssw0r               | P@ssw0rd14   |
      | !!!!!!!!!!!!!!!!!!!!12345678901 | emailsalah@yahoo.co.id | 81212341234      | P@ssw0rd              | P@ssw0rd15   |
      | Agung00                         | emaildummy@gmail.com   | 0812123412345678 | P@ssw0rd1111111111111 | P@ssw0rd16   |


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

  @NameFieldNegativeWithScenarioOutline
  Scenario Outline: 1. User input invalid name on name text field
    Given User is on DANA bussiness Register Page
    When User input name "<namefield>" on name text field
    Then User see name field error message "Name field should alphabet only with 30 characters maximum!"
    Examples:
      | namefield                       |
      | Agung                           |
      | Agung2                          |
      | 461_1176                        |
      | 😭agung                         |
      | agung12345678901234567890123456 |
      | agungaaaaaaaaaaaaaaaaaaaaaaaaaa |
      | !!!!!!!!!!!!!!!!!!!!12345678901 |
      | 😭😭😭                          |
      | 1234                            |
      | @@@@                            |
      | 😭1234                          |
      | 😭@@@                           |



# Email Field
  @EmailFieldPositive
  Scenario: 1. User input valid email format on email text field
    Given User is on DANA bussiness Register Page
    When User input email "emaildummy@gmail.com" on email text field
    Then User see no error message

  @EmailFieldNegativeEmpty
  Scenario: User didnt input email on email text field
    Given User is on DANA bussiness Register Page
    When User input email "" on email text field
    Then User see email field error message "Email Field cannot be empty"

  @EmailFieldNegativeWithScenarioOutline
  Scenario Outline: User input invalid email on email text field
    Given User is on DANA bussiness Register Page
    When User input email "<emailfield>" on email text field
    Then User see email field error message "Wrong Email Format! Example : email123@gmail.com"
    Examples:
      | emailfield           |
      | emaildummy@gmail.com |
      | emaildummy@gmail     |
      | emaildummy@.com      |
      | emaildummy@          |
      | emaildummygmail.com  |
      | emaildummygmail      |
      | emaildummy.com       |
      | emaildummy           |
      | @gmail.com           |
      | @gmail               |
      | @.com                |
      | @                    |
      | gmail.com            |
      | gmail                |
      | .com                 |


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

  @PhoneFieldNegativeWithScenarioOutline
  Scenario Outline: User input invalid Phone number on Phone number text field
    Given User is on DANA bussiness Register Page
    When User input phone number "<phonefield>" on phone number text field
    Then User see phone field error message "Wrong Phone Number format! All Numbers and 9 - 12 digits!"
    Examples:
      | phonefield         |
      | 81212341234        |
      | 081212341234       |
      | 6281212341234      |
      | 8121234123456780   |
      | +6281212341234     |
      | 8121234abcd        |
      | 8121234@@@@        |
      | 8121234😭😭😭😭    |
      | abcdefghijkl       |
      | 😭😭😭😭😭😭😭😭   |
      | 81212341           |
      | @@@@@@@@@          |
      | @@@@@😭😭😭😭      |
      | abcde😭😭😭😭      |
      | 8121234567😭😭😭😭 |

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

  @PasswordFieldNegativeWithScenarioOutline
  Scenario Outline: User input invalid password on password text field
    Given User is on DANA bussiness Register Page
    When User input Password "<passwordfield>" on password text field
    Then User see password field error message "Password should be 8 digits and contains : a-z, A-Z, 1-9, Symbol!"
    Examples:
      | passwordfield         |
      | P@ssw0rd              |
      | Passw0rd              |
      | P@SSW0RD              |
      | PASSW0RD              |
      | p@ssw0rd              |
      | passw0rd              |
      | 8@553020              |
      | 12345678              |
      | P@ssword              |
      | Password              |
      | P@SSWORD              |
      | PASSWORD              |
      | p@ssword              |
      | password              |
      | @@@@@@@@              |
      | P@ssw0r               |
      | P@ssw0rd1111111111111 |


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

  @ConfirmationNegativeOnly
  Scenario: 1. User didnt re-type match password confirmation password text field
    Given User is on DANA bussiness Register Page
    When User input Password "P@ssw0rd" on password text field
    And User input Password "Password" on password confirmation text field
    Then User see confirmaion field error message "Password doesn't match!"

# Back Button
  @BackButton
  Scenario: Verify Back Button functionality
    Given User is on DANA bussiness Register Page
    When User tap Back button on Register Page
    Then User is on Login Page
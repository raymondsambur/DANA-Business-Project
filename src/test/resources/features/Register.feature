@Register
  Feature: Register

# Register Button
  @Valid
  Scenario: 1. Register new user with Valid name, Valid email, Valid Phone number, Valid Password, Valid Confirmation
    Given User is on DANA bussiness Register Page
    When User input name "Agung" on name text field
    And User input email "emaildummy@gmail.com" on name text field
    And User input phone number "81212341234" on phone number text field
    And User input Password "P@ssw0rd" on password text field
    And User input Password "P@ssw0rd" on password confirmation text field
    And User Tap Register button
    Then User directed to the Login Page
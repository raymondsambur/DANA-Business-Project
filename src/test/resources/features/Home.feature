@Home
Feature: Home

  Background:
    Given User is on Login Page
    And User input phone number "8123456789" on phone number field
    And User input password "Password@123" on password field
    And User click Sign In button on Login Page

  Scenario: Validate DANA Balance on Home Page
    Given User is on Home Page
    When  User see DANA Balance on Home Page
    Then  User validate DANA Balance with current DANA Balance on Home Page

#  Scenario: Validate DANA Balance on Home Page after make a purchase
#    Given User is on Home Page
#    When  User see DANA Balance on Home Page
#    Then  User validate DANA Balance with current DANA Balance on Home Page

#  Scenario: Validate DANA Balance on Home Page
#    Given User is on Home Page
#    When  User see DANA Balance on Home Page
#    Then  User validate DANA Balance with current DANA Balance on Home Page

  Scenario: Validate the functional of Top Up Button on Home Page
    Given User is on Home Page
    When  User click Top Up Button on Home Page
    Then  User is on Top Up page

  Scenario: Validate the functional of Transaction Button on Home Page
    Given User is on Home Page
    When  User click Transaction Button on Home Page
    Then  User is on Transaction page

  Scenario: Validate the functional of Account Button on Home Page
    Given User is on Home Page
    When  User click Account Button on Home Page
    Then  User is on My Account page

  Scenario: Validate the functional of Transfer Button on Home Page
    Given User is on Home Page
    When  User click Transfer Button on Home Page
    Then  User see message "This Feature is Coming Soon!"

  Scenario: Validate the functional of QR Scan Button on Home Page
    Given User is on Home Page
    When  User click QR Scan Button on Home Page
    Then  User is on QR Scan page

  Scenario: Validate the functional of Notification Button on Home Page
    Given User is on Home Page
    When  User click Notification Button on Home Page
    Then  User see message "This Feature is Coming Soon!"

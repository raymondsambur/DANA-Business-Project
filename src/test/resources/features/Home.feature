@Home
Feature: Home

  Background:
    Given User is on Login Page
    And User input phone number "811123123" on phone number field
    And User input password "Pass@123" on password field
    And User click Sign In button on Login Page

  @ValidateBalance
  Scenario: Validate DANA Balance on Home Page
    Given User is on Home Page
    When  User see DANA Balance on Home Page
    Then  User validate DANA Balance with current DANA Balance on Home Page

#  Scenario: Validate DANA Balance on Home Page after make a purchase
#    Given User is on Home Page
#    When  User see DANA Balance on Home Page
#    Then  User validate DANA Balance with current DANA Balance on Home Page

#  Scenario: Validate DANA Balance on Home Page after top up
#    Given User is on Home Page
#    When  User see DANA Balance on Home Page
#    Then  User validate DANA Balance with current DANA Balance on Home Page

  @ValidateTopUpButton
  Scenario: Validate the functional of Top Up Button on Home Page
    Given User is on Home Page
    When  User tap Top Up Button on Home Page
    Then  User is on Top Up page

  @ValidateTransactionButton
  Scenario: Validate the functional of Transaction Button on Home Page
    Given User is on Home Page
    When  User tap Transaction Button on Home Page
    Then  User is on Transaction page

  @ValidateAccountButton
  Scenario: Validate the functional of Account Button on Home Page
    Given User is on Home Page
    When  User tap Account Button on Home Page
    Then  User is on My Account page

  @ValidateTransferButton
  Scenario: Validate the functional of Transfer Button on Home Page
    Given User is on Home Page
    When  User tap Transfer Button on Home Page
    Then  User see message "Coming Soon!"

  @ValidateQRScanButton
  Scenario: Validate the functional of QR Scan Button on Home Page
    Given User is on Home Page
    When  User tap QR Scan Button on Home Page
    Then  User is on QR Scan page

#  Scenario: Validate the functional of Notification Button on Home Page
#    Given User is on Home Page
#    When  User tap Notification Button on Home Page
#    Then  User see message "Coming Soon!"

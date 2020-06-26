@Transaction

Feature: Transaction

  Background:
    Given User is on Login Page
    And User input phone number "81394577665" on phone number field
    And User input password "P@ssw0rd" on password field
    And User click Sign In button on Login Page
    And User is on Home Page
    And User tap QR Scan Button on Home Page
    And User is on QR Scan page

  Scenario Outline: Testing success Transaction
    Given User tap Gallery button on QR Scan page
    When User tap "<Folder>" button on QR Scan page
    And User tap "<Status>" image on QR Scan page
    And User is on Payment Confirmation page
    And User tap Make Purchases button on Payment Confirmation page
    And User is on Transaction Detail page
    And User tap Confirm Payment button on Transaction Detail page
    And User tap Pay in pop up on Transaction Detail page
    And User is on Transaction Result page
    And User see transaction status "<Status>" on Transaction Result Page
    And User tap Back to Home button on Transaction Result page
    Then User is on Home Page
    Examples:
      | Folder   | Status  |
      | Download | Success |
      | Download | Refund  |
      | Download | Failed  |

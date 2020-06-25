@TopUpResult
  Feature: TopUpResult

    Background:
      Given User is on Login Page
      And User input phone number "81394577665" on phone number field
      And User input password "P@ssw0rd" on password field
      And User click Sign In button on Login Page
      And User is on Home Page
      And User tap Top Up Button on Home Page

  @SuccessResult
  Scenario: User validate the functional of Back to Home Button on Success Result Page
    Given User is on Top Up page
    When  User input nominal "1000" on top up nominal text field on Top Up Page
    And   User tap Pay button on Top Up Page
    And   User is on Success Payment Result Page
    And   User tap Back to Home Button on Success Payment Result Page
    Then  User is on Home Page

  @FailedResult
  Scenario: User validate the functional of Back to Home Button on Failed Result Page
    Given User is on Top Up page
    When  User input nominal "999" on top up nominal text field on Top Up Page
    And   User tap Pay button on Top Up Page
    And   User is on Failed Payment Result Page
    And   User tap Back to Home Button on Failed Payment Result Page
    Then  User is on Home Page
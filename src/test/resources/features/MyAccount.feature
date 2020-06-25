@MyAccount
Feature: My Account

  Background:
    Given User is on Login Page
    And User input phone number "81394577665" on phone number field
    And User input password "P@ssw0rd" on password field
    And User click Sign In button on Login Page
    And User is on Home Page
    And User tap My Account button on Home page

  @VerifyChangePasswordButtonFunction
  Scenario: Go to Change Password page by tapping Change Password button
    Given User is on My Account page
    When User tap Change Password button on My Account page
    Then User see message "Coming soon!" on My Account page

  @VerifyBalanceButtonFunction
  Scenario: Go to Top Up page by tapping Balance button
    Given User is on My Account page
    When User tap Balance button on My Account page
    Then User is on Top Up page

  @VerifyBackButtonFunction
  Scenario: Go to Home page by tapping Back button
    Given User is on My Account page
    When User tap Back button on My Account page
    Then User is on Home Page

  @VerifyLogoutYesButtonFunction
  Scenario: Go to Login page by tapping Logout button
    Given User is on My Account page
    When User tap Logout button on My Account page
    And User tap yes on pop up message
    Then User is on Login Page

  @VerifyLogoutNoButtonFunction
  Scenario: Cancel logout from My Account page
    Given User is on My Account page
    When User tap Logout button on My Account page
    And User tap no on pop up message
    Then User is on My Account page

  @VerifyUserPhoneNumber
  Scenario: Check if Phone Number shown is the same with user Phone Number
    Given User is on My Account page
    When User see Phone Number on My Account page
    Then User validate Phone Number with registered Phone Number "081394577665"

  @VerifyUserName
  Scenario: Check if Name shown is the same with user Name
    Given User is on My Account page
    When User see Name on My Account page
    Then User validate Name with registered Name "Dananjoyo Helyudanto"

  @VerifyEmail
  Scenario: Check if Email shown is the same with user Email
    Given User is on My Account page
    When User see Email on My Account page
    Then User validate Email with registered Email "dananjoyoh@gmail.com"

  @VerifyBalance
  Scenario: Check if Balance shown is the same with user Balance
    Given User is on My Account page
    When User see Balance on My Account page
    Then User validate Balance with user current Balance "Rp.133.000"

  @VerifySettingButtonFunctionality
  Scenario: Check setting button for incoming feature
    Given User is on My Account page
    When User tap setting button on My Account page
    Then User see message "Coming soon!" on My Account page

  @VerifyChangeProfileButtonFunctionality
  Scenario: Check Change Profile button for incoming feature
    Given User is on My Account page
    When User tap Change Profile button on My Account page
    Then User see message "Coming soon!" on My Account page

  @VerifyChangePINButtonFunctionality
  Scenario: Check Change PIN button for incoming feature
    Given User is on My Account page
    When User tap Change PIN button on My Account page
    Then User see message "Coming soon!" on My Account page
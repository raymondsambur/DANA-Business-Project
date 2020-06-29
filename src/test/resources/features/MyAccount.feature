@MyAccount
Feature: My Account

  Background:
    Given User is on Login Page
    And User input phone number "81394577665" on phone number field
    And User input password "P@ssw0rd" on password field
    And User click Sign In button on Login Page
    And User is on Home Page
    And User tap My Account button on Home page

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

  @VerifyUserData
  Scenario Outline: Check User Data
    Given User is on My Account page
    When User see "<Data Display>" on My Account page
    Then User validate "<Data Display>" with user "<Data>"
    Examples:
      | Data Display | Data                 |
      | Phone Number | 081394577665         |
      | Name         | Dananjoyo Helyudanto |
      | Email        | dananjoyoh@gmail.com |
      | Balance      | Rp.454.000           |

  @VerifyComingSoonFeature
  Scenario Outline: Check Coming Soon Pop Up Message
    Given User is on My Account page
    When User tap "<Feature>" button on My Account page
    Then User see message "Coming soon!" on My Account page
    Examples:
      | Feature         |
      | Change Password |
      | Change PIN      |
      | Change Profile  |
      | Setting         |

#  @CheckBalanceAfterTopUp
#  Scenario: Check Balance After User Made Top Up
#    Given User is on My Account page
#    When User see "Balance" on My Account page
#    And User tap Back button on My Account page
#    And User is on Home Page
#    And User tap Top Up Button on Home Page
#    And User is on Top Up page
#    And User input nominal "10000" on top up nominal text field on Top Up Page
#    And User tap Top Up button on Top Up Page
#    And User tap Pay Button on Payment Method Pop Up
#    And User is on "Success" Top Up Result Page
#    And User tap Back to Home Button on Top Up Result Page
#    And User is on Home Page
#    And User tap My Account button on Home page
#    And User is on My Account page
#    Then User validate "Balance" with user "Rp.174.000"

@MyAccount
  Feature: My Account

    Background:
      Given User is on Login Page
      And User input phone number "8123456789" on phone number field
      And User input password "Password@123" on password field
      And User click Sign In button on Login Page
      And User is on Home Page
      And User tap My Account button on Home page

    @VerifyChangePasswordButtonFunction
    Scenario:  Go to Change Password page by tapping Change Password button
      Given User is on My Account page
      When User tap Change Password button on My Account page
      Then User is on Change Password page

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

    @VerifyLogoutButtonFunction
    Scenario: Go to Login page by tapping Logout button
      Given User is on My Account page
      When User tap Logout button on My Account page
      Then User is on Login Page

    @VerifyUserPhoneNumber
    Scenario: Check if Phone Number shown is the same with user Phone Number
      Given User is on My Account page
      When User see Phone Number on My Account page
      Then User validate Phone Number with registered Phone Number "8123456789"

    @VerifyUserName
    Scenario: Check if Name shown is the same with user Name
      Given User is on My Account page
      When User see Name on My Account page
      Then User validate Name with registered Name "Name"

    @VerifyEmail
    Scenario: Check if Email shown is the same with user Email
      Given User is on My Account page
      When User see Email on My Account page
      Then User validate Email with registered Email "email@mail.com"

    @VerifyBalance
    Scenario: Check if Balance shown is the same with user Balance
      Given User is on My Account page
      When User see Balance on My Account page
      Then User validate Balance with user current Balance "0000000"
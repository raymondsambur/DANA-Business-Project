@Login
Feature: Login

  #BUTTON
  @Valid @aaaa
  Scenario: 1. user login with correct phone number and password
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    And User input password "P@ssw0rd" on password field
    And User click Sign In button on Login Page
    Then User directed to Home Page

  @Negative
  Scenario: 2. user login with correct phone number but incorrect password
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    And User input password "P@ssword123" on password field
    And User click Sign In button on Login Page
    Then User see pop up message "Incorrect Phone Number or Password. Please input your correct Phone Number and Password"

  Scenario: 3. user login with incorrect phone number but correct password
    Given User is on Login Page
    When User input phone number "81394577000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User click Sign In button on Login Page
    Then User see pop up message "Incorrect Phone Number or Password. Please input your correct Phone Number and Password"

  Scenario: 4. user login with incorrect phone number and password
    Given User is on Login Page
    When User input phone number "81394577000" on phone number field
    And User input password "P@ssword123" on password field
    And User click Sign In button on Login Page
    Then User see pop up message "Incorrect Phone Number or Password. Please input your correct Phone Number and Password"

  @Invalid
  Scenario: 5. user login with empty phone number but correct password
    Given User is on Login Page
    When User input phone number "" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Phone Number cannot be empty!"

  @Invalid
  Scenario: 6. user login with 8 digits phone number but correct password
    Given User is on Login Page
    When User input phone number "81300000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Wrong Phone Number format! All Numbers and 9 – 12 digits!"

  @Invalid
  Scenario: 7. user login with 13 digits phone number but correct password
    Given User is on Login Page
    When User input phone number "8130000000000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Wrong Phone Number format! All Numbers and 9 – 12 digits!"

  @Invalid @Nyoba
  Scenario Outline: 8 - 12. user login with non-numerical phone number but correct password
    Given User is on Login Page
    When User input phone number "<phone number>" on phone number field
    And User input password "<password>" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "<error message>"

    Examples:
      | phone number | password | error message                                             |
      | 813abcd00    | P@ssw0rd | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | abcdefghi    | P@ssw0rd | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | 81300000!    | P@ssw0rd | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | !@#$%^&*(    | P@ssw0rd | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | 😭           | P@ssw0rd | Phone Number cannot be empty!                             |

  @Invalid
  Scenario: 13. user login with prefix 62 phone number but correct password
    Given User is on Login Page
    When User input phone number "62813000000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Wrong Phone Number format! All Numbers and 9 – 12 digits!"

  @Invalid
  Scenario: 14. user login with prefix 0 phone number but correct password
    Given User is on Login Page
    When User input phone number "08130000000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Wrong Phone Number format! All Numbers and 9 – 12 digits!"

  @Invalid
  Scenario: 15. user login with correct phone number but empty password
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    And User input password "" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Password cannot be empty!"

  @Invalid
  Scenario: 16. user login with correct phone number but 7 digits password
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    And User input password "P@ssw0r" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"

  @Invalid
  Scenario: 17. user login with correct phone number but 21 digits password
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    And User input password "P@ssw0rd1234567890abc" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"

  @Invalid @Scenario
  Scenario Outline: 18 - 33. user login with corret phone number but invalid password format
    Given User is on Login Page
    When User input phone number "<phone number>" on phone number field
    And User input password "<password>" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "<error message>"

    Examples:
      | phone number | password   | error message                                                     |
    #18
      | 81394577665  | Passw0rd   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #19
      | 81394577665  | P@ssword   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #20
      | 81394577665  | Password   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #21
      | 81394577665  | p@ssw0rd   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #22
      | 81394577665  | passw0rd   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #23
      | 81394577665  | p@ssword   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #24
      | 81394577665  | password   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #25
      | 81394577665  | P@SSW0RD   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #26
      | 81394577665  | PASSW0RD   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #27
      | 81394577665  | P@SSWORD   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #28
      | 81394577665  | PASSWORD   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #29
      | 81394577665  | 123$%^78   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #30
      | 81394577665  | 12345678   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #31
      | 81394577665  | !@#$%^&*   | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #32
      | 81394577665  | P@ss w0rd  | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
    #33
      | 81394577665  | P@ssw0rd😭 | Password cannot be empty!                                         |

  #PHONE FIELD
  @PhoneField
  Scenario:  User input valid format phone number
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    Then User see no error message

  @PhoneField @1
  Scenario: User left empty phone number
    Given User is on Login Page
    When User input phone number "" on phone number field
    Then User see error message "Phone Number cannot be empty!"

  @PhoneField
  Scenario Outline: User input invalid format phone number
    Given User is on Login Page
    When User input phone number "<phone number>" on phone number field
    Then User see error message "<error message>"

    Examples:
      | phone number  | error message                                             |
      | 81300000      | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | 8130000000000 | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | 813abcd00     | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | abcdefghi     | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | 81300000!     | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | !@#$%^&*(     | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | 😭            | Phone Number cannot be empty!                             |
      | 62813000000   | Wrong Phone Number format! All Numbers and 9 – 12 digits! |
      | 08130000000   | Wrong Phone Number format! All Numbers and 9 – 12 digits! |

  #PASSWORD FIELD
  @PasswordField
  Scenario: User input valid format password
    Given User is on Login Page
    When User input password "P@ssw0rd" on password field
    Then User see no error message

  @PasswordField
  Scenario: User left empty password
    Given User is on Login Page
    When User input password "" on password field
    Then User see error message "Password cannot be empty!" on password field

  @PasswordField
  Scenario Outline: User input invalid format password
    Given User is on Login Page
    When User input password "<password>" on password field
    Then User see error message "<error message>" on password field

    Examples:
      | password              | error message                                                     |
      | P@ssw0r               | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | P@ssw0rd1234567890abc | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | Passw0rd              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | P@ssword              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | Password              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | p@ssw0rd              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | passw0rd              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | p@ssword              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | password              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | P@SSW0RD              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | PASSW0RD              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | P@SSWORD              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | PASSWORD              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | 123$%^78              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | 12345678              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | !@#$%^&*              | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | P@ss w0rd             | Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol! |
      | P@ssw0rd😭            | Password cannot be empty!                                         |

  #HIDE/SHOW PASSWORD BUTTON
  @Show
  Scenario: User input password and click hide/show password button
    Given User is on Login Page
    When User input password "P@ssw0rd" on password field
    And User click show password button
    Then User see "P@ssw0rd" on password field

  @Show
  Scenario: User input password and didn't click hide/show password button
    Given User is on Login Page
    When User input password "P@ssw0rd" on password field
    #Then User see "••••••••" on password field
    Then User see password is masked

  @Show @2
  Scenario: User input invalid format password and click hide/show password button
    Given User is on Login Page
    When User input password "P@ssw0r" on password field
    And User click show password button
    Then User see "P@ssw0r" on password field

  @Show
  Scenario: User input invalid format password and click hide/show password button
    Given User is on Login Page
    When User input password "P@ssw0r" on password field
    #Then User see "•••••••" on password field
    Then User see password is masked

  #FORGOT PASSWORD BUTTON
  @forpassbutton
  Scenario: User wants to Forgot his own Password
    Given User is on Login Page
    When User click Forgot Password button
    Then User directed to Forgot Password Page

  #REGISTER BUTTON
  @registerbutton
  Scenario: User wants to create new account
    Given User is on Login Page
    When User click Register button
    Then User directed to Register Page
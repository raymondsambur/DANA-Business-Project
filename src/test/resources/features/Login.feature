@Login
Feature: Login

  #BUTTON
  @Positive
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
    Then User see error message "Invalid Phone Number or Password"

  Scenario: 3. user login with incorrect phone number but correct password
    Given User is on Login Page
    When User input phone number "81394577000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

  Scenario: 4. user login with incorrect phone number and password
    Given User is on Login Page
    When User input phone number "81394577000" on phone number field
    And User input password "P@ssword123" on password field
    And User click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

  Scenario: 5. user login with empty phone number but correct password
    Given User is on Login Page
    When User didn't input phone number on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Phone Number field cannot be empty!"

  Scenario: 6. user login with 8 digits phone number but correct password
    Given User is on Login Page
    When User input phone number "81300000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

  Scenario: 7. user login with 13 digits phone number but correct password
    Given User is on Login Page
    When User input phone number "81300000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

  Scenario Outline: 8 - 12. user login with non-numerical phone number but correct password
    Given User is on Login Page
    When User input phone number "<phone number>" on phone number field
    And User input password "<password>" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

    Examples:
      | phone number | password |
      | 813abcd00    | P@ssw0rd |
      | abcdefghi    | P@ssw0rd |
      | 81300000!    | P@ssw0rd |
      | !@#$%^&*(    | P@ssw0rd |
      | 😭           | P@ssw0rd |

  Scenario: 13. user login with prefix 62 phone number but correct password
    Given User is on Login Page
    When User input phone number "62813000000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

  Scenario: 14. user login with prefix 0 phone number but correct password
    Given User is on Login Page
    When User input phone number "08130000000" on phone number field
    And User input password "P@ssw0rd" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

  Scenario: 15. user login with correct phone number but empty password
    Given User is on Login Page
    When User input phone number "08130000000" on phone number field
    And User didn't input password on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Password field cannot be empty!"

  Scenario: 16. user login with correct phone number but 7 digits password
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    And User input password "P@ssw0r" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

  Scenario: 17. user login with correct phone number but 21 digits password
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    And User input password "P@ssw0rd1234567890abc" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

  Scenario Outline: 18 - 33. user login with corret phone number but invalid password format
    Given User is on Login Page
    When User input phone number "<phone number>" on phone number field
    And User input password "<password>" on password field
    And User cannot click Sign In button on Login Page
    Then User see error message "Invalid Phone Number or Password"

    Examples:
      | phone number | password   |
    #18
      | 81394577665  | Passw0rd   |
    #19
      | 81394577665  | P@ssword   |
    #20
      | 81394577665  | Password   |
    #21
      | 81394577665  | p@ssw0rd   |
    #22
      | 81394577665  | passw0rd   |
    #23
      | 81394577665  | p@ssword   |
    #24
      | 81394577665  | password   |
    #25
      | 81394577665  | P@SSW0RD   |
    #26
      | 81394577665  | PASSW0RD   |
    #27
      | 81394577665  | P@SSWORD   |
    #28
      | 81394577665  | PASSWORD   |
    #29
      | 81394577665  | 123$%^78   |
    #30
      | 81394577665  | 12345678   |
    #31
      | 81394577665  | !@#$%^&*   |
    #32
      | 81394577665  | P@ss w0rd  |
    #33
      | 81394577665  | P@ssw0rd😭 |

  #PHONE FIELD
  @Positive
  Scenario:  User input valid format phone number
    Given User is on Login Page
    When User input phone number "81394577665" on phone number field
    Then User see no error message

  @Negative
  Scenario: User left empty phone number
    Given User is on Login Page
    When User didn't input phone number on phone number field
    Then User see error message "Phone Number field cannot be empty!"

  Scenario Outline: User input invalid format phone number
    Given User is on Login Page
    When User input phone number "<phone number>" on phone number field
    Then User see error message "Invalid Phone Number or Password"

    Examples:
      | phone number  |
      | 81300000      |
      | 8130000000000 |
      | 813abcd00     |
      | abcdefghi     |
      | 81300000!     |
      | !@#$%^&*(     |
      | 😭            |
      | 62813000000   |
      | 08130000000   |

  #PASSWORD FIELD
  @Positive
  Scenario: User input valid format password
    Given User is on Login Page
    When User input password "P@ssw0rd" on password field
    Then User see no error message

  @Negative
  Scenario: User left empty password
    Given User is on Login Page
    When User didn't input password on password field
    Then User see error message "Password field cannot be empty!"

  Scenario Outline: User input invalid format password
    Given User is on Login Page
    When User input password "<password>" on password field
    Then User see error message "Invalid Phone Number or Password"

    Examples:
      | password              |
      | P@ssw0r               |
      | P@ssw0rd1234567890abc |
      | Passw0rd              |
      | P@ssword              |
      | Password              |
      | p@ssw0rd              |
      | passw0rd              |
      | p@ssword              |
      | password              |
      | P@SSW0RD              |
      | PASSW0RD              |
      | P@SSWORD              |
      | PASSWORD              |
      | 123$%^78              |
      | 12345678              |
      | !@#$%^&*              |
      | P@ss w0rd             |
      | P@ssw0rd😭            |

  #HIDE/SHOW PASSWORD BUTTON
  Scenario: User didn't input password and click hide/show password button
    Given User is on Login Page
    When User didn't input password on password field
    And User click show password button
    Then User see "" on password field

  Scenario: User input password and click hide/show password button
    Given User is on Login Page
    When User input password "P@ssw0rd" on password field
    And User click show password button
    Then User see "P@ssw0rd" on password field

  Scenario: User input password and didn't click hide/show password button
    Given User is on Login Page
    When User input password "P@ssw0rd" on password field
    Then User see "••••••••" on password field

  Scenario: User input invalid format password and click hide/show password button
    Given User is on Login Page
    When User input password "P@ssw0r" on password field
    And User click show password button
    Then User see "P@ssw0r" on password field

  Scenario: User input invalid format password and click hide/show password button
    Given User is on Login Page
    When User input password "P@ssw0r" on password field
    Then User see "•••••••" on password field

  #FORGOT PASSWORD BUTTON
  Scenario: User wants to Forgot his own Password
    Given User is on Login Page
    When User click Forgot Password button
    Then User directed to Forgot Password Page

  #REGISTER BUTTON
  Scenario: User wants to create new account
    Given User is on Login Page
    When User click Register button
    Then User directed to Register Page
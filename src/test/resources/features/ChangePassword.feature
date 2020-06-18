@ChangePassword
Feature: Change Password

  Background:
    Given User is on Login Page
    And User input phone number "8123456789" on phone number field
    And User input password "P@ssw0rd" on password field
    And User is on Home Page
    And User tap My Account button on Home page
    And User is on My Account page
    And User tap Change Password button on My Account page


  @Positive
  Scenario: Change password with new password and valid confirmation password
    Given User is on Change Password page
    When User input "P@ssword123" as New Password on Change Password page
    And User input "P@ssword123" as Confirmation Password on Change Password page
    And User tap Change button on Change Password page
    Then User is on My Account page

  @CheckErrorMessageForInvalidFormat
  Scenario Outline: Check error message for invalid format of New Password
    Given User is on Change Password page
    When User input "<NewPassword>" as New Password on Change Password page
    And User input "<ConfirmationPassword>" as Confirmation Password on Change Password page
    And User tap Change button on Change Password page
    Then User see error message "Invalid Format of password" on New Password field on Change Password page
    Examples:
      | NewPassword  | ConfirmationPassword |
      #No Uppercase
      | p@ssw0rd     | p@ssw0rd             |
      #No Symbols
      | Passw0rd     | Passw0rd             |
      #No Numeric
      | P@ssword     | P@ssword             |
      #No Lowercase
      | P@SSW0RD     | P@SSW0RD             |
      #Only Numeric
      | 12345678     | 12345678             |
      #Only Symbols
      | !@#$%^&*()_+ | !@#$%^&*()_+         |
      #Only Alphabet
      | Password     | Password             |
      #Alphabet with Uppercase
      | PASSWORD     | PASSWORD             |
      #Alphabet with Lowercase
      | password     | password             |
      #Combination Alphabet with Numeric
      | Password123  | Password123          |
      #Combination Alphabet with Symbols
      | Password!@#  | Password!@#          |
      #Combination Numerical with Symbols
      | 1234!@#$%^&  | 1234!@#$%^&          |
      #Combination Alphabet, Numeric and Uppercase
      | PASSWORD123  | PASSWORD123          |
      #Combination Alphabet, Numeric and Lowercase
      | password123  | password123          |
      #Combination Alphabet, Symbols and Uppercase
      | PASSWORD!@#  | PASSWORD!@#          |
      #Combination Alphabet, Symbols and Lowercase
      | password!@#  | password!@#          |
      #Combination Alphabet, Numeric, Symbols and Uppercase
      | P@SSW0RD     | P@SSW0RD             |
      #Combination Alphabet, Numeric, Symbols and Lowercase
      | p@ssw0rd     | p@ssw0rd             |

  @CheckErrorMessageForEmptyNewPassword
  Scenario Outline: Check error message for empty New Password field
    Given User is on Change Password page
    When User input "<NewPassword>" as Confirmation Password on Change Password page
    And User tap Change button on Change Password page
    Then User see error message "New Password field cannot be empty!" on New Password field on Change Password page
    Examples:
      | NewPassword  |
      #No Uppercase
      | p@ssw0rd     |
      #No Symbols
      | Passw0rd     |
      #No Numeric
      | P@ssword     |
      #No Lowercase
      | P@SSW0RD     |
      #Only Numeric
      | 12345678     |
      #Only Symbols
      | !@#$%^&*()_+ |
      #Only Alphabet
      | Password     |
      #Alphabet with Uppercase
      | PASSWORD     |
      #Alphabet with Lowercase
      | password     |
      #Combination Alphabet with Numeric
      | Password123  |
      #Combination Alphabet with Symbols
      | Password!@#  |
      #Combination Numerical with Symbols
      | 1234!@#$%^&  |
      #Combination Alphabet, Numeric and Uppercase
      | PASSWORD123  |
      #Combination Alphabet, Numeric and Lowercase
      | password123  |
      #Combination Alphabet, Symbols and Uppercase
      | PASSWORD!@#  |
      #Combination Alphabet, Symbols and Lowercase
      | password!@#  |
      #Combination Alphabet, Numeric, Symbols and Uppercase
      | P@SSW0RD     |
      #Combination Alphabet, Numeric, Symbols and Lowercase
      | p@ssw0rd     |

  @CheckErrorMessageForEmptyConfirmationPassword
  Scenario Outline: Check error message for empty Confirmation Password
    Given User is on Change Password page
    When User input "<ConfirmationPassword>" as Confirmation Password on Change Password page
    And User tap Change button on Change Password page
    Then User see error message "Confirmation Password field cannot be empty!" on New Password field on Change Password page
    Examples:
      | ConfirmationPassword |
      #No Uppercase
      | p@ssw0rd             |
      #No Symbols
      | Passw0rd             |
      #No Numeric
      | P@ssword             |
      #No Lowercase
      | P@SSW0RD             |
      #Only Numeric
      | 12345678             |
      #Only Symbols
      | !@#$%^&*()_+         |
      #Only Alphabet
      | Password             |
      #Alphabet with Uppercase
      | PASSWORD             |
      #Alphabet with Lowercase
      | password             |
      #Combination Alphabet with Numeric
      | Password123          |
      #Combination Alphabet with Symbols
      | Password!@#          |
      #Combination Numerical with Symbols
      | 1234!@#$%^&          |
      #Combination Alphabet, Numeric and Uppercase
      | PASSWORD123          |
      #Combination Alphabet, Numeric and Lowercase
      | password123          |
      #Combination Alphabet, Symbols and Uppercase
      | PASSWORD!@#          |
      #Combination Alphabet, Symbols and Lowercase
      | password!@#          |
      #Combination Alphabet, Numeric, Symbols and Uppercase
      | P@SSW0RD             |
      #Combination Alphabet, Numeric, Symbols and Lowercase
      | p@ssw0rd             |

    @VerifyBackButtonFunction
    Scenario: Go to My Account page by tapping Back button
      Given User is on Change Password page
      When User tap Back button on Change Password page
      Then User is on My Account page
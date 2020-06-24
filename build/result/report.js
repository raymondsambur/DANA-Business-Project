$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "name": "1. user login with correct phone number and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Valid"
    },
    {
      "name": "@aaaa"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User directed to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userDirectedToHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2. user login with correct phone number but incorrect password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssword123\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pop up message \"Incorrect Phone Number or Password. Please input your correct Phone Number and Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeePopUpMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "3. user login with incorrect phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pop up message \"Incorrect Phone Number or Password. Please input your correct Phone Number and Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeePopUpMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "4. user login with incorrect phone number and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssword123\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see pop up message \"Incorrect Phone Number or Password. Please input your correct Phone Number and Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeePopUpMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "5. user login with empty phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Phone Number cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "6. user login with 8 digits phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81300000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "7. user login with 13 digits phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"8130000000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input phone number \"\u003cphone number\u003e\" on phone number field",
  "keyword": "When "
});
formatter.step({
  "name": "User input password \"\u003cpassword\u003e\" on password field",
  "keyword": "And "
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "User see error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone number",
        "password",
        "error message"
      ]
    },
    {
      "cells": [
        "813abcd00",
        "P@ssw0rd",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "abcdefghi",
        "P@ssw0rd",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "81300000!",
        "P@ssw0rd",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "!@#$%^\u0026*(",
        "P@ssw0rd",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "😭",
        "P@ssw0rd",
        "Phone Number cannot be empty!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"813abcd00\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"abcdefghi\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81300000!\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"!@#$%^\u0026*(\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "8 - 12. user login with non-numerical phone number but correct password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Nyoba"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"😭\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Phone Number cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "13. user login with prefix 62 phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"62813000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "14. user login with prefix 0 phone number but correct password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"08130000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "15. user login with correct phone number but empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "16. user login with correct phone number but 7 digits password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0r\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "17. user login with correct phone number but 21 digits password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd1234567890abc\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input phone number \"\u003cphone number\u003e\" on phone number field",
  "keyword": "When "
});
formatter.step({
  "name": "User input password \"\u003cpassword\u003e\" on password field",
  "keyword": "And "
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "User see error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone number",
        "password",
        "error message"
      ]
    },
    {
      "cells": [
        "81394577665",
        "Passw0rd",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ssword",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "Password",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "p@ssw0rd",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "passw0rd",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "p@ssword",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "password",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@SSW0RD",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "PASSW0RD",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@SSWORD",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "PASSWORD",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "123$%^78",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "12345678",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "!@#$%^\u0026*",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ss w0rd",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ssw0rd😭",
        "Password cannot be empty!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Passw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssword\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Password\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"p@ssw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"passw0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"p@ssword\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"password\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@SSW0RD\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"PASSW0RD\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@SSWORD\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"PASSWORD\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"123$%^78\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"12345678\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"!@#$%^\u0026*\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ss w0rd\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "18 - 33. user login with corret phone number but invalid password format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Invalid"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd😭\" on password field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot click Sign In button on Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userCannotClickSignInButtonOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input valid format phone number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81394577665\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see no error message",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeNoErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User left empty phone number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    },
    {
      "name": "@1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Phone Number cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input phone number \"\u003cphone number\u003e\" on phone number field",
  "keyword": "When "
});
formatter.step({
  "name": "User see error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone number",
        "error message"
      ]
    },
    {
      "cells": [
        "81300000",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "8130000000000",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "813abcd00",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "abcdefghi",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "81300000!",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "!@#$%^\u0026*(",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "😭",
        "Phone Number cannot be empty!"
      ]
    },
    {
      "cells": [
        "62813000000",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    },
    {
      "cells": [
        "08130000000",
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81300000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"8130000000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"813abcd00\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"abcdefghi\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"81300000!\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"!@#$%^\u0026*(\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"😭\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Phone Number cannot be empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"62813000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PhoneField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input phone number \"08130000000\" on phone number field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input valid format password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see no error message",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeNoErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User left empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password cannot be empty!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User input password \"\u003cpassword\u003e\" on password field",
  "keyword": "When "
});
formatter.step({
  "name": "User see error message \"\u003cerror message\u003e\" on password field",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password",
        "error message"
      ]
    },
    {
      "cells": [
        "P@ssw0r",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "P@ssw0rd1234567890abc",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "Passw0rd",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "P@ssword",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "Password",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "p@ssw0rd",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "passw0rd",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "p@ssword",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "password",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "P@SSW0RD",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "PASSW0RD",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "P@SSWORD",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "PASSWORD",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "123$%^78",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "12345678",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "!@#$%^\u0026*",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "P@ss w0rd",
        "Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!"
      ]
    },
    {
      "cells": [
        "P@ssw0rd😭",
        "Password cannot be empty!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0r\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd1234567890abc\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Passw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssword\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Password\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"p@ssw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"passw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"p@ssword\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"password\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@SSW0RD\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"PASSW0RD\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@SSWORD\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"PASSWORD\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"123$%^78\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"12345678\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"!@#$%^\u0026*\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ss w0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@PasswordField"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd😭\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see error message \"Password cannot be empty!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input password and click hide/show password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Show"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click show password button",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickHideShowPasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see \"P@ssw0rd\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input password and didn\u0027t click hide/show password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Show"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0rd\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see password is masked",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeePasswordIsMasked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password and click hide/show password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Show"
    },
    {
      "name": "@2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0r\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click show password button",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickHideShowPasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see \"P@ssw0r\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User input invalid format password and click hide/show password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Show"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"P@ssw0r\" on password field",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPasswordOnPasswordField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see password is masked",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeePasswordIsMasked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to Forgot his own Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@forpassbutton"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Forgot Password button",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickForgotPasswordButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User directed to Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userDirectedToForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@registerbutton"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Register button",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userClickRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User directed to Register Page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userDirectedToRegisterPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
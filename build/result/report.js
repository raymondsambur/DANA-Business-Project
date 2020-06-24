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
        "Wrong Phone Number format! All Numbers and 9 – 12 digits!"
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
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Wrong Phone Number format! All Numbers and 9 – 12 digits]!\u003e but was:\u003c[Phone Number cannot be empty]!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:47)\r\n\tat ✽.User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"(file:///D:/DANA/Debrief%202/src/test/resources/features/Login.feature:65)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.write("scenario Fail");
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
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
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
        "password"
      ]
    },
    {
      "cells": [
        "81394577665",
        "Passw0rd"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ssword"
      ]
    },
    {
      "cells": [
        "81394577665",
        "Password"
      ]
    },
    {
      "cells": [
        "81394577665",
        "p@ssw0rd"
      ]
    },
    {
      "cells": [
        "81394577665",
        "passw0rd"
      ]
    },
    {
      "cells": [
        "81394577665",
        "p@ssword"
      ]
    },
    {
      "cells": [
        "81394577665",
        "password"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@SSW0RD"
      ]
    },
    {
      "cells": [
        "81394577665",
        "PASSW0RD"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@SSWORD"
      ]
    },
    {
      "cells": [
        "81394577665",
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "81394577665",
        "123$%^78"
      ]
    },
    {
      "cells": [
        "81394577665",
        "12345678"
      ]
    },
    {
      "cells": [
        "81394577665",
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ss w0rd"
      ]
    },
    {
      "cells": [
        "81394577665",
        "P@ssw0rd😭"
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
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cPassword [should be 8 digits and contains : a–z, A–Z, 1–9, Symbol]!\u003e but was:\u003cPassword [cannot be empty]!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:47)\r\n\tat ✽.User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\"(file:///D:/DANA/Debrief%202/src/test/resources/features/Login.feature:121)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.write("scenario Fail");
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
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone number"
      ]
    },
    {
      "cells": [
        "81300000"
      ]
    },
    {
      "cells": [
        "8130000000000"
      ]
    },
    {
      "cells": [
        "813abcd00"
      ]
    },
    {
      "cells": [
        "abcdefghi"
      ]
    },
    {
      "cells": [
        "81300000!"
      ]
    },
    {
      "cells": [
        "!@#$%^\u0026*("
      ]
    },
    {
      "cells": [
        "😭"
      ]
    },
    {
      "cells": [
        "62813000000"
      ]
    },
    {
      "cells": [
        "08130000000"
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
  "name": "User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Wrong Phone Number format! All Numbers and 9 – 12 digits]!\u003e but was:\u003c[Phone Number cannot be empty]!\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessage(LoginStepDefinition.java:47)\r\n\tat ✽.User see error message \"Wrong Phone Number format! All Numbers and 9 – 12 digits!\"(file:///D:/DANA/Debrief%202/src/test/resources/features/Login.feature:175)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.write("scenario Fail");
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
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "P@ssw0r"
      ]
    },
    {
      "cells": [
        "P@ssw0rd1234567890abc"
      ]
    },
    {
      "cells": [
        "Passw0rd"
      ]
    },
    {
      "cells": [
        "P@ssword"
      ]
    },
    {
      "cells": [
        "Password"
      ]
    },
    {
      "cells": [
        "p@ssw0rd"
      ]
    },
    {
      "cells": [
        "passw0rd"
      ]
    },
    {
      "cells": [
        "p@ssword"
      ]
    },
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "P@SSW0RD"
      ]
    },
    {
      "cells": [
        "PASSW0RD"
      ]
    },
    {
      "cells": [
        "P@SSWORD"
      ]
    },
    {
      "cells": [
        "PASSWORD"
      ]
    },
    {
      "cells": [
        "123$%^78"
      ]
    },
    {
      "cells": [
        "12345678"
      ]
    },
    {
      "cells": [
        "!@#$%^\u0026*"
      ]
    },
    {
      "cells": [
        "P@ss w0rd"
      ]
    },
    {
      "cells": [
        "P@ssw0rd😭"
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
  "name": "User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-8ROAKM94\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: D:\\DANA\\Debrief 2\\APP\\DANAB..., appPackage: com.alfikri.rizky.danabusin..., autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: D:\\DANA\\Debrief 2\\APP\\DANAB..., autoGrantPermissions: true, automationName: UiAutomator2, deviceName: device, platformName: android, platformVersion: 6.0, udid: emulator-5554}, deviceApiLevel: 29, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.75, platform: LINUX, platformName: Android, platformVersion: 10, statBarHeight: 66, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: c5a08757-1ea6-4a85-9467-42ba4e1e8c14\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.TextView[contains(@text, \u0027Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat project.pages.LoginPage.getWarningTextPassword(LoginPage.java:47)\r\n\tat project.stepsdefinition.LoginStepDefinition.userSeeErrorMessageOnPhoneNumberField(LoginStepDefinition.java:106)\r\n\tat ✽.User see error message \"Password should be 8 digits and contains : a–z, A–Z, 1–9, Symbol!\" on password field(file:///D:/DANA/Debrief%202/src/test/resources/features/Login.feature:205)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.write("scenario Fail");
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
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Home.feature");
formatter.feature({
  "name": "Home",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Home"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "User input phone number \"81266829795\" on phone number field",
  "keyword": "And "
});
formatter.match({
  "location": "project.stepsdefinition.LoginStepDefinition.userInputPhoneNumberOnPhoneNumberField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"Pass@123\" on password field",
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
formatter.scenario({
  "name": "Validate the functional of QR Scan Button on Home Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Home"
    },
    {
      "name": "@ValidateQRScanButton"
    }
  ]
});
formatter.step({
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "project.stepsdefinition.ChangePasswordStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User tap QR Scan Button on Home Page",
  "keyword": "When "
});
formatter.match({
  "location": "project.stepsdefinition.HomeStepDefinition.userTapQRScanButtonOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on QR Scan page",
  "keyword": "Then "
});
formatter.match({
  "location": "project.stepsdefinition.HomeStepDefinition.userIsOnQRScanPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
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
});
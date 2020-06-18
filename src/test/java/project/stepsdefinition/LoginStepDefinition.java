package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.LoginPage;

public class LoginStepDefinition {

    private LoginPage loginPage = new LoginPage();

    @Given("User is on Login Page")
    public void userIsOnLoginPage() {
        loginPage.isOnLoginPage();
    }

    @When("User input phone number {string} on phone number field")
    public void userInputPhoneNumberOnPhoneNumberField(String phone) {
        loginPage.inputPhone(phone);
    }

    @And("User input password {string} on password field")
    public void userInputPasswordOnPasswordField(String password) {
        loginPage.inputPassword(password);
    }

    @And("User click Sign In button on Login Page")
    public void userClickSignInButton() {
        loginPage.clickSignInButton();
    }

    @Then("User directed to Home Page")
    public void userDirectedToHomePage() {
        //////////////////////
    }

    @Then("User see error message {string}")
    public void userSeeErrorMessage(String errorText) {
       loginPage.checkWarningText();
       String message = loginPage.getWarningText();

        Assert.assertEquals(errorText, message);
    }

    @When("User didn't input phone number on phone number field")
    public void userDidnTInputPhoneNumberOnPhoneNumberField() {
        
    }

    @And("User cannot click Sign In button on Login Page")
    public void userCannotClickSignInButtonOnLoginPage() {
        boolean statusButton = loginPage.disabledButton();

        Assert.assertFalse(statusButton);
    }

    @And("User didn't input password on password field")
    public void userDidnTInputPasswordOnPasswordField() {

    }

    @Then("User see no error message")
    public void userSeeNoErrorMessage() {

    }

    @And("User click show password button")
    public void userClickHideShowPasswordButton() {
        loginPage.clickHideShowPassButton();
    }

    @Then("User see {string} on password field")
    public void userSeeOnPasswordField(String password) {
        String isiText = loginPage.getPasswordText();

        Assert.assertEquals(password, isiText);
    }

    @When("User click Forgot Password button")
    public void userClickForgotPasswordButton() {
        loginPage.clickForgotPassButton();
    }

    @Then("User directed to Forgot Password Page")
    public void userDirectedToForgotPasswordPage() {
        ///////////
    }

    @When("User click Register button")
    public void userClickRegisterButton() {
        loginPage.clickRegisterButton();
    }

    @Then("User directed to Register Page")
    public void userDirectedToRegisterPage() {
        /////////////////
    }
}

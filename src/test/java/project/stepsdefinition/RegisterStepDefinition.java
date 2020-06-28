package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.LoginPage;
import project.pages.RegisterPage;

public class RegisterStepDefinition {

    RegisterPage registerPage = new RegisterPage();
    LoginPage loginPage = new LoginPage();

    @Given("User is on DANA bussiness Register Page")
    public void userIsOnDANABussinessRegisterPage() {
        registerPage.isOnRegisterPage();
    }

    @When("User input name {string} on name text field")
    public void userInputNameOnNameTextField(String name) {
        registerPage.inputName(name);
    }

    @When("User input email {string} on email text field")
    public void userInputEmailOnNameTextField(String email) {
        registerPage.inputEmail(email);
    }

    @And("User input phone number {string} on phone number text field")
    public void userInputPhoneNumberOnPhoneNumberTextField(String phone) {
        registerPage.inputPhone(phone);
    }

    @When("User input Password {string} on password text field")
    public void userInputPasswordOnPasswordTextField(String password) {
        registerPage.inputPassword(password);
    }

    @And("User input Password {string} on password confirmation text field")
    public void userInputPasswordOnPasswordConfirmationTextField(String repassword) {
        registerPage.inputConfirmation(repassword);
    }

    @And("User Tap Register button")
    public void userTapRegisterButton() {
        registerPage.tapRegisterButton();
    }

    @Then("User directed to the Login Page")
    public void userDirectedToTheLoginPage() {
        loginPage.isOnLoginPage();
    }

    @Then("User see Register button is unclickable")
    public void userSeeRegisterButtonIsUnclickable() {
        boolean statusButton = registerPage.buttonDisabled();
        Assert.assertFalse(statusButton);
    }

    @When("User tap Back button on Register Page")
    public void userTapBackButtonOnRegisterPage() {
        registerPage.tapBackButton();
    }

    @Then("User see register pop up message {string}")
    public void userSeeRegisterPopUpMessage(String expected) {
        if (registerPage.checkPopUp()) {
            String actual = registerPage.getPopUpMessage();
            Assert.assertEquals(expected, actual);
        }
    }

    @Then("User see register error message {string}")
    public void userSeeRegisterErrorMessage(String errorText) {
        if (registerPage.checkErrorText()){
            String message = registerPage.getErrorText();
            Assert.assertEquals(errorText, message);
        }
    }

    @Then("User see Password is masked")
    public void userSeePasswordIsMasked() {
        boolean status = registerPage.isPasswordMasked();
        Assert.assertTrue(status);
    }

    @And("User click show password button on password text field")
    public void userClickShowPasswordButtonOnPasswordTextField() {
        registerPage.tapHideShowPassButton();
    }
}

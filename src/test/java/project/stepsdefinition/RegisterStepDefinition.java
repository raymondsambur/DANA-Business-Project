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

//    @Then("User see register error message {string}")
//    public void userSeeRegisterErrorMessage(String errormsg) {
//        if (registerPage.checkWarningText()){
//            String message = registerPage.getErrorText();
//            Assert.assertEquals(errormsg, message);
//        }
//    }
//
//    @Then("User see name field error message {string}")
//    public void userSeeNameFieldErrorMessage(String errormsg) {
//        String message = registerPage.getNameFieldErrorText();
//        Assert.assertEquals(errormsg, message);
//    }
//
//    @Then("User see email field error message {string}")
//    public void userSeeEmailFieldErrorMessage(String errormsg) {
//        String message = registerPage.getEmailFieldErrorText();
//        Assert.assertEquals(errormsg, message);
//    }
//
//    @Then("User see phone field error message {string}")
//    public void userSeePhoneFieldErrorMessage(String errormsg) {
//        String message = registerPage.getPhoneFieldErrorText();
//        Assert.assertEquals(errormsg, message);
//    }
//
//    @Then("User see password field error message {string}")
//    public void userSeePasswordFieldErrorMessage(String errormsg) {
//        String message = registerPage.getPassFieldErrorText();
//        Assert.assertEquals(errormsg, message);
//    }
//
//    @Then("User see confirmaion field error message {string}")
//    public void userSeeConfirmaionFieldErrorMessage(String errormsg) {
//        String message = registerPage.getConfirmationFieldErrorText();
//        Assert.assertEquals(errormsg, message);
//    }

    @When("User tap Back button on Register Page")
    public void userTapBackButtonOnRegisterPage() {
        registerPage.tapBackButton();
    }
}

package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
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

    @And("User input email {string} on name text field")
    public void userInputEmailOnNameTextField(String email) {
        registerPage.inputEmail(email);
    }

    @And("User input phone number {string} on phone number text field")
    public void userInputPhoneNumberOnPhoneNumberTextField(String phone) {
        registerPage.inputPhone(phone);
    }

    @And("User input Password {string} on password text field")
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
}

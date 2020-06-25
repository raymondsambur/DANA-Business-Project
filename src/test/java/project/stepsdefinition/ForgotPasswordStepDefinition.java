package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.ForgotPasswordPage;


public class ForgotPasswordStepDefinition {
    ForgotPasswordPage forgotPasswordPage = new ForgotPasswordPage();

    @Given("User is on forgot password page")
    public void userIsOnForgotPasswordPage() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        forgotPasswordPage.onForgotPasswordPage();    }

    @When("User input email {string} on Email Field")
    public void userInputEmailOnEmailField(String email) {
        forgotPasswordPage.inputEmail(email);
    }

    @Then("There's no error message")
    public void thereSNoErrorMessage() {
       
    }

    @And("User click send button")
    public void userClickSendButton() {
        forgotPasswordPage.clickSendEmail();
    }

    @Then("User see error message on field {string}")
    public void userSeeErrorMessageOnField(String message) {
        String errorText = forgotPasswordPage.errorMessageField();
        Assert.assertEquals(errorText, message);
    }

    @Then("User see error message on bottom {string}")
    public void userSeeErrorMessageOnBottom(String message) {
        String errorText = forgotPasswordPage.errorWrongEmail();
        Assert.assertEquals(errorText, message);
    }

    @Then("User can not click send button")
    public void userCanNotClickSendButton() {
        boolean statusButton = forgotPasswordPage.disabledSendButton();
        Assert.assertFalse(statusButton);
    }

    @When("User Click back button on Forgot Password page")
    public void userClickBackButtonOnForgotPasswordPage() {
        forgotPasswordPage.clickBack();
    }
}

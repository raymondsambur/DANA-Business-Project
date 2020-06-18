package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ChangePasswordDefinition {
    @And("User is on Home Page")
    public void userIsOnHomePage() {
    }

    @And("User tap My Account button on Home page")
    public void userTapMyAccountButtonOnHomePage() {
    }

    @And("User is on My Account page")
    public void userIsOnMyAccountPage() {
    }

    @And("User tap Change Password button on My Account page")
    public void userTapChangePasswordButtonOnMyAccountPage() {
    }

    @Given("User is on Change Password page")
    public void userIsOnChangePasswordPage() {
    }

    @When("User input {string} as New Password on Change Password page")
    public void userInputAsNewPasswordOnChangePasswordPage(String newPassword) {
    }

    @And("User input {string} as Confirmation Password on Change Password page")
    public void userInputAsConfirmationPasswordOnChangePasswordPage(String confirmationPassword) {
    }

    @And("User tap Change button on Change Password page")
    public void userTapChangeButtonOnChangePasswordPage() {
    }

    @Then("User see error message {string} on New Password field on Change Password page")
    public void userSeeErrorMessageOnNewPasswordFieldOnChangePasswordPage(String ErrorMessage) {
    }

    @When("User tap Back button on Change Password page")
    public void userTapBackButtonOnChangePasswordPage() {
    }
}

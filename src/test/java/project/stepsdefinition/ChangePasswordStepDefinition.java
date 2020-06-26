package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.ChangePasswordPage;
import project.pages.HomePage;
import project.pages.MyAccountPage;

public class ChangePasswordStepDefinition {
     MyAccountPage myAccountPage = new MyAccountPage();
     ChangePasswordPage changePasswordPage = new ChangePasswordPage();
     HomePage homePage = new HomePage();

    @And("User is on Home Page")
    public void userIsOnHomePage() {
    }

    @And("User tap My Account button on Home page")
    public void userTapMyAccountButtonOnHomePage() {
        homePage.tapMyAccount();
    }

    @And("User is on My Account page")
    public void userIsOnMyAccountPage() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        boolean actual = myAccountPage.onMyAccountPage();
        Assert.assertTrue(actual);
    }

    @And("User tap Change Password button on My Account page")
    public void userTapChangePasswordButtonOnMyAccountPage() {
        myAccountPage.tapChangePassword();
    }

    @Given("User is on Change Password page")
    public void userIsOnChangePasswordPage() {
        boolean actual = changePasswordPage.onChangePasswordPage();
        Assert.assertTrue(actual);
    }

    @When("User input {string} as New Password on Change Password page")
    public void userInputAsNewPasswordOnChangePasswordPage(String newPassword) {
        changePasswordPage.inputNewPassword(newPassword);
    }

    @And("User input {string} as Confirmation Password on Change Password page")
    public void userInputAsConfirmationPasswordOnChangePasswordPage(String confirmationPassword) {
        changePasswordPage.inputRePassword(confirmationPassword);
    }

    @And("User tap Change button on Change Password page")
    public void userTapChangeButtonOnChangePasswordPage() {
        changePasswordPage.tapSaveChanges();
    }

    @Then("User see error message {string} on New Password field on Change Password page")
    public void userSeeErrorMessageOnNewPasswordFieldOnChangePasswordPage(String errorMessage) {
        String actualError = changePasswordPage.errorMessage();
        Assert.assertEquals(errorMessage, actualError);
    }

    @When("User tap Back button on Change Password page")
    public void userTapBackButtonOnChangePasswordPage() {
        changePasswordPage.tapBack();
    }
}

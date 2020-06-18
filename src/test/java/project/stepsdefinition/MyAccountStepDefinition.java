package project.stepsdefinition;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.MyAccountPage;

public class MyAccountStepDefinition {
    MyAccountPage myAccountPage = new MyAccountPage();

    @When("User tap Balance button on My Account page")
    public void userTapBalanceButtonOnMyAccountPage() {
        myAccountPage.tapBalance();
    }

    @Then("User is on Top Up page")
    public void userIsOnTopUpPage() {
    }

    @When("User tap Back button on My Account page")
    public void userTapBackButtonOnMyAccountPage() {
        myAccountPage.tapBack();
    }

    @When("User tap Logout button on My Account page")
    public void userTapLogoutButtonOnMyAccountPage() {
        myAccountPage.tapLogout();
    }

    @When("User see Phone Number on My Account page")
    public void userSeePhoneNumberOnMyAccountPage() {
    }

    @Then("User validate Phone Number with registered Phone Number {string}")
    public void userValidatePhoneNumberWithRegisteredPhoneNumber(String phoneNumber) {
        String actual = myAccountPage.checkPhoneNumber();
        Assert.assertEquals(phoneNumber, actual);
    }

    @When("User see Name on My Account page")
    public void userSeeNameOnMyAccountPage() {
    }

    @Then("User validate Name with registered Name {string}")
    public void userValidateNameWithRegisteredName(String name) {
        String actual = myAccountPage.checkUserName();
        Assert.assertEquals(name, actual);
    }

    @When("User see Email on My Account page")
    public void userSeeEmailOnMyAccountPage() {
    }

    @Then("User validate Email with registered Email {string}")
    public void userValidateEmailWithRegisteredEmail(String email) {
        String actual = myAccountPage.checkEmail();
        Assert.assertEquals(email, actual);
    }

    @When("User see Balance on My Account page")
    public void userSeeBalanceOnMyAccountPage() {
    }

    @Then("User validate Balance with user current Balance {string}")
    public void userValidateBalanceWithUserCurrentBalance(String balance) {
        String actual = myAccountPage.checkBalance();
        Assert.assertEquals(balance, actual);
    }
}

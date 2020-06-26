package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.HomePage;
import project.pages.MyAccountPage;
import project.pages.TopUpPage;

public class MyAccountStepDefinition {
    MyAccountPage myAccountPage = new MyAccountPage();
    TopUpPage topUpPage = new TopUpPage();

    @When("User tap Balance button on My Account page")
    public void userTapBalanceButtonOnMyAccountPage() {
        myAccountPage.tapBalance();
    }

    @Then("User is on Top Up page")
    public void userIsOnTopUpPage() {
        topUpPage.isOnTopUpPage();
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

    @And("User tap yes on pop up message")
    public void userTapYesOnPopUpMessage() {
        myAccountPage.tapLogoutYes();
    }

    @And("User tap no on pop up message")
    public void userTapNoOnPopUpMessage() {
        myAccountPage.tapLogoutNo();
    }

    @When("User tap setting button on My Account page")
    public void userTapSettingButtonOnMyAccountPage() {
        myAccountPage.tapSetting();
    }

    @Then("User see message {string} on My Account page")
    public void userSeeMessageOnMyAccountPage(String message) {
        String actual = myAccountPage.errorMessage();
        Assert.assertEquals(message, actual);
    }

    @When("User tap Change Profile button on My Account page")
    public void userTapChangeProfileButtonOnMyAccountPage() {
        myAccountPage.tapChangeProfile();
    }

    @When("User tap Change PIN button on My Account page")
    public void userTapChangePINButtonOnMyAccountPage() {
        myAccountPage.tapChangePINSecurity();
    }

    @When("User tap {string} button on My Account page")
    public void userTapButtonOnMyAccountPage(String feature) {
        switch (feature) {
            case "Change Password":
                myAccountPage.tapChangePassword();
                break;
            case "Change Profile":
                myAccountPage.tapChangeProfile();
                break;
            case "Change PIN":
                myAccountPage.tapChangePINSecurity();
                break;
            case "Setting":
                myAccountPage.tapSetting();
                break;
        }
    }

    @When("User see {string} on My Account page")
    public void userSeeOnMyAccountPage(String data) {
        switch (data) {
            case "Name":
                Assert.assertTrue(myAccountPage.displayName());
                break;
            case "Email":
                Assert.assertTrue(myAccountPage.displayEmail());
                break;
            case "Phone Number":
                Assert.assertTrue(myAccountPage.displayPhoneNumber());
                break;
            case "Balance":
                Assert.assertTrue(myAccountPage.displayBalance());
                break;
        }
    }

    @Then("User validate {string} with user {string}")
    public void userValidateWithUser(String dataDisplay, String data) {
        switch (dataDisplay) {
            case "Name":
                Assert.assertEquals(data, myAccountPage.checkUserName());
                break;
            case "Email":
                Assert.assertEquals(data, myAccountPage.checkEmail());
                break;
            case "Phone Number":
                Assert.assertEquals(data, myAccountPage.checkPhoneNumber());
                break;
            case "Balance":
                Assert.assertEquals(data, myAccountPage.checkBalance());
                break;
        }
    }
}

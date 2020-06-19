package project.stepsdefinition;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import project.pages.HomePage;

public class HomeStepDefinition {

    HomePage homePage = new HomePage();

    @When("User see DANA Balance on Home Page")
    public void userSeeDANABalanceOnHomePage() { homePage.viewBalance(); }

    @Then("User validate DANA Balance with current DANA Balance on Home Page")
    public void userValidateDANABalanceWithCurrentDANABalanceOnHomePage() { }

    @When("User tap Top Up Button on Home Page")
    public void userTapTopUpButtonOnHomePage() { homePage.tapTopUp(); }

    @When("User tap Transaction Button on Home Page")
    public void userTapTransactionButtonOnHomePage() { homePage.tapHistoryTransaction(); }

    @Then("User is on Transaction page")
    public void userIsOnTransactionPage() { }

    @When("User tap Account Button on Home Page")
    public void userTapAccountButtonOnHomePage() { homePage.tapMyAccount(); }

    @When("User tap Transfer Button on Home Page")
    public void userTapTransferButtonOnHomePage() { homePage.tapTransfer(); }

    @Then("User see message {string}")
    public void userSeeMessage(String arg0) { }

    @When("User tap QR Scan Button on Home Page")
    public void userTapQRScanButtonOnHomePage() { homePage.tapScanToPay(); }

    @Then("User is on QR Scan page")
    public void userIsOnQRScanPage() { }

    @When("User tap Notification Button on Home Page")
    public void userTapNotificationButtonOnHomePage() {
    }
}

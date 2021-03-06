package project.stepsdefinition;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.HomePage;
import project.pages.PayByQRPage;
import project.pages.TransactionHistoryPage;

public class HomeStepDefinition {

    HomePage homePage = new HomePage();
    PayByQRPage payByQRPage = new PayByQRPage();
    TransactionHistoryPage transactionHistoryPage = new TransactionHistoryPage();

    @When("User see DANA Balance on Home Page")
    public void userSeeDANABalanceOnHomePage() { homePage.viewBalance(); }

    @Then("User validate DANA Balance with current DANA Balance {string} on Home Page")
    public void userValidateDANABalanceWithCurrentDANABalanceOnHomePage(String balance) {
        String actual = homePage.viewBalance();
        Assert.assertEquals(balance, actual); }

    @When("User tap Top Up Button on Home Page")
    public void userTapTopUpButtonOnHomePage() { homePage.tapTopUp(); }

    @When("User tap Transaction Button on Home Page")
    public void userTapTransactionButtonOnHomePage() { homePage.tapHistoryTransaction(); }

    @Then("User is on Transaction page")
    public void userIsOnTransactionPage() { transactionHistoryPage.isOnTransactionHistoryPage(); }

    @When("User tap Account Button on Home Page")
    public void userTapAccountButtonOnHomePage() { homePage.tapMyAccount(); }

    @When("User tap Transfer Button on Home Page")
    public void userTapTransferButtonOnHomePage() { homePage.tapTransfer(); }

    @Then("User see message {string}")
    public void userSeeMessage(String comingsoon) throws InterruptedException {
        String actual = homePage.viewMessage();
        Thread.sleep(3000);
        Assert.assertEquals(comingsoon, actual); }

    @When("User tap QR Scan Button on Home Page")
    public void userTapQRScanButtonOnHomePage() { homePage.tapScanToPay(); }

    @Then("User is on QR Scan page")
    public void userIsOnQRScanPage() { payByQRPage.isOnPayByQRPage(); }

    @When("User tap Notification Button on Home Page")
    public void userTapNotificationButtonOnHomePage() { homePage.tapNotification();}

}

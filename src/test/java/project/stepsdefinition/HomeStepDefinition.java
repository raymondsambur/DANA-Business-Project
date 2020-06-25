package project.stepsdefinition;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.HomePage;
import project.pages.PayByQRPage;

public class HomeStepDefinition {

    HomePage homePage = new HomePage();
    PayByQRPage payByQRPage = new PayByQRPage();

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
    public void userIsOnTransactionPage() { }

    @When("User tap Account Button on Home Page")
    public void userTapAccountButtonOnHomePage() { homePage.tapMyAccount(); }

    @When("User tap Transfer Button on Home Page")
    public void userTapTransferButtonOnHomePage() { homePage.tapTransfer(); }

    @Then("User see message {string}")
    public void userSeeMessage(String commingsoon) {
        String actual = homePage.viewMessage();
        Assert.assertEquals(commingsoon, actual); }

    @When("User tap QR Scan Button on Home Page")
    public void userTapQRScanButtonOnHomePage() { homePage.tapScanToPay(); }

    @Then("User is on QR Scan page")
    public void userIsOnQRScanPage() { payByQRPage.isOnPayByQRPage(); }

    @When("User tap Notification Button on Home Page")
    public void userTapNotificationButtonOnHomePage() { homePage.tapNotification();}

    @When("User tap allow to take picture and record video on Pop Up Message")
    public void userTapAllowToTakePictureAndRecordVideoOnPopUpMessage() { homePage.tapAllowCamera();}

    @When("User tap allow to take access photo, media, and file on Pop Up Message")
    public void userTapAllowToTakeAccessPhotoMediaAndFileOnPopUpMessage() { homePage.tapAllowFiles();}
}

package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import project.pages.TopUpResultPage;

public class TopUpResultStepDefinition {
    TopUpResultPage topUpResultPage = new TopUpResultPage();

    @Then("User see error message {string} on Failed Top Up Result Page")
    public void userSeeErrorMessageOnFailedTopUpResultPage(String erMessage) {
        String actual = topUpResultPage.errorMessage();
        Assert.assertEquals(actual, erMessage); }

    @And("User tap Back to Home Button on Top Up Result Page")
    public void userTapBackToHomeButtonOnTopUpResultPage() { topUpResultPage.tapBackToHomeButton(); }

    @And("User is on {string} Top Up Result Page")
    public void userIsOnTopUpResultPage(String result) {
        String actual = topUpResultPage.getResult();
        Assert.assertEquals(actual, result);
    }

    @Then("User is on Top Up Result Page")
    public void userIsOnTopUpResultPage() { topUpResultPage.isOnTopUpResultPage(); }
}

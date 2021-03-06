package project.stepsdefinition;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.TopUpPage;
import project.pages.TopUpResultPage;

public class TopUpStepDefinition {
    TopUpPage topUpPage = new TopUpPage();
    TopUpResultPage topUpResultPage = new TopUpResultPage();

    @When("User input nominal {string} on top up nominal text field on Top Up Page")
    public void userInputNominalOnTopUpNominalTextFieldOnTopUpPage(String nominal) { topUpPage.inputNominal(nominal); }

    @When("User tap Pay button on Top Up Page")
    public void userTapPayButtonOnTopUpPage() { topUpPage.tapPayButton(); }

    @Then("User is on Success Payment Result Page")
    public void userIsOnSuccessPaymentResultPage() { }

    @Then("User is on Failed Payment Result Page")
    public void userIsOnFailedPaymentResultPage() { }

    @Then("User see error message {string} on Top Up Page")
    public void userSeeErrorMessageOnTopUpPage(String erMessage) {
        String actual = topUpPage.errorMessage();
        Assert.assertEquals(erMessage, actual); }

    @When("User tap Back Button on Top Up Page")
    public void userTapBackButtonOnTopUpPage() { topUpPage.tapBackButton(); }
}

package project.stepsdefinition;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import project.pages.TopUpPage;

public class TopUpStepDefinition {
    TopUpPage topUpPage = new TopUpPage();

    @When("User input nominal {string} on top up nominal text field on Top Up Page")
    public void userInputNominalOnTopUpNominalTextFieldOnTopUpPage(String nominal) { topUpPage.inputNominal(nominal); }

    @When("User tap Pay button on Top Up Page")
    public void userTapPayButtonOnTopUpPage() { topUpPage.tapPayButton(); }

    @Then("User is on Success Payment Result Page")
    public void userIsOnSuccessPaymentResultPage() { }

    @Then("User is on Failed Payment Result Page")
    public void userIsOnFailedPaymentResultPage() { }

    @Then("User see error message {string} on Top Up Page")
    public void userSeeErrorMessageOnTopUpPage(String erMessage) { topUpPage.errorMessage(erMessage); }

    @When("User tap Back Button on Top Up Page")
    public void userTapBackButtonOnTopUpPage() { topUpPage.tapBackButton(); }
}

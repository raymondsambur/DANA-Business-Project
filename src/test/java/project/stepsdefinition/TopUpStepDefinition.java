package project.stepsdefinition;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TopUpStepDefinition {


    @When("User input nominal {string} on top up nominal text field on Top Up Page")
    public void userInputNominalOnTopUpNominalTextFieldOnTopUpPage(String arg0) {
    }

    @When("User tap Pay button on Top Up Page")
    public void userTapPayButtonOnTopUpPage() { }

    @Then("User is on Success Payment Result Page")
    public void userIsOnSuccessPaymentResultPage() {
    }

    @Then("User is on Failed Payment Result Page")
    public void userIsOnFailedPaymentResultPage() {
    }

    @Then("User see error message {string} on Top Up Page")
    public void userSeeErrorMessageOnTopUpPage(String arg0) {
    }

    @When("User tap Back Button on Top Up Page")
    public void userTapBackButtonOnTopUpPage() {
    }
}

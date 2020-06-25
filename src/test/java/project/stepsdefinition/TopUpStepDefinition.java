package project.stepsdefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import project.pages.TopUpPage;
import project.pages.TopUpResultPage;

public class TopUpStepDefinition {
    TopUpPage topUpPage = new TopUpPage();

    @When("User input nominal {string} on top up nominal text field on Top Up Page")
    public void userInputNominalOnTopUpNominalTextFieldOnTopUpPage(String nominal) { topUpPage.inputNominal(nominal); }

    @When("User tap Top Up button on Top Up Page")
    public void userTapTopUpButtonOnTopUpPage() { topUpPage.tapTopUpButton(); }

    @Then("User see error message {string} on Top Up Page")
    public void userSeeErrorMessageOnTopUpPage(String erMessage) {
        String actual = topUpPage.errorMessage();
        Assert.assertEquals(erMessage, actual); }

    @When("User tap Back Button on Top Up Page")
    public void userTapBackButtonOnTopUpPage() { topUpPage.tapBackButton(); }

    @And("User tap Change button on Payment Method Pop Up")
    public void userTapChangeButtonOnPaymentMethodPopUp() { topUpPage.tapChangeButton(); }

    @And("User tap Alfamart on Payment Method List")
    public void userTapAlfamartOnPaymentMethodList() { topUpPage.tapAlfamart(); }

    @And("User tap Pay Button on Payment Method Pop Up")
    public void userTapPayButtonOnPaymentMethodPopUp() { topUpPage.tapPayButton(); }

    @And("User tap Bank Transfer on Payment Method List")
    public void userTapBankTransferOnPaymentMethodList() { topUpPage.tapBankTransfer(); }

    @And("User tap BRI Debit Card on Payment Method List")
    public void userTapBRIDebitCardOnPaymentMethodList() { topUpPage.tapBRIDebitCard(); }

    @Then("User see Payment Method Pop Up on Top Up Page")
    public void userSeePaymentMethodPopUpOnTopUpPage() { topUpPage.onPaymentMethod(); }

    @When("User tap Close button on Payment Method Pop Up")
    public void userTapCloseButtonOnPaymentMethodPopUp() { topUpPage.tapCloseButton(); }

    @Then("User see all Payment Method on Payment Method Pop Up")
    public void userSeeAllPaymentMethodOnPaymentMethodPopUp() { topUpPage.allPaymentMethod(); }

    @Then("User see top up amount is {string} on Payment Method Pop Up")
    public void userSeeTopUpAmountIsOnPaymentMethodPopUp(String amount) {
        String actual = topUpPage.amountTopUp();
        Assert.assertEquals(amount, actual); }
}

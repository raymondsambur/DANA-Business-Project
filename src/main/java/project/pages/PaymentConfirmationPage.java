package project.pages;

import project.locators.PaymentConfirmationLocator;

import static project.PageFunctions.waitABit;


public class PaymentConfirmationPage implements PaymentConfirmationLocator {

    public boolean isPaymentConfirmationPage() { return waitABit(BUTTON_MAKE_PURCHASE).isDisplayed(); }
    public void tapMakePurchaseButton () { waitABit(BUTTON_MAKE_PURCHASE).click(); }

}

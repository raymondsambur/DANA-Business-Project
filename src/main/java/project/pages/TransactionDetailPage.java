package project.pages;

import project.locators.TransactionDetailLocator;

import static project.PageFunctions.waitABit;

public class TransactionDetailPage implements TransactionDetailLocator {

    public boolean isOnTransactionDetailPage() { return waitABit(BUTTON_CONFIRM_PAYMENT).isDisplayed(); }
    public void tapConfirmPaymentButton() { waitABit(BUTTON_CONFIRM_PAYMENT).click(); }
    public void tapPayButton() { waitABit(BUTTON_PAY).click(); }

}

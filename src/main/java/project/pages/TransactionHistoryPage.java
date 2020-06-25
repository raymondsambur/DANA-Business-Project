package project.pages;

import project.PageFunctions;
import project.locators.TransactionHistoryLocator;
import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class TransactionHistoryPage implements TransactionHistoryLocator {
    public boolean isOnTransactionHistoryPage() { return PageFunctions.waitABit(TEXT_TRANSACTION_HISTORY_TITLE).isDisplayed(); }
}

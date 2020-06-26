package project.pages;

import project.PageFunctions;
import project.locators.TransactionResultLocator;

import static project.PageFunctions.waitABit;

public class TransactionResultPage implements TransactionResultLocator {

    public boolean isOnTransactionResultPage() { return waitABit(IMAGE_STATUS).isDisplayed(); }
    public String transactionStatus() { return waitABit(TEXT_STATUS).getText(); }
    public void tapBackToHomeButton() { waitABit(BUTTON_BACK_TO_HOME).click(); }

}

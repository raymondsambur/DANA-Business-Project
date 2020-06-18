package project.pages;

import project.PageFunctions;
import project.locators.HomeLocator;
import static project.androidDriver.AndroidDriverInstance.androidDriver;


public class HomePage implements HomeLocator {
    public boolean isOnHomePage() { return PageFunctions.waitABit(IMAGE_DANA).isDisplayed(); }

    public void tapTopUp() { return androidDriver.findElement(BUTTON_TOP_UP).click(); }
    public void tapHistoryTransaction() { return androidDriver.findElement(BUTTON_HISTORY).click(); }
    public void tapMyAccount() { return androidDriver.findElement(BUTTON_MY_ACCOUNT).click(); }
    public void tapScanToPay() { return androidDriver.findElement(BUTTON_SCAN_TO_PAY).click(); }
    public void tapTransfer() { return androidDriver.findElement(BUTTON_TRANSFER).click(); }

    public String viewBalance() { return androidDriver.findElement(TEXT_BALANCE).getText(); }
}

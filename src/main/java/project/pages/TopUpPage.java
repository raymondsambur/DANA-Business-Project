package project.pages;

import org.openqa.selenium.WebElement;
import project.PageFunctions;
import project.androidDriver.AndroidDriverInstance;
import project.locators.TopUpLocator;

import static project.androidDriver.AndroidDriverInstance.androidDriver;


public class TopUpPage implements TopUpLocator {
    public boolean isOnTopUpPage() { return PageFunctions.waitABit(TEXT_TOP_UP_TITLE).isDisplayed(); }

    public void inputNominal(String nominal){
        WebElement inputNominal = AndroidDriverInstance.androidDriver.findElement(TopUpLocator.INPUT_AMOUNT);
        inputNominal.sendKeys(nominal); }

    public String viewBalance() { return androidDriver.findElement(TEXT_BALANCE).getText(); }

    public void tapTopUpButton() { androidDriver.findElement(BUTTON_TOP_UP).click(); }
    public void tapBackButton() { androidDriver.findElement(BUTTON_BACK).click(); }

    public String errorMessage() { return androidDriver.findElement(TEXT_ERROR_MESSAGE).getText(); }

    //Payment Method
    public boolean onPaymentMethod() { return PageFunctions.waitABit(TEXT_PAYMENT_METHOD).isDisplayed(); }
    public void tapCloseButton() { androidDriver.findElement(BUTTON_CLOSE).click(); }
    public void tapChangeButton() { androidDriver.findElement(BUTTON_CHANGE).click(); }
    public void tapPayButton() { androidDriver.findElement(BUTTON_PAY).click(); }
    public void tapAlfamart() { androidDriver.findElement(BUTTON_ALFAMART).click(); }
    public void tapVirtualAccount() { androidDriver.findElement(BUTTON_VIRTUAL_ACCOUNT).click(); }
    public void tapBRIDebitCard() { androidDriver.findElement(BUTTON_DEBIT_CARD).click(); }
    public String amountTopUp() { return androidDriver.findElement(TOP_UP_AMOUNT).getText(); }
    public boolean allPaymentMethod() { return PageFunctions.waitABit(BUTTON_ALFAMART).isDisplayed(); }

}
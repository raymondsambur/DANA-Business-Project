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

    public void tapPayButton() { androidDriver.findElement(BUTTON_PAY).click(); }
    public void tapBackButton() { androidDriver.findElement(BUTTON_BACK).click(); }

    public String errorMessage() { return androidDriver.findElement(TEXT_ERROR_MESSAGE).getText(); }
}
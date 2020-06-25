package project.pages;

import project.PageFunctions;
import project.locators.TopUpResultLocator;

import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class TopUpResultPage implements TopUpResultLocator {
    public boolean isOnTopUpResultPage() {return PageFunctions.waitABit(TEXT_RESULT).isDisplayed();}

    public String errorMessage() { return androidDriver.findElement(ERROR_MESSAGE).getText(); }

    public String getResult() { return androidDriver.findElement(TEXT_RESULT).getText(); }

    public void tapBackToHomeButton() { androidDriver.findElement(BUTTON_BACK).click(); }
}

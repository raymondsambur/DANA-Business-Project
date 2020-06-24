package project.pages;

import org.apache.velocity.runtime.directive.contrib.For;
import org.openqa.selenium.WebElement;
import project.PageFunctions;
import project.locators.ForgotPasswordLocator;

import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class ForgotPasswordPage {
    public boolean onCForgotPasswordPage() {
        return PageFunctions.waitABit(ForgotPasswordLocator.TEXT_FORGOT_PASSWORD_TITLE).isDisplayed();
    }

    public void inputEmail(String email) {
        androidDriver.findElement(ForgotPasswordLocator.INPUT_EMAIL).sendKeys(email);
    }
    public void clickSendEmail() {
        androidDriver.findElement(ForgotPasswordLocator.BUTTON_SEND).click();
    }


}

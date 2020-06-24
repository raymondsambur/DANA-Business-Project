package project.pages;

import org.apache.velocity.runtime.directive.contrib.For;
import org.openqa.selenium.WebElement;
import project.PageFunctions;
import project.androidDriver.AndroidDriverInstance;
import project.locators.ForgotPasswordLocator;
import project.locators.LoginLocator;

import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class ForgotPasswordPage {
    public boolean onForgotPasswordPage() {
        return PageFunctions.waitABit(ForgotPasswordLocator.TEXT_FORGOT_PASSWORD_TITLE).isDisplayed();
    }

    public void inputEmail(String email) {
        androidDriver.findElement(ForgotPasswordLocator.INPUT_EMAIL).sendKeys(email);
    }
    public void clickSendEmail() {
        androidDriver.findElement(ForgotPasswordLocator.BUTTON_SEND).click();
    }
    public boolean disabledSendButton(){
        WebElement signInButton = AndroidDriverInstance.androidDriver.findElement(ForgotPasswordLocator.BUTTON_SEND);
        return signInButton.isEnabled();
    }
    public void clickBack() {
        androidDriver.findElement(ForgotPasswordLocator.BUTTON_BACK).click();
    }
    public boolean checkErrorMessageField(){
        WebElement signInButton = AndroidDriverInstance.androidDriver.findElement(ForgotPasswordLocator.TEXT_ERROR_MESSAGE);
        return signInButton.isDisplayed();
    }
    public String errorMessageField(){
        WebElement error = androidDriver.findElement(ForgotPasswordLocator.TEXT_ERROR_MESSAGE);
        return error.getText();
    }
    public String errorWrongEmail(){
        WebElement error = androidDriver.findElement(ForgotPasswordLocator.TEXT_POP_MESSAGE);
        return error.getText();
    }
}

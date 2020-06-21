package project.pages;

import io.appium.java_client.android.AndroidDriver;
import io.cucumber.java.en.And;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import project.PageFunctions;
import project.androidDriver.AndroidDriverInstance;
import project.locators.LoginLocator;

public class LoginPage {
    public boolean isOnLoginPage(){
        return PageFunctions.waitABit(LoginLocator.IMAGE_LOGIN).isDisplayed();
    }

    public void inputPhone(String number){
        WebElement inputPhone = AndroidDriverInstance.androidDriver.findElement(LoginLocator.INPUT_PHONE_NUMBER);
        inputPhone.sendKeys(number);
    }

    public void inputPassword(String password){
        WebElement inputPassword = AndroidDriverInstance.androidDriver.findElement(LoginLocator.INPUT_PASSWORD);
        inputPassword.sendKeys(password);
    }

    public void clickSignInButton(){
        WebElement signInButton = AndroidDriverInstance.androidDriver.findElement(LoginLocator.BUTTON_LOGIN);
        signInButton.click();
    }

    public boolean checkWarningText(){
        return PageFunctions.waitABit(LoginLocator.TEXT_ERROR_MESSAGE).isDisplayed();
    }

    public boolean checkWarningTextPassword(){
        return PageFunctions.waitABit(LoginLocator.TEXT_ERROR_MESSAGE).isDisplayed();
    }

    public String getWarningText(){
        WebElement warningText = AndroidDriverInstance.androidDriver.findElement(LoginLocator.TEXT_ERROR_MESSAGE);
        return warningText.getText();
    }

    public String getWarningTextPassword(String expected){
        WebElement warningText = AndroidDriverInstance.androidDriver.findElement(By.xpath("//android.widget.TextView[contains(@text, '"+expected+"')]"));

        return warningText.getText();
    }

    public boolean disabledButton(){
        WebElement signInButton = AndroidDriverInstance.androidDriver.findElement(LoginLocator.BUTTON_LOGIN);
        return signInButton.isEnabled();
    }

    public void clickHideShowPassButton(){
        WebElement hideShowButton = AndroidDriverInstance.androidDriver.findElement(LoginLocator.ICON_SHOW_PASSWORD);
        hideShowButton.click();
    }

    public String getPasswordText(){
        WebElement passText = AndroidDriverInstance.androidDriver.findElement(LoginLocator.INPUT_PASSWORD);

        return passText.getText();
    }

    public boolean isPasswordMasked() {
        WebElement password = AndroidDriverInstance.androidDriver.findElement(By.xpath("//android.widget.EditText[@password = 'true']"));

        return password.isDisplayed();
    }
    public void clickForgotPassButton(){
        WebElement forPassButton = AndroidDriverInstance.androidDriver.findElement(LoginLocator.BUTTON_FORGOT_PASSWORD);
        forPassButton.click();
    }

    public void clickRegisterButton(){
        WebElement registerButton = AndroidDriverInstance.androidDriver.findElement(LoginLocator.BUTTON_REGISTER);
        registerButton.click();
    }
}

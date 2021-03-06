package project.pages;

import org.openqa.selenium.WebElement;
import project.PageFunctions;
import project.androidDriver.AndroidDriverInstance;
import project.locators.LoginLocator;
import project.locators.RegisterLocator;

public class RegisterPage {
    public boolean isOnRegisterPage(){
        return PageFunctions.waitABit(RegisterLocator.TEXT_REGISTER_TITLE).isDisplayed();
    }

    public void inputName(String name){
        WebElement inputName = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.INPUT_NAME);
        inputName.sendKeys(name);
    }

    public void inputEmail(String email){
        WebElement inputEmail = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.INPUT_EMAIL);
        inputEmail.sendKeys(email);
    }

    public void inputPassword(String password){
        WebElement inputPassword = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.INPUT_PASSWORD);
        inputPassword.sendKeys(password);
    }

    public void inputPhone(String phone){
        WebElement inputPhone = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.INPUT_PHONE_NUMBER);
        inputPhone.sendKeys(phone);
    }

    public void inputConfirmation(String repass){
        WebElement inputRePass = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.INPUT_RE_PASSWORD);
        inputRePass.sendKeys(repass);
    }

    public void tapRegisterButton(){
        WebElement registerBtn = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.BUTTON_REGISTER);
        registerBtn.click();
    }

    public void tapBackButton(){
        WebElement backBtn = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.BUTTON_BACK);
        backBtn.click();
    }

    public boolean buttonDisabled(){
        WebElement registerButton = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.BUTTON_REGISTER);
        return registerButton.isEnabled();
    }

    public boolean checkWarningText(){
        return PageFunctions.waitABit(RegisterLocator.TEXT_ERROR_GENERAL).isDisplayed();
    }

    public  String getErrorText(){
        WebElement errortext = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.TEXT_ERROR_GENERAL);
        return errortext.getText();
    }

    public String getNameFieldErrorText(){
        WebElement errortext = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.TEXT_ERROR_NAME);
        return errortext.getText();
    }

    public String getPhoneFieldErrorText(){
        WebElement errortext = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.TEXT_ERROR_PHONE);
        return errortext.getText();
    }

    public String getEmailFieldErrorText(){
        WebElement errortext = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.TEXT_ERROR_EMAIL);
        return errortext.getText();
    }

    public String getPassFieldErrorText(){
        WebElement errortext = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.TEXT_ERROR_PASSWORD);
        return errortext.getText();
    }

    public String getConfirmationFieldErrorText(){
        WebElement errortext = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.TEXT_ERROR_CONFIRMATION_PASSWORD);
        return errortext.getText();
    }

}

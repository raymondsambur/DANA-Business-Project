package project.pages;

import org.openqa.selenium.WebElement;
import project.PageFunctions;
import project.androidDriver.AndroidDriverInstance;
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


}

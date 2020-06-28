package project.pages;

import org.openqa.selenium.By;
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

    public boolean checkErrorText(){
        return PageFunctions.waitABit(RegisterLocator.TEXT_ERROR_MESSAGE).isDisplayed();
    }

    public  String getErrorText(){
        WebElement errortext = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.TEXT_ERROR_MESSAGE);
        return errortext.getText();
    }

    public boolean isPasswordMasked() {
        WebElement password = AndroidDriverInstance.androidDriver.findElement(By.xpath("//android.widget.EditText[@password = 'true']"));

        return password.isDisplayed();
    }

    public void tapHideShowPassButton(){
        WebElement hideShowButton = AndroidDriverInstance.androidDriver.findElement(LoginLocator.ICON_SHOW_PASSWORD);
        hideShowButton.click();
    }

    public boolean checkPopUp(){
        return PageFunctions.waitABit(RegisterLocator.POP_UP_MESSAGE).isDisplayed();
    }

    public String getPopUpMessage(){
        WebElement message = AndroidDriverInstance.androidDriver.findElement(RegisterLocator.POP_UP_MESSAGE);
        return message.getText();
    }

}

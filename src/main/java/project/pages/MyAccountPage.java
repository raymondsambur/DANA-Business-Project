package project.pages;

import project.PageFunctions;
import project.locators.MyAccountLocator;

import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class MyAccountPage implements MyAccountLocator {

    // Check if on My Account Page
    public boolean onMyAccountPage(){
        return PageFunctions.waitABit(ICON_USER).isDisplayed();
    }

    // Labels Validation
    public String checkUserName() { return androidDriver.findElement(TEXT_NAME).getText(); }
    public String checkBalance() { return androidDriver.findElement(TEXT_BALANCE).getText(); }
    public String checkEmail() { return androidDriver.findElement(TEXT_EMAIL).getText(); }
    public String checkPhoneNumber() {return androidDriver.findElement(TEXT_PHONE_NUMBER).getText(); }

    // Buttons Functions
    public void tapChangeProfile() { androidDriver.findElement(BUTTON_CHANGE_PROFILE).click(); }
    public void tapBalance() { androidDriver.findElement(TEXT_BALANCE).click(); }
    public void tapChangePassword() { androidDriver.findElement(BUTTON_CHANGE_PASSWORD).click(); }
    public void tapChangePINSecurity() { androidDriver.findElement(BUTTON_CHANGE_PIN_SECURITY).click(); }
    public void tapLogout() { androidDriver.findElement(BUTTON_LOGOUT).click(); }
    public void tapSetting() { androidDriver.findElement(BUTTON_SETTING).click(); }
    public void tapBack() { androidDriver.findElement(BUTTON_BACK).click(); }

    // User Image (Exclude)
    public void tapImageUser() { androidDriver.findElement(IMAGE_USER).click(); }

}

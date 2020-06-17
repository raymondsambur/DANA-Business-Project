package project.pages;

import org.openqa.selenium.WebElement;
import project.locators.ChangePasswordLocator;

import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class ChangePassword implements ChangePasswordLocator {

    public boolean onChangePasswordPage() { return androidDriver.findElement(TEXT_CHANGE_PASSWORD_TITLE).isDisplayed(); }

    public void inputNewPassword(String newPassword) { androidDriver.findElement(INPUT_NEW_PASSWORD).sendKeys(newPassword); }
    public void inputRePassword(String rePassword) { androidDriver.findElement(INPUT_RE_PASSWORD).sendKeys(rePassword); }

    public void tapSaveChanges() { androidDriver.findElement(BUTTON_SAVE_CHANGES).click(); }
    public void tapBack() { androidDriver.findElement(BUTTON_BACK).click(); }

    public String errorMessage(){
        WebElement error = androidDriver.findElement(TEXT_ERROR_MESSAGE);
        return error.getAttribute("name");
    }

}

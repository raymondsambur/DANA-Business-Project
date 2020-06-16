package project.pages;

import org.openqa.selenium.WebElement;
import project.PageFunctions;
import project.locators.ChangePINSecurityLocator;

import static project.androidDriver.AndroidDriverInstance.androidDriver;

public class ChangePIN implements ChangePINSecurityLocator {

    public boolean onChangePINPage() { return PageFunctions.waitABit(TEXT_CHANGE_PIN_SECURITY_TITLE).isDisplayed(); }

    public void inputOldPIN(String oldPIN) { androidDriver.findElement(INPUT_OLD_PIN).sendKeys(oldPIN); }
    public void inputNewPIN(String newPIN) { androidDriver.findElement(INPUT_NEW_PIN).sendKeys(newPIN); }
    public void inputRePIN(String rePIN) { androidDriver.findElement(INPUT_RE_ENTER_PIN).sendKeys(rePIN); }

    public void tapBack() { androidDriver.findElement(BUTTON_BACK).click(); }
    public void tapChange() { androidDriver.findElement(BUTTON_CHANGE).click(); }

    public String errorMessage(){
        WebElement error = androidDriver.findElement(TEXT_ERROR_MESSAGE);
        return error.getAttribute("name");
    }

}

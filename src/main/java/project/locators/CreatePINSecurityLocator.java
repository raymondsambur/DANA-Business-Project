package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface CreatePINSecurityLocator {

    // Text View
    By TEXT_INPUT_PIN_TITLE = MobileBy.id("tvSetPinTitle");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvSetPinErrorMsg");

    // Edit Text
    By INPUT_NEW_PIN_SECURITY = MobileBy.id("etSetPinInput");
    By INPUT_RE_ENTER_PIN = MobileBy.id("etSetPinConfirm");

    // Button
    By BUTTON_BACK = MobileBy.id("btnSetPinBackBtn");
    By BUTTON_SUBMIT = MobileBy.id("btnSetPinSubmit");

    // Icon
    By ICON_PIN_1 = MobileBy.id("icSetPinIcon1");
    By ICON_PIN_2 = MobileBy.id("icSetPinIcon2");

}

package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ChangePINSecurityLocator {

    // Text View
    By TEXT_CHANGE_PIN_SECURITY_TITLE = MobileBy.id("tvChangePinTitle");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvChangePinErrorMsg");

    // Edit Text
    By INPUT_OLD_PIN = MobileBy.id("etChangePinOld");
    By INPUT_NEW_PIN = MobileBy.id("etChangePinInput");
    By INPUT_RE_ENTER_PIN = MobileBy.id("etChangePinConfirm");

    // Button
    By BUTTON_BACK = MobileBy.id("btnChangePinBackBtn");
    By BUTTON_CHANGE = MobileBy.id("btnChangePinChange");

    // Icon
    By ICON_PIN_1 = MobileBy.id("icChangePinIcon1");
    By ICON_PIN_2 = MobileBy.id("icChangePinIcon2");
    By ICON_PIN_3 = MobileBy.id("icChangePinIcon3");

}

package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface InputPinSecurityLocator {

    // Text View
    By TEXT_SECURITY_CODE_TITLE = MobileBy.id("tvSecurityCodeTitle");
    By TEXT_CONFIRM_FINGER_PRINT = MobileBy.id("tvSecurityCodeFingerprint");
    By TEXT_TOUCH_FINGER_PRINT_SENSOR = MobileBy.id("tvSecurityCodeFingerprintDesc");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvErrorMessage");

    // Edit Text
    By INPUT_PIN = MobileBy.id("etSecurityCodePIN");

    // Button
    By BUTTON_FORGOT_YOUR_SECURITY_CODE = MobileBy.id("tvSecurityCodeFingerprint");
    By BUTTON_USE_PIN = MobileBy.id("btnSecurityCodeUsePIN");
    By BUTTON_LOGOUT = MobileBy.id("btnSecurityCodeLogout");

    // Numpad

}

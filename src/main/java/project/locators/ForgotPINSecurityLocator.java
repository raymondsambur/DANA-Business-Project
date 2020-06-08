package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ForgotPINSecurityLocator {

    // Text View
    By TEXT_FORGOT_PIN_SECURITY_TITLE = MobileBy.id("tvForgotPinTitle");

    // Edit Text
    By INPUT_EMAIL = MobileBy.id("etForgotPinInput");

    // Button
    By BUTTON_SEND = MobileBy.id("btnForgotPinSend");
    By BUTTON_BACK = MobileBy.id("btnForgotPinBack");

    // Icon
    By ICON_EMAIL = MobileBy.id("icForgotPinEmail");

}

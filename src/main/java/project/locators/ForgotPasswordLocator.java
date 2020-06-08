package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ForgotPasswordLocator {

    // Text View
    By TEXT_FORGOT_PASSWORD_TITLE = MobileBy.id("tvForgotPasswordTitle");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvErrorMessage");

    // Edit Text
    By INPUT_EMAIL = MobileBy.id("etForgotPasswordEmail");

    // Button
    By BUTTON_SEND = MobileBy.id("btnForgotPasswordSend");
    By BUTTON_BACK = MobileBy.id("btnForgotPasswordBack");

    // Icon
    By ICON_EMAIL = MobileBy.id("icForgotPasswordEmail");

}

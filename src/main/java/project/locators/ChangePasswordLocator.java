package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface ChangePasswordLocator {

    // Text View
    By TEXT_CHANGE_PASSWORD_TITLE = MobileBy.id("tvChangePasswordTitle");
    By TEXT_ERROR_MESSAGE = MobileBy.id("tvErrorMessage");

    // Edit Text
    By INPUT_NEW_PASSWORD = MobileBy.id("etChangePasswordNewPass");
    By INPUT_RE_PASSWORD = MobileBy.id("etChangePasswordReenterPass");

    // Button
    By BUTTON_SAVE_CHANGES = MobileBy.id("btnChangePasswordChange");
    By BUTTON_BACK = MobileBy.id("btnChangePasswordBack");

    // Icon
    By ICON_LOCK_LIGHT = MobileBy.id("icChangePasswordLockLight");
    By ICON_LOCK_DARK = MobileBy.id("icChangePasswordLockDark");

}

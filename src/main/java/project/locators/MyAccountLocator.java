package project.locators;

import io.appium.java_client.MobileBy;
import org.openqa.selenium.By;

public interface MyAccountLocator {

    // Text View
    By TEXT_NAME = MobileBy.id("tvUserName");
    By TEXT_PHONE_NUMBER = MobileBy.id("tvUserPhone");
    By TEXT_EMAIL = MobileBy.id("tvUserEmail");
    By TEXT_BALANCE = MobileBy.id("tvUserBalance");

    // Image View
    By IMAGE_USER = MobileBy.id("ivUserPhoto");

    // Icon
    By ICON_USER = MobileBy.id("icUserIcon");
    By ICON_PHONE = MobileBy.id("icUserPhone");
    By ICON_BALANCE = MobileBy.id("icUserBalance");
    By ICON_PROFILE = MobileBy.id("icUserProfile");
    By ICON_LOCK = MobileBy.id("icUserLock");
    By ICON_PIN = MobileBy.id("icUserPin");
    By ICON_LOGOUT = MobileBy.id("icUserLogout");
    By ICON_EMAIL = MobileBy.id("icUserEmail");

    // Button
    By BUTTON_CHANGE_PROFILE = MobileBy.id("btnUserChangeProfile");
    By BUTTON_CHANGE_PIN_SECURITY = MobileBy.id("btnUserChangePin");
    By BUTTON_CHANGE_PASSWORD = MobileBy.id("btnUserChangePin");
    By BUTTON_LOGOUT = MobileBy.id("btnUserLogout");
    By BUTTON_BACK = MobileBy.id("btnUserBackBtn");
    By BUTTON_SETTING = MobileBy.id("btnUserSetting");


}
